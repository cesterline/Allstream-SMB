function ServiceConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.service', {
            url: '/service/:path/:scrollTo?background&name',
            controller: 'ServiceCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'service-detail/service.html',
        })
};

export default ServiceConfig;
