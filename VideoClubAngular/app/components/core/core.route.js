(function (){
	"use strict";

	angular
		.module('videoclub-collection.core')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvder) {
		$urlRouterProvder.otherwise('/home');

		$stateProvider
			.state('main', {
				abstract: true,
				views: {
					'navbar' : {
						templateUrl: 'app/components/core/navbar.html',
						controller: 'NavBarController',
						controllerAs: 'nbc'
					}
				}
			})
			.state('main.home', {
				url: '/home',
				views: {
					'content@' : {
						templateUrl: 'app/components/core/home.html'
					}
				}
			})
			.state('main.about', {
				url: '/about',
				views: {
					'content@' : {
						templateUrl: 'app/components/core/about.html'
					}
				}
			});
	}
})();