# **Amazon Alexa Review Sentiment Analysis**

## **📌 Project Overview**
This project focuses on analyzing **Amazon Alexa reviews** using **Natural Language Processing (NLP)** and **Machine Learning**. The goal is to classify customer reviews as **positive or negative** based on their sentiment. The final model is deployed using **Flask API** for real-time predictions.

---

## **📊 Dataset**
- **Dataset:** Contains **3150+ reviews** with 5 features.
- **Features:**
  - `verified_reviews`: Customer review text.
  - `rating`: Rating given by the user.
  - `variation`: Different Alexa product types.
  - `feedback`: 1 (Positive) / 0 (Negative) sentiment label.
  - `verified_purchase`: Whether the review is from a verified purchase.

---

## **🔍 Key Steps**
### **1️⃣ Data Preprocessing & Feature Engineering**
- Removed special characters, stopwords, and applied **stemming** using **NLTK**.  
- Converted text into numerical format using **TF-IDF & CountVectorizer**.
  
### **2️⃣ Model Training & Evaluation**
- Trained **XGBoost, Random Forest, and Logistic Regression** models.  
- Optimized hyperparameters using **GridSearchCV & Cross-Validation**.  
- Achieved **94% test accuracy**, balancing precision & recall.  

### **3️⃣ Model Deployment**
- Deployed the trained model using **Flask API** for real-time sentiment predictions.  
- Created an interactive web interface to analyze user input reviews.  

---

## **🚀 Technologies Used**
- **Python, Pandas, NumPy, Scikit-Learn, XGBoost, Flask**  
- **NLTK, CountVectorizer, Matplotlib, Seaborn**  
- **GridSearchCV**  

---

## **📂 Project Structure**
```bash
├── data/                # Dataset files
├── notebooks/           # Jupyter notebooks for EDA & model training
├── models/              # Saved models & vectorizers
├── app/                 # Flask application
│   ├── templates/       # HTML files for UI
│   ├── static/          # CSS & JavaScript
│   ├── app.py           # Flask API endpoint
├── README.md            # Project documentation
├── requirements.txt     # Required libraries
```

---

## **📌 How to Run the Project**
### **1️⃣ Install Dependencies**
```bash
pip install -r requirements.txt
```
### **2️⃣ Run the Flask App**
```bash
python app.py
```
### **3️⃣ Access the Web Interface**
Open **http://127.0.0.1:5000/** in your browser to test sentiment predictions.

---

## **📈 Results & Insights**
- The **XGBoost model performed the best** with **94% accuracy**.  

---



