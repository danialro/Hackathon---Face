app.controller("MainCtrl",['$scope', 'serviceCtrl', function($scope, serviceCtrl){

  // we get the beers from the array only after the getAll func returns the data from the server
  // serviceCtrl.allBeers.getAll().then(function(){

  //   $scope.allBeers = serviceCtrl.allBeers.beers;
  //   console.log('from the controller', $scope.allBeers);

  // });

  // $scope.addBeer = function() {

  //   var newBeer = {
  //     name: $scope.name,
  //     style: $scope.style,
  //     abv: $scope.abv,
  //     image_url: $scope.image,
  //     rate: $scope.rate
  //   };

  //   serviceCtrl.addBeer.create(newBeer)
    
  // };


  // $scope.removeBeer = function(beer){

  //   serviceCtrl.removeBeer.delete(beer);
  // };

}]);