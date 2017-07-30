var portfolio = angular.module('portfolioapp',['ngRoute','contApp'])
portfolio.controller('navCtrl','$scope',function($scope){
	  	$scope.navItems = 	[			{ 			
	  									name			: "  Home",
	  									adress			: "/",
	  									dataToggle		: "tooltip",
	  									dataPlacement	: "bottom",
	  									icon			: "fa fa-home fa-lg",
	  									boolean			: "true",
	  									title			: "home"

	  									},

	  									{ 
	  									name			: "  Qualification",
	  									adress			: "qual",
	  									dataToggle		: "tooltip",
	  									dataPlacement	: "bottom",
	  									icon			: "fa fa-graduation-cap fa-lg",
	  									boolean			: "true",
	  									title			: "qualification"
										},
										{ 
	  									name			: "  About Me",
	  									adress			: "abt",
	  									dataToggle		: "tooltip",
	  									dataPlacement	: "bottom",
	  									icon			: "fa fa-address-book fa-lg",
	  									boolean			: "true",
	  									title			: "about"
										}
	  								];

	  								});

portfolio.config('ngRoute',function(routeProvider,$locationProvider) {
			routeProvider
				.when('/', {
					templateUrl : 'modules/home/home.html'
				})
				.when('/qual', {
					templateUrl : 'modules/qualification/index.html'
				})
				.when('/abt', {
					templateUrl : 'modules/about/index.html'
				})
				.when('/cont', {
					templateUrl : 'modules/contact/index.html',
					controller	: 'contactctrl'
				})
				.otherwise({
					redirectTo:'/'
				});
				$locationProvider.html5Mode(true);
		});
