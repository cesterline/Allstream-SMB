class EquipmentCtrl {
    constructor() {
        'ngInject';
        
        this.orange = true;
        this.blue = true;
        this.green = true;
        
        this.data2 = [
            {
                product: 'Netgear NL-900',
                desc: 'Network Router',
                qty: 2,
                ship: '08/14/2015',
                eff: '08/15/2015',
                order: '094534057',
                contact: 'Julie Water',
                color: 'blue'
            },
            {
                product: 'Terabit System AM3D-90093E',
                desc: 'Telecom Switch',
                qty: 13,
                ship: '10/03/2015',
                eff: '10/04/2015',
                order: '094534080',
                contact: 'Natalie Porter',
                color: 'blue'
            },
            {
                product: 'Netgear NL-600',
                desc: 'Network Router',
                qty: 2,
                ship: '11/28/2015',
                eff: '11/29/2015',
                order: '094539029',
                contact: 'John Carter',
                color: 'blue'
            },
            {
                product: 'Netgear NL-900',
                desc: 'Network Router',
                qty: 2,
                ship: '08/14/2015',
                eff: '08/15/2015',
                order: '094534057',
                contact: 'Julie Water',
                color: 'orange'
            },
            {
                product: 'Terabit System AM3D-90093E',
                desc: 'Telecom Switch',
                qty: 13,
                ship: '10/03/2015',
                eff: '10/04/2015',
                order: '094534080',
                contact: 'Natalie Porter',
                color: 'orange'
            },
            {
                product: 'Netgear NL-600',
                desc: 'Network Router',
                qty: 2,
                ship: '11/28/2015',
                eff: '11/29/2015',
                order: '094539029',
                contact: 'John Carter',
                color: 'orange'
            },
            {
                product: 'Netgear NL-900',
                desc: 'Network Router',
                qty: 2,
                ship: '08/14/2015',
                eff: '08/15/2015',
                order: '094534057',
                contact: 'Julie Water',
                color: 'green'
            },
            {
                product: 'Terabit System AM3D-90093E',
                desc: 'Telecom Switch',
                qty: 13,
                ship: '10/03/2015',
                eff: '10/04/2015',
                order: '094534080',
                contact: 'Natalie Porter',
                color: 'green'
            },
            {
                product: 'Netgear NL-600',
                desc: 'Network Router',
                qty: 2,
                ship: '11/28/2015',
                eff: '11/29/2015',
                order: '094539029',
                contact: 'John Carter',
                color: 'green'
            }
            
            
        ];


        this.sort = {
            column: 'color',
            descending: false
        };
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
}

export default EquipmentCtrl;