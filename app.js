
var app = angular.module("calcApp", []);

app.controller("CalcController", function($scope) {

    $scope.calculate = function(operator) {

        var a = Number($scope.num1);
        var b = Number($scope.num2);

        if ($scope.num1 === undefined || $scope.num1 === null ||
            $scope.num2 === undefined || $scope.num2 === null ||
            $scope.num1 === "" || $scope.num2 === "") {
            $scope.result = "Enter both numbers";
        }
        else if (operator == '+') {
            $scope.result = a + b;
        }
        else if (operator == '-') {
            $scope.result = a - b;
        }
        else if (operator == '*') {
            $scope.result = a * b;
        }
        else if (operator == '/') {
            $scope.result = b == 0 ? "Cannot divide by zero" : a / b;
        }
    };

});
