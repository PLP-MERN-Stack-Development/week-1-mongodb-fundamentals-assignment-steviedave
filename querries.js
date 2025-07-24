// ------------------------
// Basic CRUD Operations
// ------------------------

// 1. Find all books in a specific genre (e.g., "Fantasy")
db.books.find({ genre: "Fantasy" });

// 2. Find books published after a certain year (e.g., 2010)
db.books.find({ published_year: { $gt: 2010 } });

// 3. Find books by a specific author (e.g., "J.K. Rowling")
db.books.find({ author: "J.K. Rowling" });

// 4. Update the price of a specific book by title
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 18.99 } }
);

// 5. Delete a book by its title
db.books.deleteOne({ title: "Twilight" });


// ------------------------
// Advanced Queries
// ------------------------

// 6. Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// 7. Use projection to return only title, author, and price
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 8. Sort books by price - ascending
db.books.find().sort({ price: 1 });

// 9. Sort books by price - descending
db.books.find().sort({ price: -1 });

// 10. Pagination: Get page 2 with 5 books per page
db.books.find().skip(5).limit(5);


// ------------------------
// Aggregation Pipelines
// ------------------------

// 11. Average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      average_price: { $avg: "$price" }
    }
  }
]);

// 12. Find the author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      book_count: { $sum: 1 }
    }
  },
  { $sort: { book_count: -1 } },
  { $limit: 1 }
]);

// 13. Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      book_count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);


// ------------------------
// Indexing and Performance
// ------------------------

// 14. Create an index on the "title" field
db.books.createIndex({ title: 1 });

// 15. Create a compound index on "author" and "published_year"
db.books.createIndex({ author: 1, published_year: -1 });

// 16. Use explain() to see performance (example with title search)
db.books.find({ title: "The Hobbit" }).explain("executionStats");
