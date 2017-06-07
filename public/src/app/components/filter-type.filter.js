function typeFilter () {
    'ngInject';

        return function (items, type, type2, type3) {
            var filtered = [];
            var oftype = type;
            var oftype2 = type2;
            var oftype3 = type3;
            angular.forEach(items, function(item) {
                if(item.type == oftype || item.type == oftype2 || item.type == oftype3) {
                    filtered.push(item);
                }
            }); 
            return filtered;
        }
}

export default typeFilter;