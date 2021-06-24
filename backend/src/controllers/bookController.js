const database = require("../models");
const { Op } = require("sequelize");

class BookController {
  static async getBooks(req, res) {
    try {
      const allBooks = await database.Books.findAll();
      return res.status(200).json(allBooks);
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
        limit: 3
      });
      return res.status(200).json(book);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getBookByNamePaginated(req, res) {
    const { name, page } = req.params;
    const offset = page * 2;
    const limit = 2;
    try {
      const book = await database.Books.findAll({
        where: {
          name: {
            [Op.like]: "%" + name + "%",
          },
        },
        offset: Number(offset),
        limit: Number(limit)
      });
      return res.status(200).json(book);
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
