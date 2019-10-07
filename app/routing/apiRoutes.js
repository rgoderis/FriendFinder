var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        return res.json(friends)
    });
    app.post("/api/friends", function(req, res){
        // run logic to compare scores
        // loop through array of friends
        // loop through the score array of each friend
        // perform math logic to find closest score
        // retrieve match
        // push addedFriend to friends array
    });
}