function scrollToTopBeforeAnimation($animate) {
    'ngInject';
      return {
            restrict: 'A',
            link: function ($scope, element) {
                $animate.on('enter', element, function (element, phase) {
                   
                    if (phase === 'start') {

                        window.scrollTo(0, 0);
                    }

                })
            }
        };
    
}

export default scrollToTopBeforeAnimation;

