var helloApp = angular.module("helloSample", ['ngResource']);
helloApp.controller("helloApp", function($scope, $resource){

	var employee = $resource("rest/employee/all");
	/* 複数 */
	$scope.list = employee.query();

});