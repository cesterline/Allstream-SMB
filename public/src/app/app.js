import angular from 'angular';

// Import our app config files
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';
import uiMask from 'angular-ui-mask';

import 'moment';
import 'angular-datepicker';
import 'angular-animate';
import 'angular-ui-router';
import 'ng-file-upload';
import 'angular-google-maps-native';
import 'angular-ui-swiper';

import './config/app.templates';
// Import our app functionaity
import './layout';
import './components';
import './dashboard';
import './payment';
import './invoices';
import './service-detail';
import './elements';
import './settings';
import './edit';
import './user';
import './notification';
import './timezone';
import './our-services';
import './guides';
import './configurations';
import './equipment';
import './confirm';
import './auth';
import './services';
import './tickets';
import './order';

// Create and bootstrap application
const requires = [
    'ngAnimate',
    'ui.router',
    'templates',
    'app.layout',
    'app.auth',
    'app.components',
    'app.service',
    'app.serv',
    'app.elements',
    'app.dashboard',
    'app.invoices',
    'app.payment',
    'app.settings',
    'app.notification',
    'app.user',
    'app.timezone',
    'app.configurations',
    'app.edit',
    'app.guides',
    'app.confirm',
    'app.order',
    'app.equipment',
    'GoogleMapsNative',
    'ui.swiper',
    'ngFileUpload',
    'app.tickets',
    'app.services',
    'datePicker',
    'ui.mask'
    
];

// Mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
