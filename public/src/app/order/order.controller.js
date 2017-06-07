class orderCtrl {
    constructor($stateParams, $state, $http) {
        'ngInject';
        
        this.order = [
            {'id' : '12143343d',
             'number' : 205, 
             'type' : 'Voice',
             'date' : '4/25/2017',
             'created' : 'First Lastname 1',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'order' : '18743',
             'state' : 'open'
            },
            {'id' : '48743343d',
             'number' : 115, 
             'type' : 'Internet',
             'date' : '4/14/2017',
             'created' : 'First Lastname 4',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'order' : '14148',
             'state' : 'closed'
            },
            {'id' : '55543343d',
             'number' : 158, 
             'type' : 'Network',
             'date' : '3/27/2017',
             'created' : 'First Lastname 2',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'order' : '78457',
             'state' : 'new'
            },
            {'id' : '12143348d',
             'number' : 305, 
             'type' : 'Internet',
             'date' : '3/31/2017',
             'created' : 'First Lastname 3',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'order' : '78994',
             'state' : 'open'
            },
            {'id' : '12145343d',
             'number' : 145, 
             'type' : 'Voice',
             'date' : '5/18/2017',
             'created' : 'First Lastname 5',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'order' : '78555',
             'state' : 'new'
            },
            {'id' : '12243343d',
             'number' : 254, 
             'type' : 'Network',
             'date' : '5/30/2017',
             'created' : 'First Lastname 8',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'order' : '78555',
             'state' : 'closed'
            },
            {'id' : '12147343d',
             'number' : 179, 
             'type' : 'Voice',
             'date' : '6/14/2017',
             'created' : 'First Lastname 10',
             'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt et quasi dolorum, suscipit inventore culpa quibusdam maiores esse praesentium itaque laudantium impedit recusandae, eum delectus quod, odit omnis odio eveniet.Sapiente pariatur nihil, perspiciatis voluptates consequatur expedita, sunt aspernatur temporibus unde inventore quasi minima non reiciendis, eos ducimus voluptas iure voluptate. Deleniti consectetur qui, molestias repellat maiores accusamus dolor recusandae.Voluptas dolores labore enim ipsum dolore, expedita natus asperiores non, qui consectetur ducimus ipsa autem deleniti vel saepe ut minima reiciendis. Consequuntur aperiam impedit natus nemo laboriosam obcaecati voluptatem doloribus',
             'order' : '44557',
             'state' : 'open'
            }
             
        ];
        
        this.propertyName = '';
        this.tab = 1;
        this.id = $stateParams.postID;  
        this.PostId;

        this.to_date = maxDate(this.order);
        this.from_date = minDate(this.order);
        
        this.sort = {
            column: 'date',
            descending: false
        };
        this.paramState = $stateParams.status;
        this.activeOrder = $stateParams.activeOrder;

    }

    
    setTab(newTab) {
        this.tab = newTab;
    }
    
    isSet(tabNum) {
        return this.tab === tabNum;
    }
    
    stateDefined(){   
       if (this.paramState == 'open') {
             this.tab = 2;
        }else{
           if (this.paramState == 'closed') {
              this.tab = 3; 
           } 
        }
    }
    
    detaiFnc(){
        let PostId = this.id;
          this.item = this.order.filter(function(entry){
             return entry.id === PostId;
          })[0];  
    }

    sortBy(propertyName) {
        this.propertyName = propertyName;
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

    orderType(strValue){
        if (strValue.type == 'Voice') {
            return 'voice-type';
        } else if (strValue.type == 'Internet') {
            return 'internet-type';
        } else if (strValue.type == 'Network') {
            return 'network-type';
        }
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



export default orderCtrl;