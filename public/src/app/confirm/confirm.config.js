function ConfirmConfig($stateProvider) {
  'ngInject';

    $stateProvider
        .state('app.confirm', {
            url: '/confirm',
            controller: 'ConfirmCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'confirm/confirm.html',
        })
};

export default ConfirmConfig;
