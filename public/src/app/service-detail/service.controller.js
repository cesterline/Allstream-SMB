class ServiceCtrl {
    constructor($stateParams, $timeout, $scope) {
        'ngInject';

        this.background = $stateParams.background;
        this.name = $stateParams.path;
        this._$timeout = $timeout;
        this.list = false;
        $('html,body').scrollTop(0);
        
        angular.element(document).ready(function () {
            this.to = $stateParams.scrollTo;

            console.log(this.wind)
            if(this.to) {
              if ($(window).width() >= 992) {
                  $('html,body').animate({scrollTop: $(this.to).offset().top - 158 }, "slow");
              }else{
                  $('html,body').animate({scrollTop: $(this.to).offset().top}, "slow");
              }   
                
            }
        });

        this.data = [
            {
                product: 'Netgear NL-900',
                desc: 'Network Router',
                qty: 2,
                ship: '08/14/2015',
                eff: '08/15/2015',
                order: '094534057',
                contact: 'Julie Water'
            },
            {
                product: 'Terabit System AM3D-90093E',
                desc: 'Telecom Switch',
                qty: 13,
                ship: '10/03/2015',
                eff: '10/04/2015',
                order: '094534080',
                contact: 'Natalie Porter'
            },
            {
                product: 'Netgear NL-600',
                desc: 'Network Router',
                qty: 2,
                ship: '11/28/2015',
                eff: '11/29/2015',
                order: '094539029',
                contact: 'John Carter'
            }
        ];

        this.data2 = [
            {
                product: 'Netgear NL-900',
                desc: 'Network Router',
                qty: 2,
                ship: '08/14/2015',
                eff: '08/15/2015',
                order: '094534057',
                contact: 'Julie Water'
            },
            {
                product: 'Terabit System AM3D-90093E',
                desc: 'Telecom Switch',
                qty: 13,
                ship: '10/03/2015',
                eff: '10/04/2015',
                order: '094534059',
                contact: 'Natalie Porter'
            },
            {
                product: 'Netgear NL-600',
                desc: 'Network Router',
                qty: 2,
                ship: '11/28/2015',
                eff: '11/29/2015',
                order: '094534058',
                contact: 'John Carter'
            }
        ];

        this.sort = {
            column: 'product',
            descending: false
        };

        this.sort2 = {
            column: 'product',
            descending: false
        };
    }

    topPosition() {
        $('html,body').scrollTop(0);
    }

    changeSorting(column, sortObj) {
        var sort = sortObj;
        if (sort.column == column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    }
    
     usageColor(){
        if (this.background == 'orange') {
            return 'color-1';
        } else if (this.background == 'green') {
            return 'color-2';
        }else if (this.background == 'blue') {
            return 'color-3';
        }    
    }
    
    openList(){
        if (this.list == false) {
            this.list = true;
        }else{
            this.list = false;
        }
    }
}

export default ServiceCtrl;