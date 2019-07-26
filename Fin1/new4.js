let Swagger = require('swagger-client');

var con = 12;
var id = 1
var page = "page";
var per = "per";
var order = "order";
var token = 1234;

exports.handler = function (event, context, callback) {
    Swagger.http({
        url: `https://devapi.currencycloud.com/v2/ibans/find`,
        method: 'get',
        query: { "scope": "own", "currency": con, "account_id": id, "page": page, "per_page": per, "order": order, "order_asc_desc": "asc" },
        headers: { "X-Auth-Token": token, "Accept": "application/json" }
    }).then((response) => {
        // your code goes here
    }).catch((err) => {
        // error handling goes here
        console.log(err);
    });

    callback(null, { "message": "Successfully executed" });
}