class DashboardCtrl {
    constructor($timeout, PieService, $rootScope, $state, $stateParams) {
        'ngInject';
        
        this.box6 = true;
        this.box7 = true;
        this.box5 = true;
        this._$timeout = $timeout;
        this.pie = PieService.init(); 
        this.success = false;
        this.isOpenPopup = false;
        this.errorCard = false;
        this.update = false;
        this.rootScope = $rootScope;
        this.state = $state;
        
        this.dataInvoice = [
            {
                date: '01/01/2016',
                invoice: 18743,
                account: 'Account name 1',
                amount: '3,000.00',
                actions: 'pdf/info.pdf',
                datepay: '03/09/2016',
                month: 'Jan, 2016'
            },
            {
                date: '01/02/2016',
                invoice: 98743,
                account: 'Account name 2',
                amount: '5,000.00',
                actions: 'pdf/info.pdf',
                datepay: '01/09/2016',
                month: 'Feb, 2016'
            },
            {
                date: '01/03/2016',
                invoice: 78743,
                account: 'Account name 3',
                amount: '6,000.00',
                actions: 'pdf/info.pdf',
                datepay: '01/10/2016',
                month: 'Mar, 2016'
            },
            {
                date: '01/04/2016',
                invoice: 78743,
                account: 'Account name 3',
                amount: '4,000.00',
                actions: 'pdf/info.pdf',
                datepay: '01/09/2016',
                month: 'Apr, 2016'
            },
            {
                date: '01/05/2016',
                invoice: 78743,
                account: 'Account name 3',
                amount: '6,000.00',
                actions: 'pdf/info.pdf',
                datepay: '01/12/2016',
                month: 'May, 2016'
            }
            ,
            {
                date: '01/06/2016',
                invoice: 78743,
                account: 'Account name 3',
                amount: '4,500.00',
                actions: 'pdf/info.pdf',
                datepay: '25/09/2016',
                month: 'Jun, 2016'
            }
            ,
            {
                date: '01/07/2016',
                invoice: 78743,
                account: 'Account name 3',
                amount: '5,500.00',
                actions: 'pdf/info.pdf',
                datepay: '17/09/2016',
                month: 'Jul, 2016'
            }
            ,
            {
                date: '01/08/2016',
                invoice: 78743,
                account: 'Account name 3',
                amount: '6,000.00',
                actions: 'pdf/info.pdf',
                datepay: '01/09/2016',
                month: 'Aug, 2016'
            }
            ,
            {
                date: '01/09/2016',
                invoice: 78743,
                account: 'Account name 3',
                amount: '4,000.00',
                actions: 'pdf/info.pdf',
                datepay: '11/04/2016',
                month: 'Sep, 2016'
            }
        ];
        
        this.payCardName = 'John Smith';
        this.payCardNumber = '1564458785210888';
        this.payCardDate = '19';
        this.payCardMonth = '03';
        this.addNumber = cardNumber(this.payCardNumber); 
        
        
        this.searchInvoice = '';
        this.sort = {
            column: 'date',
            descending: false
        };
    }
    
    updateCard(){
        this.isOpenPopup = true; 
        this.update = true; 
        this.payCardMonth = "**";
        this.payCardCvv = '';
    }
    
    changeSorting(column) {
        var sort = this.sort;
        if (sort.column == column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    }
    
    addCard(addCardForm) {
     if (addCardForm.$valid){
           this.success = true; 
           this.isOpenPopup = false;
           this.update = false;
              this.addNumber = cardNumber(this.payCardNumber); 
       }else{
           this.errorCard = true;
           
       } 
     }
    
}

function cardNumber(card){
    return card = card.substr(card.length - 4);
}


export default DashboardCtrl;