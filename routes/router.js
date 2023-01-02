const express = require('express');
// const url = require('url');
// const querystring = require('querystring');

const { signup,login } = require('../controllers/userControllers');
const { activity } = require('../controllers/activityController');
const { getActivities } = require('../controllers/getActivitiesController');
const { deleteActivity } = require('../controllers/deleteActivityController');
const { updateActivity } = require('../controllers/updateAcitivityController');

const app = express();
const router = express.Router();

// app.use(express.json());
app.use(express.json());

router.get("/", (req, res) => {
    res.send("from node server");
});

router.get('/getactivities', getActivities);

router.delete('/deleteactivity', deleteActivity);

router.post('/updateactivity', updateActivity);

router.post("/register",signup);

router.post('/login',login);

router.post('/activity',activity);

module.exports = router;