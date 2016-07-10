(function() {

  var app = angular.module("githubViewer");

  var MainController = function($scope, $interval, $location, $window) {

    // var decrementCountdown = function(){
    //   $scope.countdown -= 1;
    //   if ($scope.countdown < 1){
    //     $scope.search($scope.username);
    //   }
    // };

    // var countdownInterval = null;
    // var startCountdown = function(){
    //   countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    // };

    $scope.search = function(username) {
      // if(countdownInterval) {
      //   $interval.cancel(countdownInterval);
      //   $scope.countdown = null;
      // }
      $location.path("/user/" + username);
    };

    $scope.username = "angular";
    $scope.countdown = 10;
    //startCountdown();

    // Clear and focus search input
    $scope.clearSearch = function(){
      $scope.username = null;
      var element = $window.document.getElementById("searchBox");
      element.focus();
    }

  };

  app.controller("MainController", MainController);

}());
