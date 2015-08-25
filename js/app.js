var app = angular.module('movieApp', ['ngRoute']);;app.controller('popularController', ['$scope', '$http', function($scope, $http) {
   $http.get('https://api.themoviedb.org/3/movie/popular?api_key=1fd95566952c08b6ecf132ae47c16a33').success(function(response) {
   	$scope.popularMovies = response.results;
   	console.log(response);
   });


}]);;;;app.controller('upcomingController', ['$scope', '$http', function($scope, $http) {
   $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=1fd95566952c08b6ecf132ae47c16a33').success(function(response) {
   	$scope.upcomingMovies = response.results;
   	console.log('Upcoming');
   	console.log(response);
   });

}]);;app.config(function($routeProvider){
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