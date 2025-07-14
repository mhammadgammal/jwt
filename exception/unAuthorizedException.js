class UnAuthorizedException extends Error {
    constructor(message) {
        super(message);
        this.message = message || 'unauthorized';
    }
}

module.exports = UnAuthorizedException;