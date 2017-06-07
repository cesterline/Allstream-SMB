function ElementsConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.elements', {
            url: '/elements',
            controller: 'ElementsCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'elements/elements.html',
        })
};

export default ElementsConfig;
