(function(module) {
  var iceCreamController = {}

  iceCreamController.create = function() {
    $('#ic-order-container').show();
    $('#icflavorone-filter').hide();
    $('#icflavortwo-filter').hide();
    $('#icscoops-filter').on('change', function() {
      console.log($('#icscoops-filter').val());
      var scoops = ($('#icscoops-filter').val());
      if(scoops = 1) {
        $('#icflavorone-filter').show();
      }
      else if (scoops = 2) {
        $('#icflavorone-filter').show();
        $('#icflavortwo-filter').show();
      }
    })
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
