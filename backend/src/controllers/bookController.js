const database = require("../models");
const { Op } = require("sequelize");

class BookController {
  static async getBooks(req, res) {
    const { name, page, size } = req.query;
    try {
      let books = [];
      let totalBooks = 0;
      if (!!name && !!page && !!size) {
        const filteredBooks = await database.Books.findAll({
          where: {
            name: {
              [Op.like]: "%" + name + "%",
            },
          },
        });

        totalBooks = filteredBooks.length;
        books = filteredBooks.slice((page - 1) * size, page * size);

      } else {
        books = await database.Books.findAll();
        totalBooks = books.length;    
      }
      return res.status(200).json({
        books,
        totalBooks
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getBook(req, res) {
    const { id } = req.params;
    try {
      const book = await database.Books.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getBookByName(req, res) {
    const { name } = req.params;

    try {
      const book = await database.Books.findAll({
        where: {
          name: {
            [Op.like]: "%" + name + "%",
          },
        },
        limit: 3,
      });
      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getBookByNamePaginated(req, res) {
    const { name, index, quantity } = req.query;
    try {
      const filteredBooks = await database.Books.findAll({
        where: {
          name: {
            [Op.like]: "%" + name + "%",
          },
        },
      });

      const totalFilteredBooks = filteredBooks.length;

      const books = filteredBooks.slice(index, quantity);
      return res.status(200).json({
        books,
        totalFilteredBooks,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async addBook(req, res) {
    const newBook = req.body;
    try {
      const newCreatedBook = await database.Books.create(newBook);
      return res.status(201).json(newCreatedBook);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateBook(req, res) {
    const { id } = req.params;
    const newInfos = req.body;
    try {
      await database.Books.update(newInfos, {
        where: {
          id: Number(id),
        },
      });
      const updatedBook = await database.Books.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(updatedBook);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteBook(req, res) {
    const { id } = req.params;
    try {
      await database.Books.destroy({
        where: {
          id: Number(id),
        },
      });
      return res
        .status(200)
        .json({ message: `The Book with id: ${id} was removed.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = BookController;
