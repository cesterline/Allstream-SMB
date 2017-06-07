function nxEqualEx() {
    'ngInject';
    
            return {
                require: 'ngModel',
                link: function (scope, elem, attrs, model) {
                    if (!attrs.nxEqualEx) {
                        return;
                    }
                    scope.$watch(attrs.nxEqualEx, function (value) {
                        if (model.$viewValue !== undefined && model.$viewValue !== '') {
                            model.$setValidity('nxEqualEx', value === model.$viewValue);
                        }
                    });
                    model.$parsers.push(function (value) {   
                        if (value === undefined || value === '') {
                            model.$setValidity('nxEqualEx', true);
                            return value;
                        }
                        var isValid = value === scope.$eval(attrs.nxEqualEx);
                        model.$setValidity('nxEqualEx', isValid);
                        return isValid ? value : undefined;
                    });
                }
            };
}

export default nxEqualEx;
