let Swagger = require('swagger-client');
var id = 2;

exports.handler = function (event, context, callback) {
    Swagger.http({
        url: `http://localhost//tokenise`,
        method: 'post',
        query: {},
        headers: { "Accept": "", "Content-Type": "applications/json" },
        body: id
    }).then((response) => {
        // your code goes here
    }).catch((err) => {
        // error handling goes here
        console.log(err);
    });

    callback(null, { "message": "Successfully executed" });
}