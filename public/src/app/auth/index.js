import angular from 'angular';

// Create the module where our functionality can attach to
let pageModule = angular.module('app.auth', []);

// Include our UI-Router config settings
import AuthConfig from './auth.config';
pageModule.config(AuthConfig);

// Controllers
import AuthCtrl from './auth.controller';
pageModule.controller('AuthCtrl', AuthCtrl);

export default pageModule;
