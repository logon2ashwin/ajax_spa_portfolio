	  var contApp = angular.module('contApp',[]);



	  
	  contApp.controller('contact',['$scope',function($scope){
                $scope.onSubmit = function(user){
                 alert("Name: "+	user.firstName +" "+ user.lastName +"\nEmail:"+	user.mail+"\nMessage:"+	user.msg+"\n	Your Message Sent Sucessfully!!!");
                }
            }]);
