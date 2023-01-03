const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = require("../config/corsoptions")
// Database
require("../models/config");

// Router
const router = require('../routes/router');

// user Schema form models
const Register = require('../models/users');
const corsOption = require("../config/corsoptions");

// server running on...
const port = 5000;

// middlewares
app.use(cors(corsOption));
app.use(express.json());
app.use(router);


// server
app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
