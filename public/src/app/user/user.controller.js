class userCtrl {
    constructor($state, $http, User, $window) {
        'ngInject';
        this.state = $state;
        this.http = $http;
        this.data = [
            {'userName' : 'User name #1', 'active' : false, 'suspend' : true, 'grant' : false, 'service':'internet', 'number':'87321006984243', 'id':'1'},
            {'userName' : 'User name #2', 'active' : false, 'suspend' : true, 'grant' : false, 'service':'voice', 'number':'87321006984243', 'id':'2' },
            {'userName' : 'User name #3', 'active' : true, 'suspend' : false, 'grant' : true, 'service':'internet', 'number':'87321006984243', 'id':'3' },
            {'userName' : 'User name #4', 'active' : false, 'suspend' : true, 'grant' : false, 'service':'network', 'number':'87321006984243', 'id':'4' },
            {'userName' : 'User name #5', 'active' : true, 'suspend' : false, 'grant' : true, 'service':'internet', 'number':'87321006984243', 'id':'5' },
            {'userName' : 'User name #6', 'active' : false, 'suspend' : true, 'grant' : false, 'service':'voice', 'number':'87321006984243', 'id':'6' }
        ];
        this.dataAccess = [
            {'name' : 'Internet Services', 'number':'87321006984243', 'viewInvoices' : 0, 'firstTimePayments' : 0, 'billingTickets' : 0, 'incidentTickets' : 0, 'salesServiceTickets' : 0, 'orders' : 0},
            {'name' : 'Voice Services', 'number':'87321006984243', 'viewInvoices' : 0, 'firstTimePayments' : 0, 'billingTickets' : 0, 'incidentTickets' : 0, 'salesServiceTickets' : 0, 'orders' : 0},
            {'name' : 'Network Services', 'number':'87321006984243', 'viewInvoices' : 0, 'firstTimePayments' : 0, 'billingTickets' : 0, 'incidentTickets' : 0, 'salesServiceTickets' : 0, 'orders' : 0},
            {'name' : 'Internet Services', 'number':'87321006984243', 'viewInvoices' : 0, 'firstTimePayments' : 0, 'billingTickets' : 0, 'incidentTickets' : 0, 'salesServiceTickets' : 0, 'orders' : 0},
            {'name' : 'Network Services', 'number':'87321006984243', 'viewInvoices' : 0, 'firstTimePayments' : 0, 'billingTickets' : 0, 'incidentTickets' : 0, 'salesServiceTickets' : 0, 'orders' : 0}
        ];
        
        this.createSubAccount = {};
        this.check = this.data.active;
        this.all = false;
        this.correct = false;
        this.window = $window;
        this.usersSubAccount = [];
        this.checked = false;
        User.getUsersSubAccount().then(result => this.usersSubAccount = result.data.result);
        this.user = User;
    }
     
    validUser(newUserForm) {
        if (newUserForm.$valid) {
            this.state.go('app.new-pass');
        }else{
            this.correct = true; 
        }
//            var allRight = {};
//                angular.forEach(this.usersSubAccount, function(item) {
//                     let id = item.subAccountId; 
//                       let userStr = {
//                           "viewInvoices":item.viewInvoices,
//                           "billingTickets":item.billingTickets,
//                           "incidentTickets":item.incidentTickets,
//                           "salesServiceTickets":item.salesServiceTickets,
//                           "orders":item.orders
//                        }
//                    
//                       allRight[id] = userStr;
//                   
//                });
//      
//                   let data = {
//                            "userName": this.userName,
//                            "firstName": this.firstName,
//                            "lastName": this.lastName,
//                            "email": this.email,
//                            "phone": this.phone,
//                            "role": 1,
//                            "password": 45678948848,
//                            "managerId": '1546456456456',
//                            "companyId": '0013600000QTYHS',
//                            "parentUserId": '444455656456565',
//                            "active":0,
//                            'rights': allRight
//                    };
//     
//            data = JSON.stringify(data);
//           
//            this.user.createUsersSubAccount(data).then(function(result) {
//               
//                if (result.data.success) {
//                    console.log(result.data);
//                } else {
//                    console.log(result.data);
//                }
//            });
               
    }
    
    addAccess(item){
        if (item.active == false) {
            item.active = true;
        }else{
            item.active = false;
        }
    }
    
    checkAll(item, val){
      if (val == true){
          item.orders = 1; 
          item.salesServiceTickets = 1;
          item.incidentTickets = 1;
          item.billingTickets = 1;
          item.firstTimePayments = 1;
          item.viewInvoices = 1;
      }else{
          item.orders = 0; 
          item.salesServiceTickets = 0;
          item.incidentTickets = 0;
          item.billingTickets = 0;
          item.firstTimePayments = 0;
          item.viewInvoices = 0;
      }        
    }
}

export default userCtrl;