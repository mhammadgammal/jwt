const express = require('express');
const asyncWrapper = require('../helper/asyncWrapper')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/app.config')
const UnAuthorizedException = require('../exception/unAuthorizedException');

const authMiddleware = asyncWrapper(async (req, res, next) => {
    var token = req.headers.authorization;
    console.log(`request with token: ${token}`);

    if (!token) {
        throw new UnAuthorizedException('No Token Provided')
    }
    token = token.split(' ')[1]
    const { username, password } = jwt.verify(token, JWT_SECRET);
    if (!username || !password) {
        throw new UnAuthorizedException('Invalid Token');
    }
    req.user = { username }
    next()
})

module.exports = authMiddleware;