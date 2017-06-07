function orderConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.order', {
            url: '/order',
            controller: 'orderCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'order/order.html',
            params: {
                status: { value: "new" },
                activeOrder: {value: ""}
            }
    })
    $stateProvider
        .state('app.detaiorder', {
            url: '/order/:postID',
            controller: 'orderCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'order/detail-order.html',
            params: {
               activeOrder: {value: ""}
            }
    })
};

export default orderConfig;
