let Swagger = require('swagger-client');

var login_id = 1
var api_key = "key"

exports.handler = function (event, context, callback) {
    Swagger.http({
        url: `https://devapi.currencycloud.com/v2/authenticate/api`,
        method: 'post',
        query: {},
        headers: { "Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded" },
        body: `login_id=${login_id}&api_key=${api_key}`
    }).then((response) => {
        callback(null, { "message": response});
        // your code goes here
    }).catch((err) => {
        // error handling goes here
    });

    callback(null, { "message": "Successfully executed" });
}