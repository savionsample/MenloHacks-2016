var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope) {
    $scope.first = 1;
    $scope.second = 1;

    $scope.updateValue = function() {
        $scope.calculation = $scope.first + ' + '  + $scope.second + ' = ' +
        (+$scope.first + +$scope.second);
    };

});

var app2 = angular.module('app2', []);

app1.controller('ctrl1', function($scope) {
    $scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
    $scope.randomNum2 = Math.floor((Math.random() * 10) + 1);

});

app1.controller('badCtrl', function($scope) {
    var badFeelings = ["Disregarded", "Unimportant", "Rejected", "Powerless"];

    $scope.bad = badFeelings[Math.floor((Math.random() * 4))];

});


app1.controller('goodCtrl', function($scope) {
    var goodFeelings = ["Please", "Awesome", "Lovable", "Peace"];

    $scope.good = badFeelings[Math.floor((Math.random() * 4))];

});
