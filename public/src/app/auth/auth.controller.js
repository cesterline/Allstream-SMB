class AuthCtrl {
    constructor($timeout, $rootScope, Upload, $http, $state, $stateParams, $q, $location, authService) {
        'ngInject';

        this.logoutPopup = false;
        this.registerPopup = false;
        this.isVerify = false;
        this._$timeout = $timeout;
        this.isResend = false;
        this.isOpenPopup = false;
        this.errorPopup = false;
        this._$rootScope = $rootScope;
        this.password = '';
        this.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        this.defAvatar = 'img/avatar-icon.png'; 

        this.user = {
            userName: '',
            userEmail: '',
            userPass: '',
            userPassConfirm: '',
            userAccountNumber: '',
            userInvoiceNumber: '',
            userPostCode: '',
            userPaid: ''
        };

        this.success = false;
        this.equalPass = false;
        this.state = $state;
        this.http = $http;
        
        $('html,body').scrollTop(0);
        
       
        this.auth = authService;
    } 


    closeRegister() {
        let self = this;
        this.isOpenPopup = false;
        this._$rootScope.openPopup = '';
        this.registerPopup = false;
        this.user = {
            userName: '',
            userEmail: '',
            userPass: '',
            userPassConfirm: '',
            userAccountNumber: '',
            userInvoiceNumber: '',
            userPostCode: '',
            userPaid: ''
        };

        $('.simple-input').removeClass('ng-touched');

        this._$timeout(function () {
            self.isResend = true
        }, 200);
    }

    registration(registartionForm) {
        
        this.auth.getToken().then(function(result) {
            if (result.data.success) {
                console.log(result.data);
            } else {
                console.log(result.data);
            }
        });

        
//     if (registartionForm.$valid && this.user.userPassConfirm == this.user.userPass) {  
//          this.success = true;
//          
//       }else{
//        this.errorPopup = true;     
//           if (this.v() < 2 && this.v() != 0){
//                 this.equalPass = false;
//                 this.error2 = true;
//                 this.errorPopup = false;
//              }else{
//                  if (this.user.userPassConfirm != this.user.userPass) {
//                    this.error2 = false; 
//                    this.equalPass = true;
//                    this.errorPopup = false;  
//                 }
//              }
//              
//
//       }  
    }
    
    verify(varificationForm) {
     if (varificationForm.$valid){
         this.isVerify = true;
           $('.step-form-1').slideUp();
           $('.step-form-2').slideDown();
           $('.registration-box').addClass('active');
       }else{
            this.errorPopup = true;
       } 
     }
    
    resetPass(varificationForm) {
        if (varificationForm.$valid) {
            this.state.go('app.new-pass');
        }else{
            this.errorPopup = true;
        }     
    }
    
    resetName(varificationForm) {
        if (varificationForm.$valid) {
            this.state.go('app.auth');
        }else{
           this.errorPopup = true; 
        }     
    }
    
    createPass(varificationPassword) {
      if (varificationPassword.$valid && this.user.userPassConfirm == this.user.userPass) {
             this.state.go('app.board');
          }else{
        this.errorPopup = true;     
           if (this.v() < 2 && this.v() != 0){
                 this.equalPass = false;
                 this.error = true;
                 this.errorPopup = false;
              }else{
                  if (this.user.userPassConfirm != this.user.userPass) {
                    this.error = false; 
                    this.equalPass = true;
                    this.errorPopup = false;  
                 }
              }
       }
    }
    
    changePass(varificationPassword) {
         if (this.v() >= 3 && (this.user.userPassConfirm = this.user.userPass)) {
             this.success = true;
         }else{
             if (this.user.userPassConfirm != this.user.userPass){
                 this.equalPass = true; 
             }else{
                 this.error = true; 
             }
         }
    }
    
    loginForm(loginForm) {
        if (loginForm.$valid) {
            this.state.go('app.board');
        }else{
            this.error = true;  
        }     
    }
    
   
    closeConfirmPopup() {
        this.registerPopup=false;
        this._$rootScope.openPopup = '';
    }

    v() {
        return test(this.user.userPass);
    }
    
    uploadPic(photo) {
        photo.upload = Upload.upload({
          method: 'PUT',    
          url: 'http://localhost:4000/public/img/upload',
          data: {photo: photo},
        });
        photo.upload.then(function (response) {
          $timeout(function () {
            photo.result = response.data;
          });
        }, function (response) {
           if (response.status > 0)  
              this.errorMsg = response.status + ': ' + response.data;
           }, function (evt) {
              photo.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

        });  
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


export default AuthCtrl;