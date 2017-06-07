function ZoneConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.timezone', {
            url: '/time-zone',
            controller: 'ZoneCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'timezone/timezone.html',
            reloadPage: 'yes'
        })
};

export default ZoneConfig;
