function dateRange () {
    'ngInject';

    return function( items, fromDate, toDate ) {

        if(fromDate == '' || toDate == '') {
            return items;
        } else {
            var filtered = [];

            var from_date = Date.parse(fromDate);
            var to_date = Date.parse(toDate);

            angular.forEach(items, function(item) {
                if(Date.parse(item.date) >= from_date && Date.parse(item.date) <= to_date) {
                    filtered.push(item);
                }
            }); 
            return filtered;
        }
    };
}

export default dateRange;