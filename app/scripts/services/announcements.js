'use strict';

angular.module('announcementBoardClientApp')
  .factory('Announcements', ['$resource', function ($resource) {
    return $resource("/api/announcements", {}, {
        get: {method:'GET', isArray: true}
    });
  }]);
