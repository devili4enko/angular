var app = angular.module("app", []);


var MainController = function ($scope, $http) {

    $scope.message = "Hello from Ng Controller";

    var user = $http.get('/api/user');

    var person = {
        firstName: "Name",
        lastName: "Surname",
        picSrc: "https://pp.vk.me/c543100/v543100942/10be4/JAZbFSg9B6w.jpg",
        Title: "Surname",
        User: "",
        GitDemo: ""
    };

    user.then(function (response) {
        person.User = response.data;
    });

    var onUserComplete = function (response) {
        person.GitDemo = response.data;
    };

    $http.get("https://api.github.com/users/robconery").then(onUserComplete);

    $scope.person = person;

};

app.controller("MainController", ["$scope", "$http", MainController]);
