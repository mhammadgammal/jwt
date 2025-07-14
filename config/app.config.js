module.exports = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    database: {
        mongoUri: process.env.MONGO_URI
    }
}