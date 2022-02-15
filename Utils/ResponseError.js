class ResponseError extends Error {
    /**
     * 
     * @param {String} errorMessage main error message to passed down to base error
     * @param {String[]} errorData Error messages thrown by this class
     */
    constructor(errorMessage,errorData) {
        super(errorMessage);
        this.errorData = errorData;
    }
}

module.exports = ResponseError;