var helloApp = angular.module("helloSample", ['ngResource']);
helloApp.controller("helloApp", function($scope, $resource){

	var employee = $resource("rest/employee/emp/7369");
	/* 1件だけ取得するメソッド */
	$scope.emp = employee.get();

});