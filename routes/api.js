const express = require('express');
const asyncWrapper = require('../helper/asyncWrapper');
const authRoute = require('./auth/auth');
const homeRoute = require('./home');
const UnAuthorizedException = require('../exception/unAuthorizedException');
const apiRouter = express.Router();

apiRouter.route('/').get(
    asyncWrapper(async (req, res) => {
        throw new UnAuthorizedException('No Token Provided');
    })
)

apiRouter.use('/auth', authRoute);
apiRouter.use('/home', homeRoute);

module.exports = apiRouter