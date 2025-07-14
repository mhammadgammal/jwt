const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('../config/app.config');
const asyncWrapper = require("../helper/asyncWrapper");
const BadRequestException = require("../exception/badRequestException");
const login = asyncWrapper(async (req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt with username: ${username} and password: ${password}`);

    const errors = [];
    if (!username) {
        errors.push('Username is required');
    }
    if (!password) {
        errors.push('Password is required');
    }

    if (errors.length > 0) {
        throw new BadRequestException('Validation Error', errors);
    } else {
        const token = jwt.sign(
            { username, password },
            JWT_SECRET,
            { expiresIn: '1h' }
        )
        res.status(200).json(
            {
                'status': 'success',
                "message": "Login successful",
                token
            }
        )
    }
})

module.exports = login;