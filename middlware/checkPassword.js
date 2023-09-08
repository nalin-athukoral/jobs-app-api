const bcrypt = require('bcrypt');

const checkPassword = async (req,res,next) => {
    try {
        const {password} = req.body;
        const isMatch = await bcrypt.compare(password, hash);
        console.log(isMatch);
    } catch (error) {
        console.log(error);
    }
} 