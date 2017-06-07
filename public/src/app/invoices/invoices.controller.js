class InvoicesCtrl {
    constructor($rootScope, $stateParams) {
        'ngInject';

        this.rootScope = $rootScope; 
        this.tab = 1;
        this.select = false;
        this.searchInvoice = '';

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

        this.from_date = this.dataInvoice[0].date;
        this.to_date = this.dataInvoice[5].date;

        this.sort = {
            column: 'date',
            descending: false
        };

        this.paramOne = $stateParams.param1;
        
    }
    
    setPage() {
        if (this.paramOne == 'tab2') {
             this.tab = 2;
        }
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

    
    setType(type, link) {
        $('.cdr').attr('href', link).find('span').text(type);
        this.select = false;
        $('.variants').removeClass('active variants-hover');
    }
    
}

export default InvoicesCtrl;