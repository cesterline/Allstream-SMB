import angular from 'angular';

// Create the module where our functionality can attach to
let pageModule = angular.module('app.configurations', []);

// Include our UI-Router config settings
import ConfigurationsConfig from './configurations.config';
pageModule.config(ConfigurationsConfig);

// Controllers
import ConfigurationsCtrl from './configurations.controller';
pageModule.controller('ConfigurationsCtrl', ConfigurationsCtrl);

export default pageModule;
