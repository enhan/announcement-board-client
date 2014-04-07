'use strict';

angular.module('announcementBoardClientApp')
  .controller('AnnouncementsCtrl', ['$scope','Announcements', function ($scope, Announcements) {
        Announcements.get(function(announcements){
            $scope.announcements = announcements;
        });
  }]);
