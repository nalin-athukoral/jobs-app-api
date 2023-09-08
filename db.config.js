const mongoose = require('mongoose');
require('dotenv').config();


const start = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_DB_URI,
        );
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}


module.exports = start;
