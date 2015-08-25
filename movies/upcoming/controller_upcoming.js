app.controller('upcomingController', ['$scope', '$http', function($scope, $http) {
   $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=1fd95566952c08b6ecf132ae47c16a33').success(function(response) {
   	$scope.upcomingMovies = response.results;
   	console.log('Upcoming');
   	console.log(response);
   });

}]);