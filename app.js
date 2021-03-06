(function() {
	var app = angular.module('app', [ 'ui.router' ]);

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("#");

		$stateProvider
		.state('about', {
			url: "/about",
			templateUrl: "Partials/about.html"
		})
		.state('contact', {
			url: "/contact",
			templateUrl: "Partials/contact.html"
		})
		.state('gallery', {
			url: "/gallery",
			templateUrl: "Partials/gallery.html"
		})
		.state('support', {
			url: "/sponsors",
			templateUrl: "Partials/support.html"
		})
		.state('donate', {
			url: "/donate",
			templateUrl: "Partials/donate.html"
		})
		.state('mission', {
			url: "/mission",
			templateUrl: "Partials/mission.html" 
		})
		.state('exhibit', {
			url: "/exhibit",
			templateUrl: "Partials/exhibit.html" 
		})
		.state('home', {
			url: "/home",
			templateUrl: "Partials/home.html"
		})
	});
})();