angular.module('starter.controllers', [])

.controller('CalculatorCtrl', function($scope, $location, CalculatorService, $cordovaSocialSharing, $ionicPopover, ionicMaterialInk) {

  //sueldoBruto, tieneConyuge, cantidadHijos, familiaresACargo
  $scope.sueldoBruto = 0;
  $scope.tieneConyuge =false ;
  $scope.cantidadHijos =0;
  $scope.familiaresACargo =0;
  $scope.sueldoNeto ='0.00';
  $scope.impustoPorGanancias ='0.00';
  $scope.descuentos ='0.00';
  $scope.descuentosTotales ='0.00';
    ionicMaterialInk.displayEffect();

    $ionicPopover.fromTemplateUrl('templates/menu.html', {
      scope: $scope,
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.irAStore = function(){
      window.open('market://details?id=com.ionicframework.calculadoraganancias360412', '_system');
    };
    $scope.shareAnywhere = function() {
      $cordovaSocialSharing.share("Calculadora de Ganancias", "Calculadora de Ganancias", null, "https://play.google.com/store/apps/details?id=com.ionicframework.calculadoraganancias360412");
    };
  $scope.calcular = function() {
     var resultados = CalculatorService.calcular($scope.sueldoBruto, $scope.tieneConyuge, $scope.cantidadHijos, $scope.familiaresACargo);
     $scope.sueldoNeto = redondeo(resultados.sueldoEnMano,2);
     $scope.impustoPorGanancias = redondeo(resultados.impuestoMensual,2);
     $scope.descuentos = redondeo(resultados.descuentosComunes,2);
     $scope.descuentosTotales =redondeo(resultados.descuentosComunes+resultados.impuestoMensual,2);
  };
  $scope.modificarCantidadHijos = function (valor) {
	$scope.cantidadHijos += valor;
	if ($scope.cantidadHijos < 0) {
		$scope.cantidadHijos = 0;

	}
	$scope.calcular();

  };
  $scope.modificarFamiliaresACargo = function (valor) {
	$scope.familiaresACargo += valor;
	if ($scope.familiaresACargo < 0) {
		$scope.familiaresACargo = 0;
	}
	$scope.calcular();

  };


  function redondeo(numero, decimales)
  {
    var flotante = parseFloat(numero);
    var resultado = Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales);
    return resultado;
  }

})



