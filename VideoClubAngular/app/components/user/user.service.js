(function() {
    "use strict";

    angular
        .module('videoclub-collection.user')
        .factory('UserService', UserService);

    function UserService($http) {

//        var hostApi = 'http://localhost:2506/api';
        
        return {

            allUsers: function() {
                return $http.get('http://localhost:2506/api/User/Index');
            },
            userDetails: function(id) {
                return $http.get('http://localhost:2506/api/User/Details?id=' + id.id);
            },
            createUserPost: function(user) {
                return $http({
                    method: 'POST',
                    url: 'http://localhost:2506/api/User/Create',
                    data: user
                });
            },

            createUserGet: function() {
                return $http.get('http://localhost:2506/api/User/Create');
            },
            getUser: function(id) {
                return $http.get('http://localhost:2506/api/User/Edit?id=' + id.id);
            },
            updateUser: function(user) {
                return $http({
                    method: 'POST',
                    url: 'http://localhost:2506/api/User/Edit',
                    data: user
                });
            },
            rentMovies: function(data) {

                return $http({
                    method:'post',
                    url: 'http://localhost:2506/api/User/CreateUserMovieRent',
                    dataType: 'json',
                    data: data
                });
            },
            returnMoviesPost : function(userID) {
                
                return $http({
                    method:'post',
                    url: 'http://localhost:2506/api/User/CreateUserMovieReturn?id='+userID
                })
            }
            
        };
    }
})();