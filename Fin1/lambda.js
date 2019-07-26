let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {

    Swagger.http({
        url: `http://bx8ocdir2g.execute-api.eu-west-1.amazonaws.com/prod/fyn`,
        method: 'get',
        query: {},
        headers: { "Accept": "" }
    }).then((response) => {
        // your code goes here
        console.log(response);
    }).catch((err) => {
        // error handling goes here
    });

    Swagger.http({
        url: `http://bx8ocdir2g.execute-api.eu-west-1.amazonaws.com/prod/fyn`,
        method: 'post',
        query: {},
        headers: { "Accept": "", "Content-Type": "applications/json" },
        body: { "Test": "Value" }
    }).then((response) => {
        console.log(response);
        // your code goes here
    }).catch((err) => {
        // error handling goes here
    });
    Swagger.http({
        url: `http://bx8ocdir2g.execute-api.eu-west-1.amazonaws.com/prod/fyn`,
        method: 'post',
        query: {},
        headers: { "Accept": "", "Content-Type": "applications/json" },
        body: b
    }).then((response) => {
        // your code goes here
    }).catch((err) => {
        // error handling goes here
    });


    callback(null, { "message": "Successfully executed" });
}