(function(module) {
  var iceCreamController = {};

  iceCreamController.create = function() {
    $('#home-container').hide();
    $('#icecream-order-container').show();
    // $('#icflavorone-filter').hide();
    // $('#icflavortwo-filter').hide();
    // $('#icscoops-filter').on('change', function() {
    //   var scoops = ($('#icscoops-filter').val());
    //   if(scoops = 1) {
    //     $('#icflavorone-filter').show();
    //   } else {
    //     $('#icflavorone-filter').show();
    //     $('#icflavortwo-filter').show();
    //   }
    // })
    $('#ic-order').off().on('click', function() {
      var curIceCreamOrder = new IceCream ({
        scoops: $('#icscoops-filter').val(),
        flavorOne: $('#icflavorone-filter').val(),
        flavorTwo: $('#icflavortwo-filter').val(),
        vessel: $('#icvessel-filter').val()
      });
      console.log(curIceCreamOrder);
    });
    $('#ic-cancel').on('click', productController.index);
  };

  module.iceCreamController = iceCreamController;
})(window);
