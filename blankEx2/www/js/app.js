// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state('tabs',{
    url:'/tab',
    templateUrl:'templates/tabs.html'
  })
  .state('tabs.home',{
    url:'/home',
    views:{
      'tab-home':{
        templateUrl:'templates/home.html'
      }
    }
  })
  .state('tabs.first',{
    url:'/first',
    views:{
      'tab-first':{
        templateUrl:'templates/first.html'
      }
      
    }
    
  })
  .state('tabs.second',{
    url:'/second',
    views:{
      'tab-second':{
        templateUrl:'templates/second.html'
      }
      
    }
    
  })
  .state('tabs.about',{
    url:'/about',
    views:{
      'tab-about':{
        templateUrl:'templates/about.html'
      }
      
    }
    
  })
  .state('tabs.contact',{
    url:'/contact',
    views:{
      'tab-contact':{
        templateUrl:'templates/contact.html'
      }
      
    }
    
  })
  $urlRouterProvider.otherwise('/tab/home')


}])