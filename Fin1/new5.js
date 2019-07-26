let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {
    Swagger.http({
        url: `https://api.sandbox.transferwise.tech/quotes`,
        method: 'post',
        query: {},
        headers: { "Accept": "application/xml", "Content-Type": "application/json" },
        body: JSON.stringify({ "test": "123" })
    }).then((response) => {
        // your code goes here
    }).catch((err) => {
        // error handling goes here
        console.log(err);
    });

    callback(null, { "message": "Successfully executed" });
}