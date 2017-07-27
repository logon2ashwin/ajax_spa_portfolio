	  angular.module('contApp',[])
	  .controller('contactctrl',['$scope',function($scope){
                $scope.onSubmit = function(user){
                 alert("Name: "+	user.firstName +" "+ user.lastName +"\nEmail:"+	user.mail+"\nMessage:"+	user.msg+"\n	Your Message Sent Sucessfully!!!");
                }
            }]);
