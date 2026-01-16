# 🛡️ CyberShieldX  
**AI-Powered Cyberbullying & Cybercrime Detection Platform**

---

## Introduction

**CyberShieldX** is an AI-powered system designed to detect **cyberbullying, harassment, and high-risk cybercrime threats** from text-based messages.  
The platform helps users understand the **severity of online messages**, identify potentially dangerous content, and receive **clear, explainable AI predictions**.

CyberShieldX uses a **custom-trained Natural Language Processing (NLP) model** combined with **rule-based intent detection** to provide accurate and reliable results without relying on third-party AI APIs.

> This project includes a trained machine learning model, a Flask backend, and a web-based frontend for real-time message analysis.

---

## Key Objectives

- Detect toxic and abusive online messages  
- Identify high-risk cybercrime-related threats  
- Provide explainable AI predictions  
- Assist users in understanding message severity  
- Offer a simple and interactive web interface  

---

## Key Features

### 🧠 AI Message Analyzer
- Custom-trained NLP classification model  
- TF-IDF + Logistic Regression  
- Class-weighted learning (no data rebalancing)  
- High recall for high-risk threats  
- Confidence score generation  

### 🔍 Hybrid Detection Logic
- Machine learning–based text classification  
- Rule-based keyword and intent analysis  
- Robust handling of unseen and custom inputs  

### 🌐 Web Interface
- Text input via browser  
- Real-time prediction results  
- Displays:
  - Risk category
  - Confidence score
  - Toxicity score
  - Matched keywords  

### 📦 Production-Ready Model
- Model trained once and serialized  
- Loaded for inference without retraining  
- Clean separation between training and prediction  

---

## Technology Stack

### Frontend
- HTML  
- CSS  
- Jinja2 Templates  

### Backend
- Python  
- Flask  

### Machine Learning
- scikit-learn  
- TF-IDF Vectorization  
- Logistic Regression (class-weighted)  
- pandas, NumPy, SciPy  

---

## System Architecture

```bash
User (Browser)
↓
Web UI (HTML + CSS)
↓
Flask Backend
↓
Saved ML Model
↓
Prediction + Scores
↓
Result Displayed to User
```

---

## Model Design

### Classification Labels

The model predicts one of the following **risk categories**:

- **Safe**
- **Mild Toxicity**
- **Harassment**
- **High-Risk Threat**

Fine-grained dataset labels are mapped into these categories to ensure stability and reduce the effects of class imbalance.

---

## Dataset

- Custom dataset: `cybershieldx_dataset.csv`  
- ~750 labeled samples  
- Includes:
  - Message text  
  - Toxicity labels  
  - Toxicity score  
  - Confidence score  
  - Matched keywords  
  - Crime-related metadata  

The dataset reflects **real-world imbalance**, which is intentionally preserved.

---

## Model Training Strategy

- No oversampling or undersampling  
- Class-weighted loss to handle imbalance  
- Emphasis on **recall for high-risk threats**  
- Evaluation using:
  - Precision  
  - Recall  
  - F1-score  
  - Confusion matrix  

---

## How to Run the Project

### Prerequisites
- Python 3.9+
- pip

---

### Install Dependencies

```bash
pip install pandas numpy scikit-learn scipy flask joblib
```

## How to Run the Project

### Prerequisites
- Python 3.9+
- pip

### Run the Web Application

```bash
cd CyberShieldX
python app.py
```

Open your browser and visit:

```bash
http://127.0.0.1:5000
```

## Project Structure
```bash
CyberShieldX/
├── app.py # Flask backend
├── predict.py # Model loading & inference
├── CyberShieldX.py # Model training script
│
├── saved_model/
│ ├── cybershieldx_model.pkl
│ ├── tfidf_vectorizer.pkl
│ ├── scaler.pkl
│ └── labels.pkl
│
├── templates/
│ └── index.html
│
├── static/
│ └── style.css
│
├── cybershieldx_dataset.csv
└── README.md
```


---

## Limitations

- Currently supports text-only analysis  
- Crime-type mapping is rule-based  
- Dataset size is moderate  
- OCR and PDF reporting are planned extensions  

---

## Future Enhancements

- Screenshot OCR for evidence analysis  
- Legal section and severity mapping  
- PDF legal report generation  
- REST API for external integrations  
- Cloud deployment  

---

## Academic Justification

> “CyberShieldX uses a hybrid AI approach combining supervised NLP classification with rule-based intent detection to ensure accuracy, explainability, and real-world relevance in cybercrime detection.”

---

## License

This project is licensed under the **MIT License**.

---

## Acknowledgments

- scikit-learn community  
- Open-source Python ecosystem  
- Cyber safety research initiatives  

---

**Built with ❤️ as an AI-driven cyber safety initiative**
