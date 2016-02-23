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
     $scope.sueldoNeto = redondeo(resultados.sueldoEnMano,2);
     $scope.impustoPorGanancias = redondeo(resultados.impuestoMensual,2);
     $scope.descuentos = redondeo(resultados.descuentosComunes,2);
     $scope.descuentosTotales =redondeo(resultados.descuentosComunes+resultados.impuestoMensual,2);
  };

  function redondeo(numero, decimales)
  {
    var flotante = parseFloat(numero);
    var resultado = Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales);
    return resultado;
  }
})


