import angular from 'angular';

// Create the module where our functionality can attach to
let pageModule = angular.module('app.confirm', []);

// Include our UI-Router config settings
import ConfirmConfig from './confirm.config';
pageModule.config(ConfirmConfig);

// Controllers
import ConfirmCtrl from './confirm.controller';
pageModule.controller('ConfirmCtrl', ConfirmCtrl);

export default pageModule;
