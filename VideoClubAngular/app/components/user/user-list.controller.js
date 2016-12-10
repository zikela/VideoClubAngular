(function() {
	"use strict";

	angular
		.module('videoclub-collection.user')
		.controller('UserListController', UserListController);

	function UserListController($location,users, UserService) {
		var ulc = this;
		
		ulc.users = users.data; //users colection
    
		ulc.pagination = {
			currentPage: 1,
			pageSize: 5,
			pages: new Array(Math.ceil(ulc.users.length / 5)),
			changePage: function(page) {
				if(ulc.pagination.currentPage != page && page > 0 && page <= ulc.pagination.pages.length) {
					ulc.pagination.currentPage = page;
				}
			}
		};
        ulc.userDetails = function(id) {
            $location.path("/getUserDetails/" + id);
        };
        
        ulc.editUser = function(id) {
            
            $location.path("/editUser/"+id);
        }
	}
})();