angular.module('starter.controllers', [])

.controller('CalculatorCtrl', function($scope, CalculatorService) {

  //sueldoBruto, tieneConyuge, cantidadHijos, familiaresACargo
  $scope.sueldoBruto = 0;
  $scope.tieneConyuge =false ;
  $scope.cantidadHijos =0;
  $scope.familiaresACargo =0;
  $scope.sueldoNeto ='0.00';
  $scope.impustoPorGanancias ='0.00';
  $scope.descuentos ='0.00';
  $scope.descuentosTotales ='0.00';

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
  
  
function initAds() {
      if (admob) {
        var adPublisherIds = {
    //      ios : {
      //      banner : "ca-app-pub-XXXXXXXXXXXXXXXX/BBBBBBBBBB"
        //  },
          android : {
            banner : "ca-app-pub-9559909155606690/4831654369"
          }
        };

        var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;

        admob.setOptions({
          publisherId:      admobid.banner,          
          tappxShare:       0.5
        });

        registerAdEvents();

      } else {
        alert('AdMobAds plugin not ready');
      }
    }

    function onAdLoaded(e) {
      if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
        admob.showInterstitialAd();
        showNextInterstitial = setTimeout(function() {
          admob.requestInterstitialAd();
        }, 2 * 60 * 1000); // 2 minutes
      }
    }

    // optional, in case respond to events
    function registerAdEvents() {
      document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
      document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
      document.addEventListener(admob.events.onAdOpened, function (e) {});
      document.addEventListener(admob.events.onAdClosed, function (e) {});
      document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
      document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {});
    }

    function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      initAds();

      // display a banner at startup
      admob.createBannerView();

      // request an interstitial
      admob.requestInterstitialAd();
    }

    document.addEventListener("deviceready", onDeviceReady, false);

})



