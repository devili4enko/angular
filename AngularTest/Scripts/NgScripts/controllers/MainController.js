(function () {
    var app = angular.module("app");

    var mainController = function ($scope, $interval, $location) {

        var countdownInterval = null;

        $scope.message = "Github Viewer";
        $scope.username = "angular";
        var countdown = 5;

        var decrementCountdown = function () {
            countdown -= 1;
            if (countdown === 0) {
                $scope.search($scope.username);
            }
        };

        var startCountdown = function () {
            countdownInterval = $interval(decrementCountdown, 1000, countdown);
        };

        $scope.search = function (username) {
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
            }

            $location.path("/user/" + username);
        }

        startCountdown();
    };

    app.controller("MainController", ["$scope", "$interval", "$location", mainController]);
}());