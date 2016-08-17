app.controller("MainCtrl",['$scope', 'MainServices', function($scope, MainServices){

  // we get the beers from the array only after the getAll func returns the data from the server
  // serviceCtrl.allBeers.getAll().then(function(){

  //   $scope.allBeers = serviceCtrl.allBeers.beers;
  //   console.log('from the controller', $scope.allBeers);

  // });

  // $scope.addImage = function() {

  //   var newFemaleImage = {
  //     maleName: $scope.maleName,
  //     maleImage: $scope.maleImage,
      
  //   };
  // }

  //   serviceCtrl.addBeer.create(newBeer)
    
  // };


  // $scope.removeBeer = function(beer){

  //   serviceCtrl.removeBeer.delete(beer);
  // };

}]);