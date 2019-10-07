var path = require("path")

module.exports = function(app){
    // home
    app.get("/", function(req, res){
        
    });
    // survey
    app.get("/survey", function(req, res){

    })
    // everything else
    app.get("*", function(req, res){

    })
}