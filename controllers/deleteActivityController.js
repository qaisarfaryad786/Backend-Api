const Activity = require("../models/activity");

const deleteActivity = async (req, res) => {
    let userId = req.query.userid;
    let id = req.query.id;

    const deletedActivities = await Activity.deleteOne({id, userId});
    res.status(200).send(deletedActivities);
}

module.exports = { deleteActivity };