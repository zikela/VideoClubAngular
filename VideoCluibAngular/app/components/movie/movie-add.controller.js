(function() {
    "use strict";

    angular
        .module('videoclub-collection.movie')
        .controller('AddMovieController', AddMovieController);

    function AddMovieController($location, movie, MovieService) {
        var arc = this;
        
        arc.movie = movie;
        
        arc.editModel = movie.data.Value;
        
        arc.AddMovie = function() {
            
            var dataForsend = JSON.stringify(arc.movie);

            MovieService.createMoviePost(dataForsend)
                .success(function(res) {
                    bootbox.alert('Movie successfully added!');
                    $location.path('/movies');
                })
                .error(function() {
                    bootbox.alert('Something went wrong!');                
                })
        };
        
        arc.UpdateMovie = function() {

            var dataForsend = JSON.stringify(arc.editModel);

            MovieService.updateUser(dataForsend)
                .success(function(res) {
                    bootbox.alert('Movie successfully updated!');
                    $location.path('/users');
                })
                .error(function() {
                    bootbox.alert('Something went wrong!');
                })
        }
        
        
        
    }
})();