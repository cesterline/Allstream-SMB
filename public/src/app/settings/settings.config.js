function SettingsConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.settings', {
            url: '/settings',
            controller: 'SettingsCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'settings/settings.html',
            reloadPage: 'yes'
    })
    $stateProvider
        .state('app.changepassword', {
            url: '/change-password',
            controller: 'SettingsCtrl',
            controllerAs: '$SettingsCtrl',
            templateUrl: 'settings/change-password.html',
            reloadPage: 'yes'
    })
};

export default SettingsConfig;
