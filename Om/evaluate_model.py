import pandas as pd
import joblib
import re
from scipy.sparse import hstack
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score

# ================================
# PATHS
# ================================

DATASET_PATH = r"O:\Clones\CyberShieldX\cybershieldx_dataset.csv"
MODEL_DIR = "saved_model"

# ================================
# LOAD DATASET
# ================================

df = pd.read_csv(DATASET_PATH)
print("✅ Dataset loaded:", len(df), "rows")

# ================================
# LOAD SAVED MODEL COMPONENTS
# ================================

model = joblib.load(f"{MODEL_DIR}/cybershieldx_model.pkl")
tfidf = joblib.load(f"{MODEL_DIR}/tfidf_vectorizer.pkl")
scaler = joblib.load(f"{MODEL_DIR}/scaler.pkl")

# ================================
# SAME LABEL MAPPING AS TRAINING
# ================================

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

df["actual_label"] = df["toxicity_label"].apply(map_label)

# ================================
# TEXT CLEANING (MUST MATCH)
# ================================

def clean_text(text):
    text = str(text).lower()
    text = re.sub(r"http\S+", "", text)
    text = re.sub(r"\S+@\S+", "", text)
    text = re.sub(r"[^a-z0-9\s]", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()

df["clean_text"] = df["message_text"].apply(clean_text)

# ================================
# FEATURE ENGINEERING (SAME AS TRAINING)
# ================================

X_text = tfidf.transform(df["clean_text"])

df["keyword_count"] = df["matched_keywords"].fillna("").apply(
    lambda x: len(str(x).split(",")) if x else 0
)

numeric_features = df[["toxicity_score", "confidence", "keyword_count"]]
X_numeric = scaler.transform(numeric_features)

X = hstack([X_text, X_numeric])

# ================================
# PREDICTIONS
# ================================

df["predicted_label"] = model.predict(X)

# ================================
# EVALUATION
# ================================

print("\n📊 ACCURACY:")
print(accuracy_score(df["actual_label"], df["predicted_label"]))

print("\n📋 CLASSIFICATION REPORT:\n")
print(classification_report(df["actual_label"], df["predicted_label"]))

print("\n🧩 CONFUSION MATRIX:\n")
print(confusion_matrix(df["actual_label"], df["predicted_label"]))

# ================================
# SAVE COMPARISON RESULTS (OPTIONAL BUT RECOMMENDED)
# ================================

df[[
    "message_text",
    "actual_label",
    "predicted_label",
    "toxicity_score",
    "confidence"
]].to_csv("model_vs_dataset_comparison.csv", index=False)

print("\n✅ Comparison file saved: model_vs_dataset_comparison.csv")
