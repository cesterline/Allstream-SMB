import angular from 'angular';

// Create the module where our functionality can attach to
let pageModule = angular.module('app.user', []);

// Include our UI-Router config settings
import userConfig from './user.config';
pageModule.config(userConfig);

// Controllers
import userCtrl from './user.controller';
pageModule.controller('userCtrl', userCtrl);

export default pageModule;
