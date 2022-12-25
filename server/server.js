const express = require("express");
const app = express();
// Database
require("../models/config");
// Router
const router = require('../routes/router');
// user Schema form models
const Register = require('../models/users');
// server running on...
const port = 5000;

// middlewares
app.use(express.json());
app.use(router);


// server
app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
