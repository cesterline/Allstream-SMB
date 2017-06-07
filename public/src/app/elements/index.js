import angular from 'angular';

// Create the module where our functionality can attach to
let elementsModule = angular.module('app.elements', []);

// Include our UI-Router config settings
import ElementsConfig from './elements.config';
elementsModule.config(ElementsConfig);

// Controllers
import ElementsCtrl from './elements.controller';
elementsModule.controller('ElementsCtrl', ElementsCtrl);

export default elementsModule;
