(function(module) {
  var productController = {}

  productController.index = function() {
    $('#ic-button').on('click', iceCreamController.create);

    $('#ms-button').on('click', milkShakeView.create);

    $('#fl-button').on('click', floatController.create);
  };


  module.productController = productController;
})(window);
