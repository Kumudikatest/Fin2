let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {
    Swagger.http({
        url: `http://bx8ocdir2g.execute-api.eu-west-1.amazonaws.com/prod/fyn`,
        method: 'post',
        query: {},
        headers: { "Accept": "", "Content-Type": "applications/json" },
        body: '1234'
    }).then((response) => {
        // your code goes here
    }).catch((err) => {
        // error handling goes here
        console.log(err);
    });

    callback(null, { "message": "Successfully executed" });
}