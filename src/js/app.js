var app = angular.module('app', [
    'ngRoute',
    'restangular'
])
.config(function($routeProvider, RestangularProvider){
    RestangularProvider.setBaseUrl('http://localhost:3005')
    RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'})
    $routeProvider.when('/', {
        templateUrl: '/view/home.html',
        controller: 'homeCtrl'
    }).when('/edit', {
        templateUrl: '/view/edit.html',
        controller: 'editCtrl'
    })
}).factory('Movie', (Restangular) =>{
    Restangular.service('')
})
