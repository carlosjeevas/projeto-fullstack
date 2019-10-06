// index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
            //return res.status(409).json({error: 'User already exists'})
        }
        return res.json(user);
    }
};