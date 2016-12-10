(function() {
    "use strict";

    angular
        .module('videoclub-collection.movie')
        .factory('MovieService', MovieService);

    function MovieService($http) {
        
        return {
            allMovies: function () {
                return $http.get('http://localhost:2506/api/Movie/Index');
            },

            getMovie: function (id) {

                return $http.get('http://localhost:2506/api/Movie/Edit?id=' + id.id);
            },
            
            createMoviePost : function (movie) {
                
                return $http({
                    
                    method:'POST',
                    url: 'http://localhost:2506/api/Movie/Create',
                    data:  movie
                })
            },
            
            createMovieGet : function () {
                
                return $http.get('http://localhost:2506/api/Movie/Create');
            },
            
            rentedMovies : function () {
            
                return $http.get('http://localhost:2506/api/UserMovieRent');
            },
            
            updateMovie : function (movie) {
                return $http({
                        method: 'POST',
                        url: 'http://localhost:2506/api/Movie/Edit',
                        data: movie
                });
            }
        };
    }
})();