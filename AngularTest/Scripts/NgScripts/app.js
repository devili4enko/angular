(function () {
    var app = angular.module("app", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "Content/html/main.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "Content/html/user.html",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "Content/html/repo.html",
                controller: "RepoController"
            })
            .otherwise({ redirectTo: "/main" });
    });

}())