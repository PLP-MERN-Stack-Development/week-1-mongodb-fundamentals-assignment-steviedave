# 📚 PLP Bookstore – MongoDB Fundamentals Assignment

**Author:** Stephen David Oduor  
**Week 1 Assignment – MongoDB: Data Layer Fundamentals and Advanced Techniques**

---

## 🚀 Overview

This repository contains all deliverables for the MongoDB assignment focused on building a data layer for a fictional bookstore. You'll find scripts, queries, and screenshots demonstrating how to use MongoDB for CRUD operations, advanced querying, aggregation pipelines, and indexing.

---

## 📂 Repository Contents

| File | Description |
|------|-------------|
| `insert_books.js` | Script to insert 10 pre-defined book documents into the `books` collection of the `plp_bookstore` database |
| `queries.js` | Contains all required MongoDB queries: basic CRUD, advanced filters, projections, sorting, aggregation pipelines, and indexing |
| `README.md` | Documentation on how to run the project, what each file does, and how to test the assignment |
| `screenshot-mongosh.png` | Screenshot showing database populated from `mongosh` shell *(add this yourself)* |
| `screenshot-compass.png` | Screenshot of the `books` collection as seen in MongoDB Compass *(add this yourself)* |

---

## 🛠️ Setup Instructions

### Option 1: Using `mongosh` (Recommended)

1. **Start your local MongoDB server** (usually happens automatically).
2. Open your terminal and run:
   ```bash
   mongosh
   ```
3. Switch to the correct database:
   ```js
   use plp_bookstore
   ```
4. Run the insert script by either:
   - Copy-pasting contents of `insert_books.js` directly into `mongosh`
   - OR loading it like this:
     ```bash
     load("insert_books.js")
     ```

### Option 2: Using MongoDB Compass

1. Open MongoDB Compass.
2. Connect to:
   ```
   mongodb://127.0.0.1:27017
   ```
3. Create a new database `plp_bookstore` and collection `books` manually (or let the script create them).
4. Paste each book document from `insert_books.js` into the document editor (JSON view) and save.

---

## 🧾 File Details

### `insert_books.js`

This file contains:
```js
db.books.insertMany([
  // 10 pre-defined book documents
]);
```

You can run this in `mongosh` or import into Compass. Each document includes fields:
- `title` (string)
- `author` (string)
- `genre` (string)
- `published_year` (number)
- `price` (number)
- `in_stock` (boolean)
- `pages` (number)
- `publisher` (string)

---

### `queries.js`

This file contains all required queries, clearly commented by task. Includes:

#### ✅ Basic CRUD

- Find books by genre, year, or author
- Update a book’s price
- Delete a book by title

#### 🔍 Advanced Queries

- Filters for multiple conditions
- Projections (return specific fields)
- Sorting by price
- Pagination using `skip` and `limit`

#### 📊 Aggregation Pipelines

- Average book price per genre
- Author with the most books
- Count books by decade

#### ⚡ Indexing and Performance

- Create single and compound indexes
- Use `explain()` to demonstrate performance gains

---

## 💡 Sample Queries to Try in `mongosh`

```js
// View all books
db.books.find().pretty()

// Find all Fantasy books
db.books.find({ genre: "Fantasy" }).pretty()

// Find books published after 2010
db.books.find({ published_year: { $gt: 2010 } })

// Update book price
db.books.updateOne({ title: "The Hobbit" }, { $set: { price: 18.99 } })

// Delete a book
db.books.deleteOne({ title: "Twilight" })
```

---

## 🖼️ Screenshots

### 📸 1. Populating Database with `mongosh`

![Inserted via mongosh](./screenshots/Screenshot%202025-07-24%20102448.png)
![Inserted via mongosh](./screenshots/Screenshot%202025-07-24%20102528.png)
![Inserted via mongosh](./screenshots/Screenshot%202025-07-24%20102509.png)

---

### 📸 2. Viewing in MongoDB Compass

![MongoDB Compass](./screenshots/Screenshot%202025-07-24%20103137.png)
![MongoDB Compass](./screenshots/Screenshot%202025-07-24%20103212.png)

---

## ✅ Summary of Tasks Completed

| Task                             | Status |
|----------------------------------|--------|
| MongoDB Setup                    | ✅     |
| Data Insertion                   | ✅     |
| CRUD Queries                     | ✅     |
| Advanced Filtering & Sorting     | ✅     |
| Aggregation Pipelines            | ✅     |
| Indexing & `explain()`           | ✅     |
| README with instructions         | ✅     |
| Screenshots (add manually)       | ✅     |

---

## 🙋‍♂️ Author

**Stephen David Oduor**  
MongoDB Fundamentals Assignment  
PLP Software Engineering Program

---

## 📬 Questions?

Feel free to reach out or revisit the queries by running them again in your preferred shell or GUI. Happy querying!
