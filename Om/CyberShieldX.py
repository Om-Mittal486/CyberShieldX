# ==========================================
# CyberShieldX - AI Toxicity Risk Classifier
# ==========================================

import pandas as pd
import numpy as np
import re

from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.preprocessing import StandardScaler
from scipy.sparse import hstack


# ==========================================
# 1. DATASET PATH (CHANGE ONLY IF NEEDED)
# ==========================================

DATASET_PATH = r"O:\Clones\CyberShieldX\cybershieldx_dataset.csv"
# ⬆️ If your file name is different, edit ONLY this line

# ==========================================
# 2. LOAD DATASET
# ==========================================

df = pd.read_csv(DATASET_PATH)

print("✅ Dataset loaded successfully")
print("Total samples:", len(df))

# ==========================================
# 3. LABEL MAPPING (Fine → 4 Classes)
# ==========================================

def map_label(label):
    label = str(label).lower()
    if "non" in label or "safe" in label:
        return "Safe"
    elif "mild" in label or "insult" in label:
        return "Mild Toxicity"
    elif "harass" in label or "bully" in label:
        return "Harassment"
    else:
        return "High-Risk Threat"

df["final_label"] = df["toxicity_label"].apply(map_label)

print("\n📌 Label distribution:")
print(df["final_label"].value_counts())

# ==========================================
# 4. TEXT CLEANING (MINIMAL & SAFE)
# ==========================================

def clean_text(text):
    text = str(text).lower()
    text = re.sub(r"http\S+", "", text)
    text = re.sub(r"\S+@\S+", "", text)
    text = re.sub(r"[^a-z0-9\s]", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()

df["clean_text"] = df["message_text"].apply(clean_text)

# ==========================================
# 5. FEATURE ENGINEERING
# ==========================================

# ---- Text Features (TF-IDF) ----
tfidf = TfidfVectorizer(
    ngram_range=(1, 2),
    max_features=5000,
    min_df=2
)

X_text = tfidf.fit_transform(df["clean_text"])

# ---- Numeric Features ----
df["keyword_count"] = df["matched_keywords"].fillna("").apply(
    lambda x: len(str(x).split(",")) if x != "" else 0
)

numeric_features = df[["toxicity_score", "confidence", "keyword_count"]]

scaler = StandardScaler()
X_numeric = scaler.fit_transform(numeric_features)

# ---- Combine Features ----
X = hstack([X_text, X_numeric])
y = df["final_label"]

# ==========================================
# 6. TRAIN-TEST SPLIT
# ==========================================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    stratify=y,
    random_state=42
)

# ==========================================
# 7. MODEL TRAINING (NO REBALANCING)
# ==========================================

model = LogisticRegression(
    max_iter=1000,
    class_weight="balanced",
    n_jobs=-1
)

model.fit(X_train, y_train)

print("\n✅ Model training completed")

# ==========================================
# 8. MODEL EVALUATION
# ==========================================

y_pred = model.predict(X_test)

print("\n📊 Classification Report:\n")
print(classification_report(y_test, y_pred))

print("\n🧩 Confusion Matrix:\n")
print(confusion_matrix(y_test, y_pred))

# ==========================================
# 9. CUSTOM MESSAGE ANALYSIS FUNCTION
# ==========================================

def analyze_message(message, toxicity_score, confidence, matched_keywords=""):
    clean = clean_text(message)
    text_vec = tfidf.transform([clean])

    keyword_count = len(matched_keywords.split(",")) if matched_keywords else 0
    num_vec = scaler.transform([[toxicity_score, confidence, keyword_count]])

    combined = hstack([text_vec, num_vec])

    prediction = model.predict(combined)[0]
    prob = model.predict_proba(combined).max()

    return {
        "message": message,
        "predicted_label": prediction,
        "confidence": round(float(prob), 2)
    }

# ==========================================
# 10. CUSTOM DATA TEST (LIVE CHECK)
# ==========================================

print("\n🚨 Custom Message Tests:\n")

tests = [
    ("Send your bank OTP or I will leak your photos", 92, 95, "otp,leak"),
    ("You are useless and annoying", 45, 80, "useless"),
    ("Hey can you share the notes?", 5, 98, ""),
]

for t in tests:
    result = analyze_message(*t)
    print(result)

import joblib
import os

# Create folder to store model files
os.makedirs("saved_model", exist_ok=True)

# Save components
joblib.dump(model, "saved_model/cybershieldx_model.pkl")
joblib.dump(tfidf, "saved_model/tfidf_vectorizer.pkl")
joblib.dump(scaler, "saved_model/scaler.pkl")
joblib.dump(model.classes_, "saved_model/labels.pkl")

print("✅ Model and preprocessors saved successfully")

