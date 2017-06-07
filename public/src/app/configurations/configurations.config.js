function ConfigurationsConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.configurations', {
            url: '/configurations',
            controller: 'ConfigurationsCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'configurations/configurations.html',
            containerClass: 'grey-bg'
        })
};

export default ConfigurationsConfig;
