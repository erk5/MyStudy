(function() {
    'use strict';
    angular
        .module('TodoApp.Component.todo', [])
        .component('todo', {
            controller: Controller,
            templateUrl: 'components/todo/todo.html'
        });

        function Controller() {

        }
})();
