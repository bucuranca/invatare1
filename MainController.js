// Code goes here
(function() {
  var app = angular.module("githubViewer");


  var MainController = function($scope, $interval, $log, $anchorScroll, $location) {

/*    
    var onUserComplete = function(data){
      $scope.user=data;
      github.getRepos($scope.user).then(onRepos, onError);
    };
    
    var onRepos = function (data){
      $scope.repos=data;
      $location.hash("userDetails");
      $anchorScroll();
    };    
    
    var onError = function(reason){
      $scope.error = "Data not found";
    };
  */
  
    var decrementCountdown = function(){
      $scope.countdown -=1;
      if($scope.countdown<1){
        $scope.search($scope.username);
      }
    };
    
    var countdownInterval=null;
    var startCountdown = function(){
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown)
    };
    
    $scope.search = function(username){
     // $log.info("Searching for "+username);
     // github.getUser(username).then( onUserComplete , onError);
     // $http.get("https://api.github.com/users/"+username)
        if(countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
 $location.path("/user/"+username);
    };
    
    $scope.message = "Hello Angular in to myApp";
    $scope.username = "robconery";
    $scope.countdown = 5;
    startCountdown();
  };
  
  app.controller("MainController", MainController);
}());