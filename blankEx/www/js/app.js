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
.controller('ctrl',function($scope,$ionicActionSheet,$timeout,$ionicLoading,$ionicPopup){
  $scope.data=[1,2];
  $scope.doRefresh=function(){
    $timeout(function(){
      $scope.$broadcast('scroll.refreshComplete');
      $scope.data=[11,22]
    },1000)
  }

  $scope.show=function(){
    $ionicActionSheet.show({
      buttons:[
      {'text':'关闭开发者模式'},
      {'text':'别点我'}
      ],
      titleText:'相关设置',
      cancelText:'取消',
      cancel:function(){
      // hideSheet()
      console.log('取消了')
      },
      buttonClicked: function(index) {
        console.log(index)
        if(index == 0){
          console.log('点击了第一个')
        }else if(index == 1){
          console.log('点击了第二个')
        }
        return true;
      }
    })
  }

  $scope.onhold=function(){
    console.log('长按')
  }
  $scope.ondouble=function(){
    console.log('双击')
  }
  $scope.load=function(){
    $ionicLoading.show()
    template:'<ion-spinner icon="dots" class="spinner-dark"></ion-spinner>'

    $timeout(function(){
      $ionicLoading.hide()
    },2000)
  }


  $scope.tap1=function(){
    $ionicPopup.show({
      template:'<input type="text" />',
      title:'请输入密码',
      subTitle:'一定要输入密码',
      buttons:[
        {text:'取消'},
        {text:'确定',type:'button-calm',onTap:function(){
          console.log('确认了')
        }}
      ]

    })
  }

  $scope.tap2=function(){
    $ionicPopup.confirm({
      title:'确认框',
      template:'你要给我一百万吗'
    }).then(function(res){
      if (res) {
        alert('谢谢')
      }else{
        alert('你反悔了')
      };
    })
  }

  $scope.tap3=function(){
    $ionicPopup.alert({
      title:'警告',
      template:'此物有毒，请远离'
    }).then(function(){
      alert('知道了')
    })
  }




});