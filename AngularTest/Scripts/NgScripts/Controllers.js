var app = angular.module("app", []);


var MainController = function ($scope, gitHub, $interval,
                               $log, $location, $anchorScroll) {

    var countdownInterval = null;

    $scope.message = "Github Viewer";
    $scope.username = "angular";
    $scope.orderBy = "stargazers_count";
    $scope.orderType = "+";
    var countdown = 5;

    var startCountdown = function () {
        countdownInterval = $interval(decrementCountdown, 1000, countdown);
    };

    $scope.search = function (username) {
        $log.info("Seacring for " + username);
        var t = gitHub.getUser(username);
        console.log("search: "+ t);
            t.then(onUserComplete);
        if (countdownInterval) {
            $interval.cancel(countdownInterval);
        }
    }

    var onRepos = function (data) {
        $scope.repos = data;

        $location.hash('userDetails');
        $anchorScroll();
    };

    var onUserComplete = function (data) {
        $scope.gitUser = data;
        var q = gitHub.getRepos($scope.gitUser);
        console.log("onUserComplete: " + q);
        q.then(onRepos);
    };

    var decrementCountdown = function () {
        countdown -= 1;
        if (countdown == 0) {
            $scope.search($scope.username);
        }
    };

    startCountdown();
};

app.controller("MainController", ["$scope", "gitHub", "$interval", "$log", "$location", "$anchorScroll", MainController]);
