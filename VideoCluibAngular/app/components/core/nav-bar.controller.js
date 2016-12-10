(function(){
	"use strict";

	angular
		.module('videoclub-collection.core')
		.controller('NavBarController', NavBarController);

	function NavBarController($location) {
		
		var nbc = this;
		nbc.isActive = function(path) {
			return $location.path().indexOf(path) != -1;
		};
	}
})();