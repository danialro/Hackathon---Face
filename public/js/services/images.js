app.service('imageServices', ['$http', function ($http) {

var request = new XMLHttpRequest();
var momConfidence = 0;
var dadConfidence = 0;


//verifyService is where we "store" image data

  var verifyService = {

    compareResults: [],
    percentResult: []

  };

//compare between mom result to dad
verifyService.compare =  function() {
  console.log(momConfidence);
  console.log(dadConfidence);
    if (momConfidence > dadConfidence) {

      var momWins = 1;
      verifyService.compareResults.push(momWins);
      verifyService.percentResult.push(momConfidence);

    } else {

      var dadWins = 2;
      verifyService.compareResults.push(dadWins);
      verifyService.percentResult.push(dadConfidence);
    }
}

// child function
verifyService.addChildImage = function (newChildDetails){

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
      }
    };
    //body is the child object from controller>>view
    var bodyChild = newChildDetails; 

    request.send(JSON.stringify(bodyChild));
}

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

        var responseObject = JSON.parse(this.response);
        momConfidence += responseObject.images[0].transaction.confidence;
        console.log("this is mom's confidence", momConfidence);
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

        var responseObject = JSON.parse(this.response);
        dadConfidence += responseObject.images[0].transaction.confidence;
        console.log("this is dad's confidence", dadConfidence);
        }
      };

      var bodyDad = newDadImage;

      request.send(JSON.stringify(bodyDad));
      // compare();
  }



  verifyService.getWinner = function() {

    return verifyService.compareResults;
  }

  

  verifyService.getResults = function() {

    return verifyService.percentResult;
  }
 
  return verifyService; 

}]);























