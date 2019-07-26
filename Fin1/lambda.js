let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {

    Swagger.http({
        url: `http://bx8ocdir2g.execute-api.eu-west-1.amazonaws.com/prod/fyn`,
        method: 'get',
        query: {},
        headers: { "Accept": "" }
    }).then((response) => {
        callback(null, { "message": response });
        // your code goes here
        console.log(response);
    }).catch((err) => {
        // error handling goes here
    });
    callback(null, { "message": "Successfully executed" });
}