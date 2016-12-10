(function() {
	"use strict";

	angular
		.module('videoclub-collection.movie')
		.controller('MovieListController', MovieListController);

	function MovieListController($location, movies) {
		var rlc = this;
		
		rlc.movies = movies.data;
        
		rlc.pagination = {
			currentPage: 1,
			pageSize: 5,
			pages: new Array(Math.ceil(rlc.movies.length / 5)),
			changePage: function(page) {
				if(rlc.pagination.currentPage != page && page > 0 && page <= rlc.pagination.pages.length) {
					rlc.pagination.currentPage = page;
				}
			}
		};

		rlc.editMovie = function(id) {
			$location.path("/getMovie/"+id);
		};
	}
})();