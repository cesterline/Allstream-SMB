import angular from 'angular';

// Create the module where our functionality can attach to
let myModule = angular.module('app.mypage', []);

// Include our UI-Router config settings
import MypageConfig from './mypage.config';
myModule.config(MypageConfig);

// Controllers
import MypageCtrl from './mypage.controller';
myModule.controller('MypageCtrl', MypageCtrl);

export default myModule;
