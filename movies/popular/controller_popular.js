app.controller('popularController', ['$scope', '$http', function($scope, $http) {
   $http.get('https://api.themoviedb.org/3/movie/popular?api_key=1fd95566952c08b6ecf132ae47c16a33').success(function(response) {
   	$scope.popularMovies = response.results;
   	console.log(response);
   });


}]);