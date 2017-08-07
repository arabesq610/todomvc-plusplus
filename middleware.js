function create(username) {
    return function (request, response, next) {
        request.user = {name: username};
        next();
    };
}

module.exports = create;