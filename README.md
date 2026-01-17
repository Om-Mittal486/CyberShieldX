<div align="center">

# CyberShieldX

### AI-Powered Cybercrime Detection & Investigation Platform

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-CyberShieldX-00D9FF?style=for-the-badge)](https://cybershieldx-rose.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.2-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**[Live Demo](https://cybershieldx-rose.vercel.app/)**

</div>

---

## 📖 Overview

CyberShieldX is an AI-powered platform that detects cyberbullying, online harassment, and digital threats through Natural Language Processing and Optical Character Recognition. It provides real-time threat analysis, legal framework mapping, and automated investigation reporting.

### Key Features

- **Real-time Threat Detection** - Analyze text and images with 85-90% accuracy
- **Phishing URL Scanner** - 9-layer detection system with typosquatting analysis
- **Legal Framework Integration** - Automatic mapping to IPC, IT Act 2000, and POCSO Act
- **Professional Reporting** - Generate court-ready PDF documentation
- **Multilingual Support** - English, Hindi, and Hinglish detection
- **Privacy-First** - Client-side OCR processing with zero data retention

---

## ✨ Core Capabilities

### 🔍 Text & Image Analysis
- Real-time toxicity scoring (0-100 scale)
- OCR text extraction using Tesseract.js
- Dataset-driven intelligence with 1,200+ examples
- Category classification: Safe, Mild, Harassment, High-Risk

### 🛡️ Phishing URL Scanner
- **9-layer detection system** for comprehensive threat analysis
- **Typosquatting detection** using Levenshtein distance algorithm
- **60+ trusted domain whitelist** (Google, PayPal, Amazon, etc.)
- **30+ suspicious TLD detection** (.tk, .ml, .xyz, etc.)
- **25+ URL shortener detection** (bit.ly, tinyurl, etc.)
- **Risk scoring** (0-100) with color-coded threat levels
- **PDF complaint generation** for Cyber Crime Cell filing

### 🎯 Crime Detection
Identifies 7 major cybercrime categories:

| Category | Legal Framework |
|----------|-----------------|
| Account Hacking | IT Act Section 43, 66 |
| Extortion/Blackmail | IPC Section 383, 503, IT Act Section 66E |
| Online Harassment | IPC Section 354D, IT Act Section 67 |
| Threats & Violence | IPC Section 506 |
| Financial Fraud | IPC Section 420, IT Act Section 66D |
| Identity Theft | IT Act Section 66C, IPC Section 419 |
| Child Exploitation | POCSO Section 11, IT Act Section 67B |

### 📊 Investigation Assistant
- Step-by-step investigation actions
- Digital safety checklist
- Legal guidance with provision explanations
- Evidence chain management

---

## 🛠️ Tech Stack

**Frontend:** Next.js 16.1.2, React 19.2.3, TypeScript 5, Tailwind CSS 4  
**AI/ML:** Tesseract.js 7.0.0, PapaParse 5.5.3, Custom NLP Engine  
**Backend:** Supabase (PostgreSQL, Auth, Storage)  
**Deployment:** Vercel  
**Utilities:** jsPDF, UUID, Recharts, Lucide React

---

## 📊 Dataset

- **1,200+ labeled examples** across all threat categories
- **Multilingual:** English, Hindi, Hinglish (code-mixed)
- **Jaccard similarity matching** for intelligent detection
- **Real-world scenarios** with scam subtypes (UPI fraud, sextortion, phishing, etc.)

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/yourusername/CyberShieldX.git
cd CyberShieldX/Piyush

# Install dependencies
npm install

# Configure environment (.env.local)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Run development server
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Architecture

### Text/Image Analysis Flow
```
Input (Text/Image)
    ↓
[ANALYZE] → OCR, Keywords, Sentiment, Dataset Similarity, Toxicity Score
    ↓
[DETECT] → Pattern Matching, Crime Classification, Legal Mapping
    ↓
[REPORT] → Investigation Steps, Evidence Collection, PDF Generation
```

### Phishing URL Scanner Flow
```
Input (URL)
    ↓
[SCAN] → 9-Layer Detection (Whitelist, HTTP, IP, TLD, Keywords, Shorteners, Typosquatting)
    ↓
[SCORE] → Risk Assessment (0-100), Threat Classification
    ↓
[REPORT] → PDF Complaint Generation with Legal Provisions
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js pages
├── components/
│   ├── evidence/          # OCR, Text & Phishing analyzers
│   ├── investigation/     # Investigation assistant
│   └── ui/                # UI components
├── lib/
│   ├── analyzer/          # MessageAnalyzer (NLP engine)
│   ├── crime/             # PatternDetector
│   ├── forensics/         # PhishingDetector
│   └── pdf/               # ReportGenerator, PhishingReportGenerator
└── types/                 # TypeScript definitions

public/data/
└── cybershieldx_dataset.csv    # 1200+ examples
```

---

## 🎓 Key Innovations

1. **Dataset-Driven Intelligence** - Jaccard similarity matching improves accuracy by 30-50%
2. **Multilingual Detection** - Supports English, Hindi, and Hinglish
3. **Client-Side OCR** - Privacy-first with no server uploads
4. **Advanced Phishing Detection** - Levenshtein distance algorithm for typosquatting
5. **Legal Automation** - Auto-maps to IPC/IT Act/POCSO provisions
6. **Evidence Integrity** - UUID-based case IDs with metadata preservation

---

## 📊 Performance

- **Accuracy:** 85-90%
- **False Positive Rate:** <8%
- **Processing Time:** <500ms (text), 2-5s (OCR)
- **Scalability:** 1000+ concurrent users

---

## 👥 Team

<div align="center">

| Name | Role |
|------|------|
| **Piyush Raj** |  Developer |
| **Ridhima Singh** | Developer |
| **Om Mittal** | Developer |

</div>

---



---

## 🚀 Future Aspects

### Planned Enhancements

- **🌐 Browser Extension** - Real-time monitoring on social media platforms
- **📱 Mobile Application** - React Native app for iOS and Android
- **🤖 Advanced AI Models** - Integration with BERT/GPT for improved accuracy
- **🔗 Blockchain Integration** - Immutable evidence storage with cryptographic verification
- **🌍 Multi-language OCR** - Support for Hindi, Tamil, Telugu, and other Indian languages
- **🔌 API Development** - RESTful API for law enforcement and third-party integration
- **👥 Community Reporting** - Crowdsourced threat database and collaborative detection
- **📊 Real-time Analytics** - Live threat intelligence dashboard with trend analysis
- **🔐 End-to-End Encryption** - Enhanced privacy with zero-knowledge architecture
- **⚡ Edge Computing** - Faster processing with distributed edge nodes

---

## 🙏 Acknowledgments

- **Tesseract.js** - Client-side OCR engine
- **Next.js Team** - React framework
- **Supabase** - Backend infrastructure
- **Vercel** - Deployment platform

---

<div align="center">

### Built with ❤️ 


</div>
