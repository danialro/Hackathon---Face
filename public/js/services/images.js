app.service('MainServices', ['$http', function ($http) {

  // var beerService = {

  //   beers: [],

  // };


  // beerService.getAll = function () {

  //   return $http.get('/beers').success(function (data) {
  //     console.log('this is data from the service', data);
  //     // this copies the response posts to the client side
  //     // 'beers' under 'beerService'
  //     angular.copy(data, beerService.beers);
  //   });
  // };


  // beerService.create = function (newBeer) {
    
  //   $http.post('/beers', newBeer).success(function (data) {
  //   console.log('this is the new beer', newBeer);
  //   beerService.getAll();
    
  //   });
  // };


  // beerService.delete = function (beer) {
    
  //   $http.delete('/beers/' + beer._id + '/beer', beer).then(function(){

  //     console.log('this is the delete func');
  //     beerService.getAll();

  //   });

  // };

  // return {

  //   allBeers: beerService,
  //   addBeer: beerService,
  //   removeBeer: beerService
  // };

}]);