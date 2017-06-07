function ServicesConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.serv', {
            url: '/services',
            controller: 'ServicesCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'our-services/services.html',
            containerClass: 'grey-bg'
        })
};

export default ServicesConfig;
