angular.module('starter.controllers', [])

.controller('CalculatorCtrl', function($scope, CalculatorService) {

  //sueldoBruto, tieneConyuge, cantidadHijos, familiaresACargo
  $scope.sueldoBruto = "";
  $scope.tieneConyuge ="" ;
  $scope.cantidadHijos ="";
  $scope.familiaresACargo ="";
  $scope.sueldoNeto ="";
  $scope.impustoPorGanancias ="";
  $scope.descuentos ="";
  $scope.descuentosTotales ="";

  $scope.calcular = function() {
     var resultados = CalculatorService.calcular($scope.sueldoBruto, $scope.tieneConyuge, $scope.cantidadHijos, $scope.familiaresACargo);
     $scope.sueldoNeto = resultados.sueldoEnMano;
     $scope.impustoPorGanancias = resultados.impuestoMensual;
     $scope.descuentos = resultados.descuentosComunes;
     $scope.descuentosTotales =resultados.descuentosComunes+resultados.impuestoMensual;
  };
})


