function NotificationConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.notification', {
            url: '/notification',
            controller: 'NotificationCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'notification/notification.html',
            reloadPage: 'yes'
        })
};

export default NotificationConfig;
