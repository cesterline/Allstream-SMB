
function fixScrollElem($window) {
    'ngInject';
     var $win = angular.element($window);
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var topClass = attrs.fixScrollElem, 
                    offsetY = document.getElementsByClassName('scroll-fix')[0].getAttribute("data-offset"),
                    offsetTop = element.offset().top + parseInt(offsetY);
                $win.on('scroll', function (e) {
                    if ($win.scrollTop() >= offsetTop) {
                        element.addClass(topClass);
                    } else {
                        element.removeClass(topClass);
                    }
                });
            }
        };
    }
export default fixScrollElem;
