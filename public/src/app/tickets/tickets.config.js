function ticketConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.tickets', {
            url: '/tickets',
            controller: 'ticketCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'tickets/tickets.html',
            params: {
               type: { value: "" },
               activeTicket: {value: "active"}, 
               status: { value: "" } 
            }
    })
    $stateProvider
        .state('app.newticket', {
            url: '/new-ticket',
            controller: 'ticketCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'tickets/new-ticket.html',
            params: {
               activeTicket: {value: "active"}
            }
    })
    $stateProvider
        .state('app.detailticket', {
            url: '/tickets/:ticketId',
            controller: 'ticketCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'tickets/detail-ticket.html',
            params: {
               activeTicket: {value: "active"}
            }
    })
};

export default ticketConfig;
