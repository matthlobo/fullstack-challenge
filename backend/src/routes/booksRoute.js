const { Router } = require("express");
const BookController = require("../controllers/BookController");

const router = Router();

router.get("/books", BookController.getBooks);
router.get("/books/:id", BookController.getBook);
router.get("/book/:name", BookController.getBookByName);
router.get("/book/:name/:page", BookController.getBookByNamePaginated);
router.post("/books", BookController.addBook);
router.put("/books/:id", BookController.updateBook);
router.delete("/books/:id", BookController.deleteBook);

module.exports = router