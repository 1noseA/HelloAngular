var helloApp = angular.module("helloSample", ['ngResource', 'ngRoute']);

helloApp.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/edit/:empno', {
			templateUrl : 'edit.html',
			controller : 'editController'
		})
		.when('/', {
			templateUrl : 'list.html',
			controller : 'listController'
		})
		.otherwise({ redirectTo : '/' });
});

helloApp
	.controller("listController", function($scope, $resource){

	var employee = $resource("rest/employee/all");
	/* 複数 */
	$scope.list = employee.query();

	})
	.controller('editController', function($scope, $resource, $routeParams) {
		var employee = $resource("rest/employee/emp/" + $routeParams.empno);
		$scope.target = employee.get();
	});