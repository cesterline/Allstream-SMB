import angular from 'angular';

// Create the module where our functionality can attach to
let pageModule = angular.module('app.order', []);

// Include our UI-Router config settings
import orderConfig from './order.config';
pageModule.config(orderConfig);

// Controllers
import orderCtrl from './order.controller';
pageModule.controller('orderCtrl', orderCtrl);


export default pageModule;
