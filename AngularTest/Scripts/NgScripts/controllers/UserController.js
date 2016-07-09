(function () {
    var app = angular.module("app");

    var userController = function ($scope, gitHub, $routeParams) {

        $scope.username = $routeParams.username;
        $scope.orderBy = "stargazers_count";
        $scope.orderType = "+";
      
        var onRepos = function (data) {
            $scope.repos = data;
        };

        var onUserComplete = function (data) {
            $scope.gitUser = data;
            gitHub.getRepos($scope.gitUser)
                .then(onRepos);
        };

        gitHub.getUser($scope.username).then(onUserComplete);
    };

    app.controller("UserController", ["$scope", "gitHub", "$routeParams", userController]);
}());