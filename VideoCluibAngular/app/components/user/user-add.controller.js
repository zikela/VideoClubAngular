(function() {
    "use strict";

    angular
        .module('videoclub-collection.user')
        .controller('UserAddController', UserAddController);

    function UserAddController($location, user, UserService) {
        var uac = this;

        uac.createModel = user.data;
        
        uac.editModel = user.data.Value;
        
        uac.editModel.Mobile = parseInt(uac.editModel.Mobile);
        uac.editModel.StreetNumber = parseInt(uac.editModel.StreetNumber);

        uac.AddUser = function() {

            var dataForsend = JSON.stringify(uac.createModel);

            console.log(uac.user);

            UserService.createUserPost(dataForsend)
                .success(function(res) {
                    bootbox.alert('User successfully added!');
                    $location.path('/users');
                })
                .error(function() {
                    bootbox.alert('Something went wrong!');
                })
        }
        
         uac.UpdateUser = function() {

            var dataForsend = JSON.stringify(uac.editModel);

            UserService.updateUser(dataForsend)
                .success(function(res) {
                    bootbox.alert('User successfully updated!');
                    $location.path('/users');
                })
                .error(function() {
                    bootbox.alert('Something went wrong!');
                })
        }
        
        
        

    }

})();