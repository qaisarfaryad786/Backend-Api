const Activity = require('../models/activity');

const activity = async (req,res) => {
    const activity = new Activity(req.body);
    const activityResult = await activity.save();
    res.send(activityResult);
};

module.exports = { activity };