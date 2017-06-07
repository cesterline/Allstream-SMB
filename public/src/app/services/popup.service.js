export default class popupService {
    constructor(AppConstants, $http, $state, $rootScope) {
        'ngInject';
        this.isOpenPopup = false;
        this._$rootScope = $rootScope;
        console.log(this.isOpenPopup);
    }
    openPopup() {
        console.log(2);
        this.isOpenPopup = true;
        this._$rootScope.openPopup = 'body-hidden';
    }

    closePopup() {
        this.isOpenPopup = false;
        this._$rootScope.openPopup = '';
    }
}