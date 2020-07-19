var app = angular.module("app.signup",[]);
var convertToUrlEncoded = function(obj) {
        var str = [];
        for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    };
app.controller("SignupCtrl",function($http,$scope){
    this.registerUser = function(){
        console.log({username: $scope.user.email, password: $scope.user.password, dob:new Date($scope.user.dob),
            gender:$scope.user.gender, name:$scope.user.name});
        $http({
            method: 'POST',
            url: '/api/users',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: convertToUrlEncoded,
            data: {username: $scope.user.email, password: $scope.user.password, dob:new Date($scope.user.dob),
                gender:$scope.user.gender, name:$scope.user.name}
        }).success(function (data) {
            console.log(data);
            if(data.message === 'new beer drinker added to the locker room')
                $scope.data={message:"Great! You signed up successfully. Please login to continue"};
            else if (data.message.indexOf('duplicate key error') != -1)
                $scope.data={message:"A user is already registered with this name! Please try a different username."};
            else
                $scope.data={message:"Some error occured, please email us at letsopenupnow@gmail.com mentioning that you are facing problem in signup."};
        })
    };
});

