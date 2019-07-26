let Swagger = require('swagger-client');
var b = "test";
exports.handler = function (event, context, callback) {
    Swagger.http({
        url: `https://api.sandbox.transferwise.tech/quotes`,
        method: 'post',
        query: {},
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(b)
    }).then((response) => {
        // your code goes here
    }).catch((err) => {
        // error handling goes here
        console.log(err);
    });

    callback(null, { "message": "Successfully executed" });
}