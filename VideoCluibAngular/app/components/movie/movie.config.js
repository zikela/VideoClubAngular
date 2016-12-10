(function(){
	"use strict";

	angular
		.module('videoclub-collection.movie')
		.run(run);

	run.$inject = ['$rootScope', '$window'];
	function run($rootScope, $window) {
//		$rootScope.$on('$stateChangeError', errorFunction);
//
//		function errorFunction(event, toState, toParams, fromState, fromParams) {
//			
//			var error = "An error has occured!\n";
//			//+= je kao da smo napisali error = error + string
//			if(toState.name == "main.filmEdit") {
//				error += "The film with the id " + toParams.id + " doesn't exist!";
//			}
//			$window.alert(error);
		}
//	}
})();