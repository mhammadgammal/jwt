class BadRequestException extends Error {
    constructor(message, errors) {
        super(message);
        this.message = message || 'Bad Request';
        this.errors = errors || [];
    }
}

module.exports = BadRequestException;