
	var myApp = angular.module('myApp', ['ngRoute','contApp']);
	myApp.config(function($routeProvider,$locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'views/home/home.html'
			})
			.when('/qual', {
				templateUrl : 'modules/qualification/qualification.html'
			})
			.when('/abt', {
				templateUrl : 'modules/about/about.html'
			})
			.when('/cont', {
				templateUrl : 'modules/contact/contact.html',
				controller	: 'contact'
			})
			.otherwise({
				redirectTo:'/'
			});
			$locationProvider.html5Mode(true);
	});

	  myApp.controller('navCtrl',['$scope',function($scope){
	  	$scope.navItems = 	[{ 			
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
	  								}]);


/*		myApp.controller('color',['$scope',function($scope){
	  			$scope.changeCol = ['#3b5998','#0084b4','#e95950'];
	  					}]);
*/
