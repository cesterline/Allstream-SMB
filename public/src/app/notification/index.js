import angular from 'angular';

// Create the module where our functionality can attach to
let pageModule = angular.module('app.notification', []);

// Include our UI-Router config settings
import NotificationConfig from './notification.config';
pageModule.config(NotificationConfig);

// Controllers
import NotificationCtrl from './notification.controller';
pageModule.controller('NotificationCtrl', NotificationCtrl);

export default pageModule;
