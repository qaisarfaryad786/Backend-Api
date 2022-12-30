const express = require('express');
const app = express();
const { signup,login } = require('../controllers/userControllers');
const { activity } = require('../controllers/activityController');
const router = express.Router();

// app.use(express.json());
app.use(express.json());

router.get("/", (req, res) => {
    res.send("from node server");
});
  
router.post("/register",signup);

router.post('/login',login);

router.post('/activity',activity);

module.exports = router;