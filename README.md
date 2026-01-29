# 🧠 AI Medical Document Intelligence Hub

**Clinical-grade medical document summarization and FHIR-ready data extraction powered by Generative AI.**

---

## 🚀 Overview

**AI Medical Document Intelligence Hub** is a full-stack healthcare application that transforms **unstructured medical PDFs** (clinical notes, outpatient reports, discharge summaries) into:

- ✅ **Clinician-ready structured summaries**
- ✅ **Patient-friendly readable reports**
- ✅ **FHIR-ready JSON bundles for EHR integration**

The system is designed to **reduce documentation burden**, **improve clinical efficiency**, and **enable interoperability** across healthcare systems.

---

## 🎯 Who Is This For?

- **Clinics & Hospitals** – Faster chart review, reduced cognitive load  
- **EHR Providers** – Plug-and-play AI summarization module  
- **Physicians & Nurses** – Clear, structured summaries in seconds  
- **HealthTech Startups** – Foundation for medical AI workflows  
- **Developers** – Reference architecture for healthcare-grade AI apps  

---

## ✨ Key Features

### 🩺 Medical-Grade AI Summarization
- Structured according to **clinical best practices**
- No hallucinations or invented medical facts
- Professional medical language suitable for EHRs

### 📄 Secure PDF Upload
- Upload outpatient notes, clinical reports, discharge summaries
- Robust text extraction using **PyMuPDF**

### 🧱 Structured Clinical Output
Summaries are organized into:
- Chief Complaint  
- History of Present Illness  
- Diagnosis  
- Medications  
- Follow-Up Instructions  

### 🧬 FHIR-Ready Export
- Generates **FHIR Bundle (DocumentReference)**
- Designed for **EHR ingestion & interoperability**
- Easily extensible to Observation, Condition, MedicationRequest, etc.

### 🎨 Modern Clinician-Friendly UI
- Clean, readable layout
- Section-highlighted summaries
- Designed for both **doctors and patients**

---

## 🛠 Tech Stack

### 🔧 Backend
- **FastAPI** – High-performance Python API
- **Google Gemini 2.5** – Medical-grade generative summarization
- **PyMuPDF** – PDF text extraction
- **FHIR (HL7)** – Healthcare interoperability standard

### 🎨 Frontend
- **React (Vite)** – Modern frontend framework
- **Tailwind CSS** – Clean, responsive UI
- **Component-based architecture** – Reusable and scalable

---

## 🧪 Example Output

### 🧠 AI-Generated Clinical Summary
- Clearly separated clinical sections
- Easy to scan during patient encounters
- Ready for charting and review

### 🧬 FHIR Export
- Machine-readable JSON
- EHR-ready format
- Safe for healthcare data pipelines

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

Follow the steps below to run the application locally.

git clone https://github.com/saiakshithakshintala266-collab/ai-doc-intelligence-hub.git

cd ai-doc-intelligence-hub

## 2️⃣ Backend Setup (FastAPI)

Navigate to the backend directory:

```bash
cd backend
```

### Create a Virtual Environment

```bash
python -m venv venv
```

Activate the Virtual Environment
Windows

```bash
venv\Scripts\activate
```

macOS / Linux

```bash
source venv/bin/activate
```

Install Backend Dependencies

```bash
pip install -r requirements.txt
```

🔐 Environment Configuration

Create a .env file inside the backend/ directory:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

▶️ Run the Backend Server

Start the FastAPI server:
```bash
uvicorn main:app --reload
```
Backend will be available at:

http://127.0.0.1:8000

Swagger API documentation:

http://127.0.0.1:8000/docs

🖥 3️⃣ Frontend Setup (React + Vite)

Navigate to the frontend directory:
```bash
cd frontend
```
Install frontend dependencies:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```
Frontend will run at:

http://localhost:5173

🔐 Security & API Keys

API keys are never committed

.env is excluded via .gitignore

.env.example is provided for reference

✅ Recommended for Production

Secret Manager (AWS / GCP / Azure)

Environment-based configuration

Encrypted storage for sensitive credentials


⚠️ Disclaimer
This software is intended to assist healthcare professionals and does not replace medical judgment.

All AI-generated outputs must be reviewed by qualified clinicians before clinical use.

👤 Author

Sai Akshitha Kshintala

AI Engineer | Healthcare AI | Full-Stack Developer

📧 Email: your-email@example.com

🔗 GitHub: https://github.com/your-username

⭐ Support

If you find this project useful:

⭐ Star the repository

🧑‍⚕️ Share with healthcare professionals

🛠 Contribute or open issues


