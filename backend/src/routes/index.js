const bodyParser = require("body-parser");
const books = require("./booksRoute");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE, OPTIONS"
    );
    next();
  });
  app.use(bodyParser.json(), books);
  app.use(bodyParser.urlencoded({ extended: true }));
};
