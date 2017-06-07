import angular from 'angular';

// Create the module where our functionality can attach to
let pageModule = angular.module('app.timezone', []);

// Include our UI-Router config settings
import ZoneConfig from './timezone.config';
pageModule.config(ZoneConfig);

// Controllers
import ZoneCtrl from './timezone.controller';
pageModule.controller('ZoneCtrl', ZoneCtrl);

export default pageModule;
