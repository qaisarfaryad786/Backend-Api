const Activity = require('../models/activity');

const getActivities = async (req, res) => {
    let userId = req.query.userid;
    const activities = await Activity.find({userId});
    res.status(200).send(activities);
}

module.exports = { getActivities };