import angular from 'angular';

// Create the module where our functionality can attach to
let pageModule = angular.module('app.tickets', []);

// Include our UI-Router config settings
import ticketConfig from './tickets.config';
pageModule.config(ticketConfig);

// Controllers
import ticketCtrl from './tickets.controller';
pageModule.controller('ticketCtrl', ticketCtrl);


export default pageModule;
