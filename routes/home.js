const express = require('express');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/app.config');
const asyncWrapper = require('../helper/asyncWrapper');
const UnAuthorizedException = require('../exception/unAuthorizedException');

const homeRouter = express.Router();

homeRouter.route(
    '/',
).get(asyncWrapper(async (req, res) => {
    var token = req.headers.authorization;
    if (!token) {
        throw new UnAuthorizedException('No Token Provided');
    } else {
        token = token.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        const { username, password } = decoded;
        if (!username || !password) {
            throw new UnAuthorizedException('Invalid Token');
        }
        res.status(200).json({
            status: 'success',
            message: `Welcome ${username}, you are authenticated!`
        })
    }
}));

module.exports = homeRouter;