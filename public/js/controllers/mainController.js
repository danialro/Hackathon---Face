app.controller("MainCtrl",['$scope', 'imageServices', function($scope, imageServices){

  // we get the beers from the array only after the getAll func returns the data from the server
  // serviceCtrl.allBeers.getAll().then(function(){

  //   $scope.allBeers = serviceCtrl.allBeers.beers;
  //   console.log('from the controller', $scope.allBeers);

  // // });
  // $scope.imageServices = mainServices.imageServices.maleImages;

  // $scope.addMaleImage = function() {

  //   var newMaleImage = {
  //     maleName: $scope.maleName,
  //     maleImage: $scope.maleImage,
  //   };

  //   mainServices.addMaleImage(newMaleImage);
  // };

  //   serviceCtrl.addBeer.create(newBeer)
    
  // };


  // $scope.removeBeer = function(beer){

  //   serviceCtrl.removeBeer.delete(beer);
  // };

}]);