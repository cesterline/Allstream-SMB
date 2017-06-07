import angular from 'angular';

// Create the module where our functionality can attach to
let serviceModule = angular.module('app.serv', []);

// Include our UI-Router config settings
import ServicesConfig from './services.config';
serviceModule.config(ServicesConfig);

// Controllers
import ServicesCtrl from './services.controller';
serviceModule.controller('ServicesCtrl', ServicesCtrl);

export default serviceModule;
