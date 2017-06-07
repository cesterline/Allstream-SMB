function userConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.user', {
            url: '/user',
            controller: 'userCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'user/user.html',
    })
    $stateProvider
        .state('app.newuser', {
            url: '/new-user',
            controller: 'userCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'user/new-user.html',
    })
    $stateProvider
        .state('app.subaccount', {
            url: '/sub-account',
            controller: 'userCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'user/sub-accounts.html',
    })
    $stateProvider
        .state('app.premissions', {
            url: '/premissions',
            controller: 'userCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'user/premissions.html',
    })
};

export default userConfig;
