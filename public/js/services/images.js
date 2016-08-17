app.service('imageServices', ['$http', function ($http) {

var request = new XMLHttpRequest();
var momConfidence;


//verifyService is where we "store" image data

  var verifyService = {

    childDetails: [],
    momDetails:[],
    dadDetails:[]
  };


// child function
verifyService.addChildImage= function (newChildDetails){

//insert child to gallery

    request.open('POST', 'https://api.kairos.com/enroll');

    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('app_id', '13c988b5');
    request.setRequestHeader('app_key', 'e5a67cf16b08e3b32f3e26b7437ff8ec');

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
        var response = this.responseText;

      }
    };
    //body is the child object from controller>>view
    var bodyChild = newChildDetails; 

    request.send(JSON.stringify(bodyChild));


//compare mom
verifyService.addFemaleImage = function(newMomImage) {


    request.open('POST', 'https://api.kairos.com/verify');

    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('app_id', '13c988b5');
    request.setRequestHeader('app_key', 'e5a67cf16b08e3b32f3e26b7437ff8ec');

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);


      }
    };
    var bodyMom = newMomImage;

    request.send(JSON.stringify(bodyMom));
}

    //compare dad

  verifyService.addMaleImage = function(newDadImage) {


  request.open('POST', 'https://api.kairos.com/verify');

      request.setRequestHeader('Content-Type', 'application/json');
      request.setRequestHeader('app_id', '13c988b5');
      request.setRequestHeader('app_key', 'e5a67cf16b08e3b32f3e26b7437ff8ec');

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          console.log('Status:', this.status);
          console.log('Headers:', this.getAllResponseHeaders());
          console.log('Body:', this.responseText);
        }
      };

      var bodyDad = newDadImage;

      request.send(JSON.stringify(bodyDad));  


    }


}

  return verifyService; 

}]);


























  /*var parentsSubject_id ; 
  var parentsGallery_name ;


//add child to gallery function

verifyService.addChildImage = function(newChildDetails) {
  //now we add to the gallery through the api, first authentication
  var child = new Kairos("13c988b5", "e5a67cf16b08e3b32f3e26b7437ff8ec");
  debugger;
  child.enroll(newChildDetails)
  .then(function(response) {
    console.log(response);
//insert data into childDetails array and save Subject id and Gallery id to use later for mom and dad
    angular.copy(response, verifyService.childDetails); 
     parentsSubject_id = response.images[0].subject_id;
     parentsGallery_name = response.images[0].gallery_name;
  })
  // err -> array: jsonschema validate errors 
  //        or throw Error 
  .catch(function(err) {error});

}
//add mom function and compare to child*/

/*  verifyService.addFemaleImage = function(newMomImage, parentsSubject_id, parentsGallery_name){

    var mom = new Kairos("13c988b5", "e5a67cf16b08e3b32f3e26b7437ff8ec");


  }*/


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