import angular from 'angular';

// Create the module where our functionality can attach to
let pageModule = angular.module('app.edit', []);

// Include our UI-Router config settings
import EditConfig from './edit.config';
pageModule.config(EditConfig);

// Controllers
import EditCtrl from './edit.controller';
pageModule.controller('EditCtrl', EditCtrl);

export default pageModule;
