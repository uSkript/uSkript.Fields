function uSkriptString($scope,assetsService,$timeout){
	assetsService.load([]).then(function(){
		$timeout(function(){
			const readOnly		= $scope.model.config.readOnly === '1' ? true : false;
			$scope.model.value	= $scope.model.config.uskriptStringValue;
			$scope.readOnly		= readOnly
		})
	})
}
angular.module("umbraco").controller("uSkriptString",uSkriptString);