var helloApp = angular.module("helloSample", ['ngResource']);
helloApp.controller("helloApp", function($scope, $resource){

	$scope.clickSearchBtn = function() {

		var employee = $resource(
			"rest/employee/emp/:empno",
			{ empno : $scope.empno }
		);
		/* 1件だけ取得するメソッド */
		$scope.emp = employee.get();

	}

});