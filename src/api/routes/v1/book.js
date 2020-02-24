const express = require('express');
const router = express.Router();
const Book = require('../../models/book.model');

router.get('/', async (req, res, next) => {
  console.log('booklist');
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.json({
    book: 'books',
  });
});
router.post('/', async (req, res, next) => {
  const book = new Book({
    name: req.body.name,
    category: req.body.category,
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});
router.get('/:id', (req, res, next) => {
  console.log(req.params.id);
  res.json({
    book: 'book1',
  });
});

module.exports = router;
