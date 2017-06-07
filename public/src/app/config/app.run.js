function AppRun(AppConstants, $rootScope, $log, $timeout, $window, $state) {
    'ngInject';

    $rootScope.openPopup = '';
    

    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $rootScope.setPageTitle(toState.title);
        $rootScope.containerClass = toState.containerClass;
        $('.account-menu').removeClass('account-menu-hover active');
        $('html, body').animate({ scrollTop: 0 }, 0);
        console.log();
    });


    if(localStorage.getItem('firstLoad')) {
        $rootScope.appContentLoaded = false;
    } else {
        $rootScope.appContentLoaded = true;
        localStorage.setItem('firstLoad', 1);
    }

    $rootScope.$on('$viewContentLoaded', function() {
        $timeout(function () {
            $('#loader').fadeOut();
            localStorage.setItem('firstLoad', 1);
        }, 1000);
    });

    $(window).on('load', function () {
        if(localStorage.getItem('indexAccount')) {
            var accountSelect = +localStorage.getItem('indexAccount') - 1;

            var service =  $('.account-item').eq(accountSelect).find('h5').text(),
                acc = $('.account-item').eq(accountSelect).find('span').text();

            $('.account-item').removeClass('active');
            $('.account-item').eq(accountSelect).addClass('active');
            $('.header-account-info').find('h5').text(service);
            $('.header-account-info').find('span').text(acc);
        }
    });
    
    $rootScope.setPageTitle = (title) => {
        $rootScope.pageTitle = '';
        if (title) {
            $rootScope.pageTitle += title;
            $rootScope.pageTitle += ' \u2014 ';
        }
        $rootScope.pageTitle += AppConstants.appName;
    };


    $(document).on('click', '.account-item', function () {
        localStorage.setItem('indexAccount', $(this).index());
        $window.location.reload();
    });
    
    $(document).on('mouseenter', '.show-btn', function () {
        $(this).next().attr('type', 'text');
    });

    $(document).on('mouseenter', '.show-btn', function () {
        $(this).next().attr('type', 'text');
    });
    
    
    $(document).on('mouseleave', '.show-btn', function () {
        $(this).next().attr('type', 'password');
    });


    var accountTimeout,
        btnTimeout,
        menuTimeout;
    function setT() {
        accountTimeout = setTimeout(function () {
            $('.accounts-select').removeClass('accounts-select-hover active');
        }, 500);
    }

    function setT2() {
        menuTimeout = setTimeout(function () {
            $('.account-menu').removeClass('account-menu-hover active');
        }, 500);
    }

    function setT3() {
        btnTimeout = setTimeout(function () {
            $('.variants-hover').removeClass('active variants-hover');
        }, 500);
    }

    function clerT() {
        clearTimeout(accountTimeout);
    }

    function clerT2() {
        clearTimeout(menuTimeout);
    }

    function clerT3() {
        clearTimeout(btnTimeout);
    }

    $(document).on('click', '.var_btn a', function (e) {
        if($(this).attr('href')) {
            e.stopPropagation();
            $('.variants').addClass('deactive');
        }
    });

    $(document).on('click', '.var_btn', function () {
        $('.variants').addClass('active').removeClass('deactive');

    });
    
    $(document).on('click', '.save-click', function () {
       $(this).parent().find('.save-mess').fadeIn(200).delay(2000).fadeOut(200);
    });
    
    $(document).on('change', '.save-change', function () {
       $(this).parent().find('.save-mess').fadeIn(200).delay(2000).fadeOut(200);
    });

    $(document).on('mouseleave', '.var_btn', function () {
        setTimeout(function () {
            $('.variants').removeClass('active');
        }, 1000);
    });
    
    $(document).on('mouseenter', '.variants', function () {
        clerT3();
       $(this).addClass('variants-hover');
    });

    $(document).on('mouseleave', '.variants-hover', function () {
        setT3();
    });


    $(document).on('click', '.arrow-icon', function () {
        $('.accounts-select').addClass('active');
    });

    $(document).on('mouseleave', '.arrow-icon', function () {
        setTimeout(function () {
            $('.accounts-select').removeClass('active');
        }, 1000);
    });


    $(document).on('mouseenter', '.accounts-select', function () {
        clerT();
        $(this).addClass('accounts-select-hover');
    });

    $(document).on('mouseleave', '.accounts-select', function () {
        setT();
    });


    $(document).on('click', '.avatar-icon', function () {
        $('.account-menu').addClass('active');
    });

    $(document).on('mouseleave', '.avatar-icon', function () {
        setTimeout(function () {
            $('.account-menu').removeClass('active');
        }, 1000);
    });

    $(document).on('mouseenter', '.account-menu', function () {
        clerT2();
        $(this).addClass('account-menu-hover');
    });

    $(document).on('mouseleave', '.account-menu', function () {
        setT2();
    });

    $(document).on('click', '.account-menu a', function () {
        console.log('yes');
        clerT2();
        $('.account-menu').removeClass('account-menu-hover active');
    });

    
}

export default AppRun;
