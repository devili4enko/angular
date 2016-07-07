(function () {

    var gitHub = function ($http) {

        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepos = function (user) {
           return $http.get(user.repos_url).then(function (response) {
                return response.data;
            });
        };

        var getRepo = function (user, reponame) {

            return $http.get('https://api.github.com/repos/' + user + '/' + reponame + '').then(function (response) {
                return response.data;
            });
        };

        var getSubscribers = function (subscribersUrl) {

            return $http.get(subscribersUrl).then(function (response) {
                return response.data;
            });
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepo: getRepo,
            getSubscribers: getSubscribers
        };
    };

    var module = angular.module('app');

    module.factory('gitHub', gitHub);
}())