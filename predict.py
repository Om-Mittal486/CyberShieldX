import warnings
warnings.filterwarnings("ignore", category=UserWarning)

import joblib
import re
from scipy.sparse import hstack

# ================================
# Load Saved Components
# ================================

model = joblib.load("saved_model/cybershieldx_model.pkl")
tfidf = joblib.load("saved_model/tfidf_vectorizer.pkl")
scaler = joblib.load("saved_model/scaler.pkl")
labels = joblib.load("saved_model/labels.pkl")

# ================================
# Text Cleaning (MUST MATCH TRAINING)
# ================================

def clean_text(text):
    text = str(text).lower()
    text = re.sub(r"http\S+", "", text)
    text = re.sub(r"\S+@\S+", "", text)
    text = re.sub(r"[^a-z0-9\s]", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()

# ================================
# Prediction Function
# ================================

def analyze_message(message, toxicity_score, confidence, matched_keywords=""):
    clean = clean_text(message)
    text_vec = tfidf.transform([clean])

    keyword_count = len(matched_keywords.split(",")) if matched_keywords else 0
    num_vec = scaler.transform([[toxicity_score, confidence, keyword_count]])

    combined = hstack([text_vec, num_vec])

    prediction = model.predict(combined)[0]
    prob = model.predict_proba(combined).max()

    return {
        "predicted_label": prediction,
        "confidence": round(float(prob), 2)
    }

# ================================
# Test Loaded Model
# ================================

result = analyze_message(
    "Send OTP or I will leak your photos",
    toxicity_score=95,
    confidence=96,
    matched_keywords="otp,leak"
)

print(result)
