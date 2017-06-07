class ticketCtrl {
    constructor($stateParams, $rootScope) {
        'ngInject';
        
        this.search = [];
        
        this.openFilter = false;
        
        this.ticket = [
            {'id' : '12143343d',
             'number' : '001', 
             'date' : '2/5/2017',
             'title' : 'Sunt et quasi dolorum, suscipit',
             'updated' : '17/02/2017',
             'created' : 'First Lastname 10',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'status' : 'standart',
             'state' : 'open',
             'type' : 'billing',
             'closedata' : ''
            },
            {'id' : '12783343d',
             'number' : '125', 
             'date' : '1/11/2017',
             'title' : 'Sunt et quasi dolorum, suscipit inventore',
             'updated' : '23/01/2017',
             'created' : 'First Lastname 2',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis.',
             'status' : 'hight',
             'state' : 'open',
             'type' : 'incident',
             'closedata' : ''
            },
            {'id' : '88143343d',
             'number' : '078', 
             'date' : '6/25/2017',
             'title' : 'Deleniti consectetur qui',
             'updated' : '25/06/2017',
             'created' : 'First Lastname 3',
             'content' : 'Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'status' : 'low',
             'state' : 'open',
             'type' : 'billing',
             'closedata' : ''
            },
            {'id' : '121433cc4',
             'number' : '156', 
             'date' : '3/5/2017',
             'title' : 'Voluptas dolores labore enim',
             'updated' : '05/03/2017',
             'created' : 'First Lastname 1',
             'content' : 'Laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'status' : 'standart',
             'state' : 'new',
             'type' : 'incident',
             'closedata' : ''
            },
            {'id' : '12553343d',
             'number' : '458', 
             'date' : '4/18/2017',
             'title' : 'Consequuntur aperiam impedit natus',
             'updated' : '18/04/2017',
             'created' : 'First Lastname 2',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'status' : 'standart',
             'state' : 'open',
             'type' : 'incident',
             'closedata' : ''
            },
            {'id' : '12144543d',
             'number' : '099', 
             'date' : '6/28/2017',
             'title' : 'Ticket short description admist',
             'updated' : '30/06/2017',
             'created' : 'First Lastname 4',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'status' : 'standart',
             'state' : 'open',
             'type' : 'sales',
             'closedata' : ''
            },
            {'id' : '86143343d',
             'number' : '015', 
             'date' : '2/11/2017',
             'title' : 'Ticket short description admist',
             'updated' : '14/02/2017',
             'created' : 'First Lastname 3',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'status' : 'hight',
             'state' : 'closed',
             'type' : 'billing',
             'closedata' : '05/02/2017'
            },
            {'id' : '12179343d',
             'number' : '003', 
             'date' : '3/18/2017',
             'title' : 'Laboriosam obcaecati voluptatem doloribus',
             'updated' : '28/03/2017',
             'created' : 'First Lastname 8',
             'content' : 'Voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'status' : 'low',
             'state' : 'open',
             'type' : 'sales',
             'closedata' : ''
            },
            {'id' : '12143cd43d',
             'number' : '255', 
             'date' : '4/24/2017',
             'title' : 'Deleniti consectetur qui',
             'updated' : '24/04/2017',
             'created' : 'First Lastname 4',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.',
             'status' : 'standart',
             'state' : 'open',
             'type' : 'billing',
             'closedata' : ''
            },
            {'id' : '12456cd456',
             'number' : '478', 
             'date' : '1/18/2017',
             'title' : 'Vitae dignissimos et placeat',
             'updated' : '18/01/2017',
             'created' : 'First Lastname 1',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae dignissimos et placeat quos totam nesciunt fugit incidunt quia, ipsa, quasi, ex aut maxime hic dicta.',
             'status' : 'standart',
             'state' : 'open',
             'type' : 'sales',
             'closedata' : ''
            },
            {'id' : '55543343d',
             'number' : '123', 
             'date' : '6/17/2017',
             'title' : 'Consequuntur aperiam impedit natus',
             'updated' : '15/07/2017',
             'created' : 'First Lastname 1',
             'content' : 'Consequuntur aperiam impedit natus nemo laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae dignissimos et placeat quos totam nesciunt fugit incidunt quia, ipsa, quasi, ex aut maxime hic dicta. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'status' : 'standart',
             'state' : 'new',
             'type' : 'sales',
             'closedata' : ''
            },
            {'id' : '1de443343d',
             'number' : '093', 
             'date' : '5/14/2017',
             'title' : 'Dolor sit amet, consectetur adipisicing',
             'updated' : '18/05/2017',
             'created' : 'First Lastname 1',
             'content' : 'Dolor sit amet, consectetur adipisicing elit. Vitae dignissimos et placeat quos totam nesciunt fugit incidunt quia, ipsa, quasi, ex aut maxime hic dicta.',
             'status' : 'low',
             'state' : 'closed',
             'type' : 'incident',
             'closedata' : '08/06/2017'
            }
             
        ];
        
        this.tab = 1;
        this.propertyName = '';
        this.arrangeName = 'all';
        this.id = $stateParams.ticketId;  
        this.ticketPage;
        this.sort = {
            column: 'date',
            descending: false
        };
        this.to_date = maxDate(this.ticket);
        this.from_date = minDate(this.ticket);
        this.typeState = $stateParams.type;
        this.statusState = $stateParams.status;
        this.activeTicket = $stateParams.activeTicket;

        this.billing = 'billing';
        this.incident = 'incident';
        this.sales = 'sales';
      
        this.ticket_type1 = true;
        this.ticket_type2 = true;
        this.ticket_type3 = true;
        
        this._$rootScope = $rootScope;
 
    }
    
    
    type1(val){
        if (this.billing == ''){
           this.billing = val; 
        }else{
           this.billing = '';
        } 
    }
    
    type2(val){
       if (this.incident == ''){
           this.incident = val; 
       }else{
           this.incident = '';
       }    
    }
    
    type3(val){
       if (this.sales == ''){
           this.sales = val; 
       }else{
           this.sales = '';
       }
    }

    typeDefined() {
        if (this.typeState == 'billing') {
            this.openFilter = true;
                this.ticket_type1 = true;
                this.ticket_type2 = false;
                this.ticket_type3 = false;
                 this.incident = '';
                 this.sales = '';
        }else{
            if (this.typeState == 'incident') {
                 this.openFilter = true;
                 this.billing = '';
                 this.sales = '';
                  this.ticket_type1 = false;
                  this.ticket_type2 = true;
                  this.ticket_type3 = false;
            }else{
                if (this.typeState == 'sales'){
                      this.openFilter = true;
                      this.billing = '';
                      this.incident = '';
                       this.ticket_type1 = false;
                       this.ticket_type2 = false;
                       this.ticket_type3 = true;
                  }
            }
        }
        
        if (this.statusState == 'open') {
            this.tab = 2;
        }else{
            if (this.statusState == 'closed') {
                this.tab = 3;
            }
        }
    }
    
    arrange(arrangeName) {
         this.arrangeName = arrangeName;
    }
    
    openFilters(){
        if (this.openFilter == false) {
             this.openFilter = true;
        }else{
             this.openFilter = false;
        }
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

    ticketsStatus(strValue){
        if (strValue.status == 'hight') {
            return 'hight-type';
        } else if (strValue.status == 'low') {
            return 'low-type';
        }    
    }
    
    ticketsState(strValue){
        if (strValue.state == 'closed') {
            return 'closed-state'; 
        }else if (strValue.state == 'new') {
            return 'new-state';  
        }
    }
    
    detaiFnc(){
        var ticketPage = this.id;
          this.item = this.ticket.filter(function(entry){
             return entry.id === ticketPage;
          })[0];  
    }

    sortBy(propertyName) {
        this.propertyName = propertyName;
    }
    
    setTab(newTab) {
        this.tab = newTab;
    }
    
    isSet(tabNum) {
        return this.tab === tabNum;
    }
}

function maxDate(data){
    var max = data[0].date;
    for(var i=0; i < data.length; i++)
        if(data[i].date > max)
            max = data[i].date;
    return max;
}

function minDate(data){
    var min = data[0].date;
    for(var i=0; i < data.length; i++)
        if(data[i].date < min)
            min = data[i].date;
    return min;
}

export default ticketCtrl;