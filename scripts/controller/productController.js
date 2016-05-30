(function(module) {
  var productController = {}

  productController.index = function() {
    $('#home-container').show();
    $('.container').hide();
    $('#ic-button').on('click', iceCreamController.create);

    $('#ms-button').on('click', milkShakeView.create);

    $('#fl-button').on('click', floatController.create);
  };


  module.productController = productController;
})(window);
