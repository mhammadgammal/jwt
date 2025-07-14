const NotFoundException = require('../exception/notFoundExeption');
const UnAuthorizedException = require('../exception/unAuthorizedException');
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(`Error:\n ${err.message}\n Stack: ${err.stack}`);

    if (err instanceof NotFoundException) {
        res.status(404).json(
            {
                status: 'error',
                message: err.message
            }
        );
    } else if (err instanceof UnAuthorizedException) {
        res.status(401).json(
            {
                status: 'error',
                message: err.message
            }
        );
    } else {
        res.status(500).json(
            {
                status: 'error',
                message: 'Internal Server Error',
                error: err.message || 'An unexpected error occurred'
            }
        )
    }
}

module.exports = errorHandlerMiddleware;