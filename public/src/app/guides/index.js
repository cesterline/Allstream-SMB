import angular from 'angular';

// Create the module where our functionality can attach to
let pageModule = angular.module('app.guides', []);

// Include our UI-Router config settings
import GuidesConfig from './guides.config';
pageModule.config(GuidesConfig);

// Controllers
import GuidesCtrl from './guides.controller';
pageModule.controller('GuidesCtrl', GuidesCtrl);

export default pageModule;
