function fixScrollBottom($window, $document) {
    'ngInject';
     var $win = angular.element($window),
         $doc = angular.element($document),
         $footer = document.getElementsByTagName('footer');
        
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                  var topClass = attrs.fixScrollBottom;
                    if ($win.scrollTop() + $win.height() > $doc.height() - 67) {
                        element.addClass(topClass);
                    }
                        $win.on('scroll', function(e) {
                            if ($win.scrollTop() + $win.height() > $doc.height() - 67) {
                                element.addClass(topClass);
                            } else {
                                element.removeClass(topClass);
                            }
                        });
            }
        };
    }
export default fixScrollBottom;