const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`The server is running on port ${port}`));

module.exports = app;
