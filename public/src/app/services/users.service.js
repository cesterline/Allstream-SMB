export default class User {
    constructor($http) {
        'ngInject';
         this.http = $http;
    }
    
    getUsersSubAccount() {
       return this.http.get('/subAccounts/company/0013600000QTYHS');
    }
    
    createUsersSubAccount() {
       return this.http.post('/users/create');
    }
    
}