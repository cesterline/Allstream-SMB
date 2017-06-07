function MypageConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.mypage', {
            url: '/mypage',
            controller: 'MypageCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'mypage/mypage.html',
        })
};

export default MypageConfig;
