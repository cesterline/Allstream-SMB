class ZoneCtrl {
    constructor($rootScope) {
        'ngInject';

        this.isOpenPopup = false;
        this._$rootScope = $rootScope;
    }

    openPopup() {
        this.isOpenPopup = true;
        this._$rootScope.openPopup = 'body-hidden';
    }

    closePopup() {
        this.isOpenPopup = false;
        this._$rootScope.openPopup = '';
    }
}

export default ZoneCtrl;