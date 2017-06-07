function scrollToItem ($window, $document) {
    'ngInject';
      var $win = angular.element($window),
          offsetY = 0;
        return {
            restrict: 'A',
            scope: {
                scrollTo: "@"
            },
            link: function (scope, $elm, attr) {
                $elm.on('click', function () {
                   offsetY = $elm[0].getAttribute("scroll-to-offset");  
                    if ($win.width()<=992){
                        $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top}, "slow");
                    }else{
                        $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top - offsetY}, "slow"); 
                    }
                });
            }
        }
}

export default scrollToItem;
