app.controller("MainCtrl",['$scope', 'imageServices', function($scope, imageServices){

    $scope.seeResults = 

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
  };

  $scope.seeResults = function (){
    imageServices.compare(); 
  }
}]);
