import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import PieService from './pie.service';
servicesModule.service('PieService', PieService);

import popupService from './popup.service';
servicesModule.service('popupService', popupService);

import User from './users.service';
servicesModule.service('User', User);

import authService from './auth.service';
servicesModule.service('authService', authService);

export default servicesModule;
