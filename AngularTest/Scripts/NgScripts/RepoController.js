(function () {
    var app = angular.module("app");

    var repoController = function ($scope, gitHub, $routeParams) {

        $scope.username = $routeParams.username;
        $scope.repoName = $routeParams.reponame;
    
        var onSubscribers = function(data) {
            $scope.repoSubscribers = data;
        };
      
        var onRepo = function (data) {
            $scope.repo = data;
            gitHub.getSubscribers($scope.repo.subscribers_url).then(onSubscribers);
            console.log($scope.repo);
        };

        gitHub.getRepo($scope.username, $scope.repoName).then(onRepo);
    };

    app.controller("RepoController", ["$scope", "gitHub", "$routeParams", repoController]);
}());