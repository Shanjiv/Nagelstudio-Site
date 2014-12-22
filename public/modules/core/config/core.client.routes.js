'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // Home state routing
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'header' : {
                        templateUrl: 'modules/core/views/home/header.client.view.html'
                    },
                    'content' : {
                        templateUrl: 'modules/core/views/home/content.client.view.html'
                    },
                    'footer' : {
                        templateUrl: 'modules/core/views/home/footer.client.view.html'
                    }
                }
            })
            .state('leistungen', {
                url: '/leistungen',
                views: {
                    'header' : {
                        templateUrl: 'modules/core/views/home/header.client.view.html'
                    },
                    'content' : {
                        templateUrl: 'modules/core/views/leistungen.client.view.html'
                    },
                    'footer' : {
                        templateUrl: 'modules/core/views/home/footer.client.view.html'
                    }
                }
            })
            .state('termine', {
                url: '/termine',
                views: {
                    'header' : {
                        templateUrl: 'modules/core/views/home/header.client.view.html'
                    },
                    'content' : {
                        templateUrl: 'modules/core/views/termine.client.view.html'
                    },
                    'footer' : {
                        templateUrl: 'modules/core/views/home/footer.client.view.html'
                    }
                }
            })
            .state('produkte', {
                url: '/produkte',
                views: {
                    'header' : {
                        templateUrl: 'modules/core/views/home/header.client.view.html'
                    },
                    'content' : {
                        templateUrl: 'modules/core/views/produkte.client.view.html'
                    },
                    'footer' : {
                        templateUrl: 'modules/core/views/home/footer.client.view.html'
                    }
                }
            })
        ;
    }
]);