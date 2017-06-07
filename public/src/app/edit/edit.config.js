function EditConfig($stateProvider) {
  'ngInject';

    $stateProvider
        .state('app.edit', {
            url: '/edit',
            controller: 'EditCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'edit/edit.html',
        })
};

export default EditConfig;
