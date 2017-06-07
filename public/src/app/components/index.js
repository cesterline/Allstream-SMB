import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import ListErrors from './list-errors.component'
componentsModule.component('listErrors', ListErrors);

import slideToggle from './slide-toggle.directive';
componentsModule.directive('slideToggle', slideToggle);

import scrollToItem from './scroll-to.directive';
componentsModule.directive('scrollToItem', scrollToItem);

import restrictInput from './number-type.directive';
componentsModule.directive('restrictInput', restrictInput);

import fixScrollElem from './scroll-fix.directive';
componentsModule.directive('fixScrollElem', fixScrollElem);

import fixScrollBottom from './scroll-bottom.directive';
componentsModule.directive('fixScrollBottom', fixScrollBottom);

import scrollToTopBeforeAnimation from './anchor.directive';
componentsModule.directive('scrollToTopBeforeAnimation', scrollToTopBeforeAnimation);

import maskInput from './input-mask.directive';
componentsModule.directive('maskInput', maskInput);

import dateRange from './date-range.filter';
componentsModule.filter('dateRange', dateRange);

import typeFilter from './filter-type.filter';
componentsModule.filter('typeFilter', typeFilter);

export default componentsModule;
