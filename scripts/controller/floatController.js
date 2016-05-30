
(function(module) {
  var floatController = {};

  floatController.create = function() {
    $('#home-container').hide();
    $('#float-order-container').show();
    $('#fl-order').off().on('click', function() {
      var curFloatOrder = new Float ({
        scoops: $('#flscoops-filter').val(),
        flavorOne: $('#flflavorone-filter').val(),
        flavorTwo: $('#flflavortwo-filter').val(),
        flavorThree: $('#flflavorthree-filter').val(),
        flavorFour: $('#flflavorfour-filter').val(),
        flavorFive: $('#flflavorfive-filter').val(),
        soda: $('#soda-filter').val()
      });
      console.log('Float', curFloatOrder);
    });
    $('#fl-cancel').on('click', productController.index)
  };

  module.floatController = floatController;
})(window);
