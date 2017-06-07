function EditConfig($stateProvider) {
  'ngInject';

    $stateProvider
        .state('app.guides', {
            url: '/guides',
            controller: 'GuidesCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'guides/guides.html',
        })
};

export default EditConfig;
