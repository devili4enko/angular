var app = angular.module("app", []);


var MainController = function ($scope, $http) {

    $scope.message = "Github Viewer";
    $scope.username = "angular";


    $scope.search = function (username) {
        console.log(username);
        $http.get("https://api.github.com/users/" + username).then(onUserComplete);
    }

    var onRepos = function (response) {
        $scope.repos = response.data;
    };

    var onUserComplete = function (response) {
        $scope.gitUser = response.data;
        $http.get($scope.gitUser.repos_url).then(onRepos);
    };

    $scope.orderBy = "stargazers_count";
    $scope.orderType = "+";
};

app.controller("MainController", ["$scope", "$http", MainController]);
