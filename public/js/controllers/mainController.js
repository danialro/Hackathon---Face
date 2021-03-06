app.controller("MainCtrl",['$scope', 'imageServices', function($scope, imageServices){


//connect child image from services to view

  $scope.addChildImage = function() {
    var newChildDetails = {
      image: $scope.childImage,
      subject_id: $scope.childName,
      gallery_name: $scope.childName + 1
    }

    imageServices.addChildImage(newChildDetails);
  }

// female image function
  $scope.addFemaleImage = function() {

    var newMomImage = {

      image: $scope.femaleImage,
      subject_id: $scope.childName,
      gallery_name: $scope.childName + 1
    }
    
    imageServices.addFemaleImage(newMomImage);
  };

//male image function
  $scope.addMaleImage = function() {

    var newDadImage = {

      image: $scope.maleImage,
      subject_id: $scope.childName,
      gallery_name: $scope.childName + 1
    }

    imageServices.addMaleImage(newDadImage);
    swal({
      title: "Click on Who's Your Daddy for results!" ,
      timer: 3000
    })
  };

//compare and show results function
  $scope.seeResults = function() {

    imageServices.compare();

    var child = $scope.childName;
    var winner = imageServices.getWinner();
    var percent = imageServices.getResults();

    if (winner == 1) {

      winner = $scope.femaleName;
      console.log("mom", winner);

    } else {

      winner = $scope.maleName;
    }

      swal('Congratulations!', child + " looks more like " + winner +"! " + Math.floor(percent * 100) +"%");
  }

}]);








