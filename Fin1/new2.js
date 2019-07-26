let Swagger = require('swagger-client');
var token = 1234; 
exports.handler = function (event, context, callback) {
    Swagger.http({
        url: `https://devapi.currencycloud.com/v2/authenticate/close_session`,
        method: 'post',
        query: {},
        headers: { "X-Auth-Token": token, "Accept": "application/json" }
    }).then((response) => {
        // your code goes here
    }).catch((err) => {
        // error handling goes here
        console.log(err);
    });

    callback(null, { "message": "Successfully executed" });
}