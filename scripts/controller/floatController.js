
(function(module) {
  var floatController = {};

  floatController.create = function() {
    $('#fl-order-container').show();
    $('#fl-order').on('click', function() {
      var curFloatOrder = new Float ({
        scoops: $('#flscoops-filter').val(),
        flavorOne: $('#flflavorone-filter').val(),
        flavorTwo: $('#flflavortwo-filter').val(),
        flavorThree: $('#flflavorthree-filter').val(),
        flavorFour: $('#flflavorfour-filter').val(),
        flavorFive: $('#flflavorfive-filter').val(),
        soda: $('soda-filter').val()
      });
      console.log('Float', curFloatOrder);
    });
  }

  module.floatController = floatController;
})(window);
