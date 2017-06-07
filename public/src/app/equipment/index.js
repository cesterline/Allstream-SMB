import angular from 'angular';

// Create the module where our functionality can attach to
let pageModule = angular.module('app.equipment', []);

// Include our UI-Router config settings
import EquipmentConfig from './equipment.config';
pageModule.config(EquipmentConfig);

// Controllers
import EquipmentCtrl from './equipment.controller';
pageModule.controller('EquipmentCtrl', EquipmentCtrl);

export default pageModule;
