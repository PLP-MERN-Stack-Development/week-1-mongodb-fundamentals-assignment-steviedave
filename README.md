# 📘 PLP MongoDB Assignment  
### 👨‍💻 Stephen David Oduor

## 🚀 Objective
This project demonstrates MongoDB fundamentals and advanced data operations using a fictional bookstore dataset.

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2. Install Dependencies (Optional for Node.js users)
If you're running `insert_books.js` using Node.js, ensure you have the MongoDB driver installed:
```bash
npm install mongodb
```

### 3. Run the Insert Script
This will populate the `plp_bookstore` database with 12 sample book records:
```bash
node insert_books.js
```

> 📌 This script connects to your MongoDB instance, drops the `books` collection if it exists to avoid duplication, and inserts fresh sample data.

### 4. Use the Queries
Open **MongoDB Shell (mongosh)** or **MongoDB Compass** and run queries from `queries.js`.

Example in the shell:
```bash
use plp_bookstore
```
Then paste the queries from `queries.js`.

---

## 📂 Project Files

| File | Description |
|------|-------------|
| `insert_books.js` | Populates the database with book data |
| `queries.js` | Contains MongoDB queries for CRUD, aggregation, and indexing |
| `README.md` | Instructions to run and understand the project |
| `screenshot.png` | Screenshot of your MongoDB Compass or Atlas showing sample data (add this manually) |

---

## 🧪 Features Demonstrated

- Basic CRUD operations (insert, find, update, delete)
- Advanced queries using filters, projections, sorting, and pagination
- Aggregation pipelines for data transformation and analytics
- Index creation for performance optimization
- Use of `explain()` to analyze query performance

---

## ✅ Submission Checklist

- [x] `insert_books.js` file included
- [x] `queries.js` with all required queries
- [x] `README.md` with setup and usage instructions
- [x] `screenshot.png` showing your MongoDB collection
- [x] All files committed and pushed to your GitHub Classroom repo

---

## 🧠 Author Notes

Tested with:
- MongoDB Community Edition 6.x
- MongoDB Compass
- Node.js 18+

If you're using **MongoDB Atlas**, replace the local URI in `insert_books.js` with your Atlas connection string.

Happy querying! 🚀
