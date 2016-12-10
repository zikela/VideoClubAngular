(function() {
    "use strict";

    angular
        .module('videoclub-collection.movie')
        .controller('RentedMovieController', RentedMovieController);

    function RentedMovieController(movies,  $location, $scope) {
        
        var rmc = this;
        
        rmc.movies = movies.data;
        
        rmc.pagination = {
			currentPage: 1,
			pageSize: 5,
			pages: new Array(Math.ceil(rmc.movies.length / 5)),
			changePage: function (page) {
				if(rmc.pagination.currentPage != page && page > 0 && page <= rmc.pagination.pages.length) {
					rmc.pagination.currentPage = page;
				}
			}
		};
        
        $scope.userDetails= function(id){
            
            $location.path(/getUserDetails/+id);
        };
    }
    
})();