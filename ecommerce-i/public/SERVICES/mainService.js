// Reference WeekD/ d1, d2, etc.

// var app = angular.module('ecommerce');
// app.service('mainService', function ($http, $q) { 
//    this.addNewGame = function (gameObj) {
//        var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
//        if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
//            gameObj.won = true;
//        } else { 
//            gameObj.won = false;
//        }
//             return $http.post(url, gameObj);
//    };
//    this.getTeamData = function (team) {
//        var deferred = $q.defer();  
//        var url = 'https://api.parse.com/1/classes/' + team;
   
//        $http.get(url).then(function (data) {
//            var results = data.data.results;
//            var wins = 0, losses = 0;
//            for (var i in results) {
//                if (results[i].won) wins++;
//                else losses++;
//            }
//            results.wins = wins;
//            results.losses = losses;
//            deferred.resolve(results);
//        });
//        return deferred.promise;
//    };
// });
