const express = require('express');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/app.config');
const asyncWrapper = require('../helper/asyncWrapper');
const UnAuthorizedException = require('../exception/unAuthorizedException');
const authMiddleware = require('../middleware/auth')
const homeRouter = express.Router();

homeRouter.route(
    '/',
).get(authMiddleware, asyncWrapper(async (req, res) => {
    const username = req.user.username
    res.status(200).json({
        status: 'success',
        message: `Welcome ${username}, you are authenticated!`
    })
}));

module.exports = homeRouter;