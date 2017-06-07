import angular from 'angular';

// Create the module where our functionality can attach to
let serviceModule = angular.module('app.service', []);

// Include our UI-Router config settings
import ServiceConfig from './service.config';
serviceModule.config(ServiceConfig);

// Controllers
import ServiceCtrl from './service.controller';
serviceModule.controller('ServiceCtrl', ServiceCtrl);

export default serviceModule;
