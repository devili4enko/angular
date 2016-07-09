'use strict';

eventApp.controller("EventController",
    function eventController($scope) {
        $scope.boolValue = true;
        $scope.btnDisabled = true;
        $scope.event = {
            name: 'Angular boot camp',
            date: '15/12/16',
            imgUrl: '../../Content/img/1By2cYbkAbA.jpg',
            time: '12:00',
            location: {
                city: 'Kyiv',
                address: 'Somewhere str'
            },
            sessions: [
                { name: "Session #0", creatorName: "test0", duration: '1 hr', theme: 'Theme 0', upVoteCount: 0 },
                { name: "Session #1", creatorName: "test1", duration: '1 hr', theme: 'Theme 1', upVoteCount: 0 },
                { name: "Session #2", creatorName: "test2", duration: '1 hr', theme: 'Theme 2', upVoteCount: 0 },
                { name: "Session #3", creatorName: "test3", duration: '1 hr', theme: 'Theme 3', upVoteCount: 0 }
            ]
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount -= 1;
        };

        $scope.upVoteSession = function (session) {
            session.upVoteCount += 1;
        };

        $scope.toggleR = function() {
            $scope.boolValue = !$scope.boolValue;
        };
    });