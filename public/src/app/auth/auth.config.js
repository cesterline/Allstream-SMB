function AuthConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.auth', {
            url: '/',
            controller: 'AuthCtrl',
            controllerAs: '$ctrlAuth',
            templateUrl: 'auth/auth.html',
            containerClass: 'auth-page'
        })

        .state('app.reset-name', {
            url: '/reset-username',
            controller: 'AuthCtrl',
            controllerAs: '$ctrlAuth',
            templateUrl: 'auth/reset-name.html',
            containerClass: 'auth-page'
        })

        .state('app.reset-pass', {
            url: '/reset-password',
            controller: 'AuthCtrl',
            controllerAs: '$ctrlAuth',
            templateUrl: 'auth/reset-pass.html',
            containerClass: 'auth-page'
        })

        .state('app.new-pass', {
            url: '/create-password',
            controller: 'AuthCtrl',
            controllerAs: '$ctrlAuth',
            templateUrl: 'auth/new-pass.html',
            containerClass: 'auth-page'
        })
        
        .state('app.logout-confirm', {
            url: '/confirm-logout',
            controller: 'AuthCtrl',
            controllerAs: '$ctrlAuth',
            templateUrl: 'auth/confirm.html',
            containerClass: 'auth-page',
            reloadPage: 'yes'
        })
    
        .state('app.logout', {
            url: '/logout',
            controller: 'AuthCtrl',
            controllerAs: '$ctrlAuth',
            templateUrl: 'auth/logout.html',
            containerClass: 'auth-page',
            reloadPage: 'yes'
        })
};

export default AuthConfig;
