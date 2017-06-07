function EquipmentConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.equipment', {
            url: '/equipment',
            controller: 'EquipmentCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'equipment/equipment.html',
            containerClass: 'grey-bg'
        })
};

export default EquipmentConfig;
