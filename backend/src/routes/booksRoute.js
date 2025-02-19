const { Router } = require("express");
const BookController = require("../controllers/bookController");

const router = Router();

router.get("/books", BookController.getBooks);
router.get("/books/:id", BookController.getBook);
router.post("/books", BookController.addBook);
router.put("/books/:id", BookController.updateBook);
router.delete("/books/:id", BookController.deleteBook);

module.exports = router