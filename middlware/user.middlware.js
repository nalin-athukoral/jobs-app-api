const User = require("../models/user.model")

const checkExistingUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send({ message: 'email already exists' });


    } catch (error) {
        res.status(500).send({ message: error });
    }


    try {
        const name = await User.findOne({ name: req.body.name })
        if (name) return res.status(400).send({ message: 'name already exists' });

    } catch (error) {
        res.status(500).send({ message: error });
    }
    next();

}

module.exports = checkExistingUser;