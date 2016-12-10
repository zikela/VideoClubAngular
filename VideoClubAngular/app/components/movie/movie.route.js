(function(){
	"use strict";

	angular
		.module('videoclub-collection.movie')
		.config(config);

	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('main.movieList', {
				url: '/movies',
				views: {
					'content@': {
						resolve : {
							movies: getMovies
						},
						templateUrl: 'app/components/movie/movie-list.html',
						controller: 'MovieListController',
						controllerAs: 'rlc'
					}
				}
			})
			.state('main.addMovie', {
				url: '/movie/add',
				views: {
					'content@': {
						resolve: {
							movie: newMovie 
						},
						templateUrl: 'app/components/movie/movie-add.html',
						controller: 'AddMovieController',
						controllerAs: 'arc'
					}
				}
			})
			.state('main.editFilm', {
				url: '/getMovie/:id',
				views: {
					'content@': {
						resolve: {
							movie: getMovie
						},
						templateUrl: 'app/components/movie/movie-edit.html',
						controller: 'AddMovieController',
						controllerAs: 'arc'
					}
				}
			})
            .state('main.rentedMovies', {
				url: '/rentedMovies',
				views: {
					'content@': {
						resolve: {
							movies: rentedMovies
						},
						templateUrl: 'app/components/movie/movie-rentedMovies.html',
						controller: 'RentedMovieController',
						controllerAs: 'rmc'
					}
				}
			});

		function getMovies(MovieService) {
			return MovieService.allMovies();
		}

		function createMovie(MovieService) {
			return MovieService.createMoviePost(movie);
		}
    
		function newMovie(MovieService) {
			return MovieService.createMovieGet();
		}
	
		function getMovie($stateParams, MovieService) {
			return MovieService.getMovie({id: $stateParams.id});
		}
        
        function rentedMovies(MovieService) {
			return MovieService.rentedMovies();
		}


	}
})();