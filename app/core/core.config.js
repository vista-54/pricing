;(function () {
    angular
        .module('app')
        .config(mainConfig)
    // .config(['$mdIconProvider', function ($mdIconProvider) {
    //     $mdIconProvider
    //         .iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24)
    //         .defaultIconSet('bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24);
    // }]);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function mainConfig($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/homepage/homepage.html',
                controller: 'HomepageController',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
            })


    }


})();

