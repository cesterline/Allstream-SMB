function PaymentConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.payment', {
            url: '/payment',
            controller: 'PaymentCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'payment/payment.html',
    })
    $stateProvider
        .state('app.pay', {
            url: '/pay',
            controller: 'PaymentCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'payment/pay.html',
    })
    $stateProvider
        .state('app.preauthorized', {
            url: '/pre-authorized',
            controller: 'PaymentCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'payment/pre-authorized.html',
    })
};

export default PaymentConfig;
