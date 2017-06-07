function DashboardConfig($stateProvider) {
    'ngInject';


     $stateProvider
        .state('app.board', {
            url: '/board',
            controller: 'DashboardCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'dashboard/dashboard2.html',
     })
};

export default DashboardConfig;
