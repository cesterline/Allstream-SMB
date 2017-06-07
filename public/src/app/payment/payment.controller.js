class PaymentCtrl {
    constructor($rootScope) {
        'ngInject';
        
        this.tab = 1;
        this.isOpenPopup = false;
        this.success = false;
        this._$rootScope = $rootScope;
        $('html,body').scrollTop(0);
        this.update = false;
        this.select = false;
        this.thank = false;
        this.searchInvoice = '';
        this.errorCard = false;
        this.addNumber = '0088';

        this.dataAmount = [
            {
                date: '4/5/2017',
                invoice: 18743,
                amount: '3,098.94',
                result: 'Confirmed',
                ID: '68432123-7651',
                month: 'January, 2016'
            },
            {
                date: '4/12/2017',
                invoice: 75658,
                amount: '1,000.00',
                result: 'Confirmed',
                ID: '68432123-7651',
                month: 'February, 2016'
            },
            {
                date: '4/18/2017',
                invoice: 10546,
                amount: '2,500.00',
                result: 'Confirmed',
                ID: '68432123-7651',
                month: 'March, 2016',
            },
            {
                date: '4/22/2017',
                invoice: 12856,
                amount: '2,155.50',
                result: 'Confirmed',
                ID: '68432123-7651',
                month: 'April, 2016'
            },
            {
                date: '4/7/2017',
                invoice: 11228,
                amount: '6,350.50',
                result: 'Confirmed',
                ID: '68432123-7651',
                month: 'May, 2016'
            },
            {
                date: '4/30/2017',
                invoice: 12568,
                amount: '4,999.99',
                result: 'Confirmed',
                ID: '68432123-7651',
                month: 'June, 2016'
            }
        ];

        this.to_date = '4/30/2017';
        this.from_date = '4/5/2017';

        this.sort = {
            column: 'date',
            descending: false
        };  
    }
    
 
    setTab(newTab) {
        this.tab = newTab;
    }
    isSet(tabNum) {
        return this.tab === tabNum;
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

    openSelect() {
        this.select = true;
    }
    
    addCard(addCardForm) {
      
     if (addCardForm.$valid){
           this.success = true; 
           this.isOpenPopup = false;
           this.addNumber = cardNumber(this.addcardNumber);     
       }else{
           this.errorCard = true;
       } 
    }
    
    updateCard(){
        this.isOpenPopup = true; 
        this.update = false;
    }
    
    payCard(payForm){
       if (payForm.$valid){
           this.thank = true;
       }else{
           this.error = true;
       }
    }

    updateCardData(){
        this.success = false;
        this.popup_add_card = false;
        this.update = true;
    } 
}

function maxDate(data){
    var max = data[0].date;
    for(var i=0; i < data.length; i++)
        if(data[i].date > max)
            max = data[i].date;
    return max;
}

function cardNumber(card){
    return card = card.substr(card.length - 4);
}

function minDate(data){
    var min = data[0].date;
    for(var i=0; i < data.length; i++)
        if(data[i].date < min)
            min = data[i].date;
    return min;
}

export default PaymentCtrl;