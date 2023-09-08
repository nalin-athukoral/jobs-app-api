//user register

const User = require("../models/user.model");
const bcrypt = require('bcrypt');

const userRegister = async (req, res) => {
    try {
        const { name, age, email, password } = req.body;
        const data = new User({ name, age, email, password });
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
        await data.save();
        res.send(data);



    } catch (error) {
        console.log(error);
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await User.findOne({ email });
        if (!data) return res.status(400).send({ message: 'email not found' });
        const isMatch = await bcrypt.compare(password, data.password);
        if (!isMatch) return res.status(400).send({ message: 'password is not correct' });
        
        return res.status(200).send({ message: 'login success' });


    } catch (error) {
        console.log(error);
    }

    res.send('user login');
}

const getAllUsers = async (req, res) => {
    try {
        const data = await User.find();
        res.send(data);
    } catch (error) {   
        console.log(error);
    }
}





module.exports = { userRegister, userLogin, getAllUsers };
//user login