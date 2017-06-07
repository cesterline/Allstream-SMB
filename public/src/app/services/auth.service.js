export default class authService {
    constructor($http) {
        'ngInject';
         
        this.http = $http;
    }
    
    
    getToken() {
       return this.http.get('auth/userData');
    }


}