# 🚔 Crime Rate Prediction & Safe Route Navigation with machine learning and Google maps 

**"Because you must look before you leave!"**

## 📌 Overview

This project focuses on improving public safety by analyzing crime data in Delhi and suggesting safer travel routes. It integrates **Machine Learning** with **Google Maps API** to provide users with multiple route options along with a **Danger Index** for each route.

The system helps users make smarter travel decisions by considering not only distance and time but also safety.

---

## 🎯 Key Features

* 📍 Suggests multiple routes between two locations
* ⚠️ Displays a **Danger Index (0–4)** for each route
* 🗺️ Integration with **Google Maps API**
* 🔍 Autocomplete search for locations
* 🚶 Supports multiple travel modes (Walking, Driving, Transit)
* 📊 Visual indicators for safety levels on the map

---

## 🧠 Machine Learning Approach

We used **Unsupervised Machine Learning** to analyze crime data.

### Algorithm Used:

* **K-Means Clustering**

### How it Works:

* Crime data from **166 locations in Delhi** is analyzed
* Locations are grouped into **5 clusters (0–4 scale)**
* Each cluster represents a level of safety

### Danger Index Scale:

| Index | Meaning   |
| ----- | --------- |
| 0     | Very Safe |
| 1     | Safe      |
| 2     | Moderate  |
| 3     | Risky     |
| 4     | Dangerous |

---

## 🗺️ Map Visualization

Each location is marked on the map with symbols representing safety levels:

* ✅ Green Tick → Safest
* 🙂 Smiley → Moderately Safe
* ⚠️ Exclamation → Be Careful
* 💀 Skull → Dangerous
* ❌ Cross → Highly Dangerous

---

## 🔌 Technologies Used

* **Machine Learning:** K-Means Clustering
* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js
* **APIs:** Google Maps JavaScript API, Google Places API

---

## ⚙️ Installation

### Prerequisites:

* Node.js
* npm

### Steps:

```bash
cd crime-rate-prediction
npm install
```

---

## ▶️ Run the Project

1. Generate your **Google Maps API Key**
2. Add the API key in the `.html` file
3. Start the server:

```bash
node app.js
```

4. Open your browser and go to:

```
http://localhost:3000
```

👉 Select travel mode (Walking/Driving/Transit) before searching routes.

---

## 📊 Output

* Displays all possible routes between two locations
* Shows:

  * ⏱️ Time duration
  * 📏 Distance
  * ⚠️ Danger Index

This enables users to choose the safest route.

---

## 🚀 Future Improvements

* Real-time crime data integration
* More cities support
* Advanced prediction models
* Mobile application

---

## 👨‍💻 Author

**Vikash Kumar Yadav**

---

## 💡 Project Goal

To combine **AI + Maps** for solving real-world safety problems and helping people travel more securely.

---
