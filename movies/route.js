app.config(function($routeProvider){
	$routeProvider
		.when('/popular', 
		{
			templateUrl: 'partials/popular.html',
			controller: 'popularController'
		})
		.when('/upcoming', 
		{
			templateUrl: 'partials/upcoming.html',
			controller: 'upcomingController'
		})
		.otherwise( 
		{
			templateUrl: 'partials/error.html',
		})
});