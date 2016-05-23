var ApiError = {};

ApiError.GeneralError = (message, code) => ({message, code: code ? code : "general-error"});
ApiError.AuthorizationError = (message, code) => ({message, code: code ? code : "auth-error"});

module.exports = ApiError;
