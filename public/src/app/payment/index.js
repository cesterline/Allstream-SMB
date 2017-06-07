import angular from 'angular';

// Create the module where our functionality can attach to
let paymentModule = angular.module('app.payment', []);

// Include our UI-Router config settings
import PaymentConfig from './payment.config';
paymentModule.config(PaymentConfig);

// Controllers
import PaymentCtrl from './payment.controller';
paymentModule.controller('PaymentCtrl', PaymentCtrl);

export default paymentModule;
