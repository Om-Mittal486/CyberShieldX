import joblib
import re
from scipy.sparse import hstack

# ================================
# Load trained components
# ================================

model = joblib.load("saved_model/cybershieldx_model.pkl")
tfidf = joblib.load("saved_model/tfidf_vectorizer.pkl")
scaler = joblib.load("saved_model/scaler.pkl")

# ================================
# Text cleaning (same as training)
# ================================

def clean_text(text):
    text = str(text).lower()
    text = re.sub(r"http\S+", "", text)
    text = re.sub(r"\S+@\S+", "", text)
    text = re.sub(r"[^a-z0-9\s]", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()

# ================================
# Dynamic scoring from text
# ================================

def compute_scores_from_text(text):
    text = text.lower()

    high_risk_words = ["kill", "leak", "otp", "hack", "bomb", "die", "threat"]
    harassment_words = ["idiot", "stupid", "useless", "dumb", "moron"]

    score = 10
    keywords = []

    for w in high_risk_words:
        if w in text:
            score += 40
            keywords.append(w)

    for w in harassment_words:
        if w in text:
            score += 20
            keywords.append(w)

    score = min(score, 100)
    confidence = min(60 + score // 2, 100)

    return score, confidence, ",".join(keywords)

# ================================
# Final prediction function
# ================================

def analyze_message(message):
    toxicity_score, confidence, matched_keywords = compute_scores_from_text(message)

    clean = clean_text(message)
    text_vec = tfidf.transform([clean])

    keyword_count = len(matched_keywords.split(",")) if matched_keywords else 0
    num_vec = scaler.transform([[toxicity_score, confidence, keyword_count]])

    combined = hstack([text_vec, num_vec])

    prediction = model.predict(combined)[0]
    prob = model.predict_proba(combined).max()

    return {
        "predicted_label": prediction,
        "confidence": round(float(prob), 2),
        "toxicity_score": toxicity_score,
        "matched_keywords": matched_keywords
    }
