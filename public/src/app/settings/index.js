import angular from 'angular';

// Create the module where our functionality can attach to
let pageModule = angular.module('app.settings', []);

// Include our UI-Router config settings
import SettingsConfig from './settings.config';
pageModule.config(SettingsConfig);

// Controllers
import SettingsCtrl from './settings.controller';
pageModule.controller('SettingsCtrl', SettingsCtrl);

export default pageModule;
