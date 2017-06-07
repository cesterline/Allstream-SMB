class SettingsCtrl {
    constructor($rootScope, $http, $timeout) {
        'ngInject';

        this.error = false;
        this.success = false;
        this.equalPass = false;
        this.required = false;
        this.isOpenPopup = false;
        this._$rootScope = $rootScope;
        this.list = false;
        this.hideElem = true;
        this.edit = false;
        this.http = $http;
        this.$timeout = $timeout;
        this.hideMess = false;
        this.user = {
            userCurrentPass: '',
            userNewPass: '',
            userPassConfirm: '',
        };
        
        this.userSettings = {
            firstName: 'Alex',
            lastName: 'Longerlastname',
            nikName: 'LastnameAlex_1',
            password: 'LastnameAlex_1',
            email: 'alex@abcinc.com',  
            phone: '1(905)2298345'
        };
        
        this.dataTime = {
            availableOptions: [
              {id: '1', name: 'EST (UTC-5)'},
              {id: '2', name: 'EST (UTC-6)'},
              {id: '3', name: 'EST (UTC-7)'},
              {id: '3', name: 'EST (UTC-8)'}
            ],
            selectedOption: {id: '1', name: 'EST (UTC-5)'} 
        };
        this.dataLang = {
            availableOptions: [
              {id: '1', name: 'English'},
              {id: '2', name: 'French'}
            ],
            selectedOption: {id: '1', name: 'English'}
        };
        
       
    }
    
    getData(user){
          var userSettings = {
            firstName: this.userName,
            lastName: this.userLastNam,
            nikName: this.userNikname,
            password: this.userPass,
            email: this.userEmail,  
            phone: this.userPhone
          };
    }

    openPopup() {
        this.isOpenPopup = true;
        this._$rootScope.openPopup = 'body-hidden';
    }

    closePopup() {
        this.isOpenPopup = false;
        this._$rootScope.openPopup = '';
    }
    
    openList() {
        if (this.list == false) {
            this.list = true;
        }else{
            this.list = false;
        }
    }
    
    changePass(varificationPassword) {
      if (varificationPassword.$valid && this.user.userPassConfirm == this.user.userNewPass) {
             this.success = true;
          }else{
           this.required = true;    
           if (this.v() < 2 && this.v() != 0){
                 this.equalPass = false;
                 this.error = true;
                 this.required = false;
              }else{
                  if (this.user.userPassConfirm != this.user.userNewPass) {
                    this.error = false; 
                    this.equalPass = true;
                    this.required = false;  
                 }
              }
       }
    }
    
    v() {
        return test(this.user.userNewPass);
    }
    
}

let tests = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^A-Z-0-9]/i];


function test(pass){
    if(pass == null)
        return -1;
    var s = 0;
    if(pass.length<12)
        return 0;
    for(var i in tests)
        if(tests[i].test(pass))
            s++;
    return s;
}

export default SettingsCtrl;