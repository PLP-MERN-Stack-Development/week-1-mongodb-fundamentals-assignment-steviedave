// Basic CRUD Operations

// Finding all books in the "Fiction" genre
db.books.find({ genre: "Fiction" });

// Finding books published after a certain year for example after 1950
db.books.find({ published_year: { $gt: 1950 } });

// Finding books by a specific author (e.g., "George Orwell")
db.books.find({ author: "George Orwell" });

// Updating the price of a specific book (e.g., "1984" to 13.99)
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 13.99 } }
);

// Deleting the book "Moby Dick" by its title
db.books.deleteOne({ title: "Moby Dick" });


// Advanced Queries

// Finding books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Using projection to return only title, author, and price
db.books.find(
  {},
  { _id: 0, title: 1, author: 1, price: 1 }
);

// Sorting books by price (ascending)
db.books.find().sort({ price: 1 });

// Sorting books by price (descending)
db.books.find().sort({ price: -1 });

// Pagination: limit 5 books, skip first 0 (page 1)
db.books.find().skip(0).limit(5);

// Pagination: page 2 (skip 5, limit 5)
db.books.find().skip(5).limit(5);


// Aggregation Pipeline

// Calculating average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avg_price: { $avg: "$price" } } }
]);

// Finding the author with the most books
db.books.aggregate([
  { $group: { _id: "$author", book_count: { $sum: 1 } } },
  { $sort: { book_count: -1 } },
  { $limit: 1 }
]);

// Grouping books by publication decade and counting them
db.books.aggregate([
  {
    $group: {
      _id: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);


// Indexing

// Creating index on title
db.books.createIndex({ title: 1 });

// Creating compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// Using explain() querry to analyze query performance (example: find by title)
db.books.find({ title: "The Hobbit" }).explain("executionStats");

