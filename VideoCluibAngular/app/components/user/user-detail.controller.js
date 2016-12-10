(function() {
    "use strict";

    angular
        .module('videoclub-collection.user')
        .controller('UserDetailController', UserDetailController);

    function UserDetailController($location, user, UserService, $scope) {
        
        var udm = this;

        udm.detailModel = user.data;

        udm.UserDetails = udm.detailModel.UserDetails.Value;
        udm.OfferedMovies = udm.detailModel.OfferedMovies.Value;
        udm.RentedMovies = udm.detailModel.RentedMovies.Value;
        
        $scope.numberOfRentedMovies = udm.RentedMovies.length;

        $scope.WantedMovies = [];

        $scope.addMovieToWantedList = function(movie) {
            
            if ($scope.WantedMovies.length > 4) {
                bootbox.alert('You can rent only 4 movies at one time!');       
            }
            else if (inArray($scope.WantedMovies, movie)) {
                bootbox.alert("Already has that movie in list");
            }
            else {
                $scope.WantedMovies.push(movie);
            }
        };
        
        function inArray(myArray, myValue) {
            var inArray = false;
            myArray.map(function (key) {
                if (key.MovieID === myValue.MovieID) {
                    inArray = true;
                }
            });
            return inArray;
        };
        
        
        $scope.RentMovies = function (wantedMovies) {
            
            var validate = true;
            
            var daysToReturn = $("#whenToReturn").val();

            if (daysToReturn == "" || daysToReturn > 10 || daysToReturn < 1) {
                bootbox.alert("Days of return invalid (either less then 1 or higer then 10)");
                validate = false;
            }
            
            else if (wantedMovies < 1) {
                bootbox.alert("You didnt chose any movie");
                validate = false;
            }
            
            else if($scope.numberOfRentedMovies > 0 ){
                bootbox.alert("You need to return movies first");
                validate = false;
            }
            
            if (validate) {
                
                var data = {

                    UserID: udm.UserDetails.UserID,
                    WantedList: wantedMovies,
                    DaysWhenToReturn: daysToReturn
                }

                var dataForsend = JSON.stringify(data);
                
                console.log(data);

                UserService.rentMovies(dataForsend)
                    .success(function(res) {
                        bootbox.alert('Movies successfully rented!!');
                        $location.path('/users');
                    })
                    .error(function() {
                        bootbox.alert('Something went wrong!');
                    })
            }
        };
        
        
        $scope.returnMovies = function () {
          
            bootbox.confirm({
                size: "small",
                message: "Are you sure?",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-danger'
                    }
                },
                callback: function (result) {
                    if (result == true) {
                        
                        var userID = udm.UserDetails.UserID;     
                        
                        var dataForsend = JSON.stringify(userID);
                        
                        UserService.returnMoviesPost(dataForsend)
                        .success(function(res) {
                                bootbox.alert('Movies successfully returned!!');
                                $location.path('/users');
                        })
                        .error(function() {
                            bootbox.alert('Something went wrong!');
                        })
                        
                    }
                }
            });
            
        };
            
} // end of controller   
    
 
})();