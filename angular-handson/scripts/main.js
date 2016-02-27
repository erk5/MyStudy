(function() {
    'use strict';
    angular
        .module('TodoApp', [
            'ngComponentRouter',
            'TodoApp.Component.home',
            'TodoApp.Component.todo'
        ])
        .controller('AppController', AppController);
        AppController.$inject = ['$router'];
        function AppController($router) {
            $router.config([
                {path: '/home', name: 'Home', component: 'home', useAsDefault: true},
                {path: '/todo', name: 'Todo', component: 'todo'}
            ]);
        }
})();
