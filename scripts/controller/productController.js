(function(module) {
  var productController = {}

  productController.index = function(ctx, next) {
    $('#ic-button').on('click', iceCreamController.create);

    $('#ms-button').on('click', milkShakeView.create);

    $('#fl-button').on('click', function() {
      var product = 'float';
      console.log(product);
    });
    // next();
  };


  module.productController = productController;
})(window);
