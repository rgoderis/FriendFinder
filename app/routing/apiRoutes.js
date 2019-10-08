var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        return res.json(friends)
    });
    app.post("/api/friends", function(req, res){
        var newFriend = req.body
        var score = [] 
        for(var i = 0; i < newFriend.scores.length; i++){
            var newScore = parseInt(newFriend.scores[i])
            score.push(newScore)
        }
        console.log(newFriend)
        console.log(score)
        newFriend.scores = score
        friends.push(newFriend);
        // run logic to compare scores
        // loop through array of friends
        // loop through the score array of each friend
        // perform math logic to find closest score
        // retrieve match
        // push addedFriend to friends array
    });
}