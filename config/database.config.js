const databaseConfig = require('./app.config').database;
const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(databaseConfig.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

module.exports = connectToDatabase;