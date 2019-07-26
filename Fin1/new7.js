let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {
    Swagger.http({
        url: `https://api.sandbox.transferwise.tech/business`,
        method: 'get',
        query: {},
        headers: { "Accept": "application/json" }
    }).then((response) => {
        // your code goes here
    }).catch((err) => {
        // error handling goes here
        console.log(err);
    });

    callback(null, { "message": "Successfully executed" });
}