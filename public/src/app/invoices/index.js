import angular from 'angular';

// Create the module where our functionality can attach to
let invoicesModule = angular.module('app.invoices', []);

// Include our UI-Router config settings
import InvoicesConfig from './invoices.config';
invoicesModule.config(InvoicesConfig);

// Controllers
import InvoicesCtrl from './invoices.controller';
invoicesModule.controller('InvoicesCtrl', InvoicesCtrl);

export default invoicesModule;
