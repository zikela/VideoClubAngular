(function() {
    "use strict";

    angular
        .module('videoclub-collection.user')
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('main.userList', {
                url: '/users',
                views: {
                    'content@': {
                        resolve: {
                            users: getUsers
                        },
                        templateUrl: 'app/components/user/user-list.html',
                        controller: 'UserListController',
                        controllerAs: 'ulc'
                    }
                }
            })
            .state('main.details', {
                url: '/getUserDetails/:id',
                views: {
                    'content@': {
                        resolve: {
                            user: getUserDetails
                        },
                        templateUrl: 'app/components/user/user-details.html',
                        controller: 'UserDetailController',
                        controllerAs: 'udm'
                    }
                }
            })
            .state('main.addUser', {
                url: '/user/add',
                views: {
                    'content@': {
                        resolve: {
                            user: newUser
                        },
                        templateUrl: 'app/components/user/user-add.html',
                        controller: 'UserAddController',
                        controllerAs: 'uac'
                    }
                }
            })
            .state('main.editUser', {
                url: '/editUser/:id',
                views: {
                    'content@': {
                        resolve: {
                            user: getUser
                        },
                        templateUrl: 'app/components/user/user-edit.html',
                        controller: 'UserAddController',
                        controllerAs: 'uac'
                    }
                }
            });


        function getUsers(UserService) {
            return UserService.allUsers();
        }

        function getUser(UserService, $stateParams) {
            return UserService.getUser({
                id: $stateParams.id
            });
        }

        function getUserDetails($stateParams, UserService) {
            return UserService.userDetails({
                id: $stateParams.id
            });
        }

        function newUser(UserService) {
            return UserService.createUserGet();
        }

    }
})();