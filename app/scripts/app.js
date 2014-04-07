'use strict';

var app = angular
    .module('announcementBoardClientApp', [
        'ngResource',
        'ui.router'
    ]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider.state("home",{
        url: "/home",
        templateUrl: "views/home.html"
    }).state("announcements", {
        url: "/announcements",
        templateUrl: "views/announcements.html",
        controller: 'AnnouncementsCtrl'
    });
});