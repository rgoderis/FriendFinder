var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        return res.json(friends)
    });
    app.post("/api/friends", function(req, res){
        var newFriend = req.body
        var score = [];
        for(var i = 0; i < newFriend.scores.length; i++){
            var newScore = parseInt(newFriend.scores[i])
            score.push(newScore)
        }
        // run logic to compare scores
        var friendIndex = 0
        var matchName;
        var matchImage;
        var matchScore = 100;
        // function to compare each friends score to score of user
        function compareScores(ind){
            // conditional to see if there are any more friends left in the friends array
            if(ind === friends.length){
                console.log("You ran out of friends")
            } else {
                // compare score of current friend to user
                console.log(friends[ind].scores)
                var scoreArr = friends[ind].scores
                var currentScore = 0
                for(var i = 0; i < scoreArr.length; i++){
                    currentScore += Math.abs(scoreArr[i] - score[i]); 
                }
                console.log(currentScore)
                if(currentScore < matchScore){
                    matchScore = currentScore;
                    matchImage = friends[ind].photo;
                    matchName = friends[ind].name
                    currentScore = 0
                    ind ++
                } else {
                    currentScore = 0
                    ind ++
                }
                compareScores(ind)
                console.log(matchScore)
                console.log(matchImage)
                console.log(matchName)
            }
        }
        compareScores(friendIndex);
        newFriend.scores = score
        friends.push(newFriend);
    });
}