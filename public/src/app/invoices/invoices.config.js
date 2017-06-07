function InvoicesConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.invoices', {
            url: '/invoices',
            controller: 'InvoicesCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'invoices/invoices.html',
            params: {
              param1: { value: "tab1" }
            }
    })
};

export default InvoicesConfig;
