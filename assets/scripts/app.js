(function(){

  var app = angular.module("githubViewer", ["ngRoute"]);

  app.config(function($routeProvider){
    $routeProvider
      .when("/main", {
        templateUrl: "/templates/main.html",
        controller: "MainController"
      })
      .when("/user/:username", {
        templateUrl: "/templates/user.html",
        controller: "UserController"
      })
      .when("/repo/:username/:reponame", {
        templateUrl: "/templates/repo.html",
        controller: "RepoController"
      })
      .otherwise({redirectTo:"/main"});
  });

}());
