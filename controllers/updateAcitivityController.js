const Activity = require('../models/activity');

const updateActivity = async (req,res)=> {
        let id = req.body.id;
        let userId = req.body.userId;

        const activity = await Activity.updateOne({id, userId}, {$set: req.body});
        res.status(200).send(activity);
}

module.exports = {updateActivity};