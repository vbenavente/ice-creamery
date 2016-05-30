(function(module) {
  var iceCreamController = {}

  iceCreamController.create = function() {
    $('#ic-form').show();
    $('#ic-order').on('click', function() {
      var curIceCreamOrder = new IceCream ({
        scoops: $('#icscoops-filter').val(),
        flavorOne: $('#icflavorone-filter').val(),
        flavorTwo: $('#icflavortwo-filter').val(),
        vessel: $('#icvessel-filter').val()
      });
      console.log(curIceCreamOrder);
    });
  }

  module.iceCreamController = iceCreamController;
})(window);
