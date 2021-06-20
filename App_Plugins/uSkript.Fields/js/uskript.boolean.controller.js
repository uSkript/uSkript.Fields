function uSkriptBoolean($scope,assetsService,$timeout){
	assetsService.load([]).then(function(){
		$timeout(function(){
			const boolChecked	= $scope.model.config.booleanChecked === '1' ? 'checked' : false;
			$scope.boolChecked	= boolChecked
		})
	})
}
angular.module("umbraco").controller("uSkriptBoolean",uSkriptBoolean);