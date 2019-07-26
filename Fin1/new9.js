let Swagger = require('swagger-client');
var id = 1;
exports.handler = function (event, context, callback) {
    Swagger.http({
        url: `https://api.sandbox.transferwise.tech/transfers/${id}/payments`,
        method: 'post',
        query: {},
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ "Test": "test" })
    }).then((response) => {
        // your code goes here
    }).catch((err) => {
        console.log(err);
        // error handling goes here
    });

    callback(null, { "message": "Successfully executed" });
}