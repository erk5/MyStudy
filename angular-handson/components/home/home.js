(function() {
    'use strict';
    angular
        .module('TodoApp.Component.home', [])
        .component('home', {
            controller: Controller,
            templateUrl: 'components/home/home.html'
        });

        function Controller() {

        }
})();
