(function(module) {
  var productController = {}

  productController.index = function(ctx, next) {
    $('#ic-button').on('click', function() {
      var product = 'ice cream';
      console.log(product);
    });

    $('#ms-button').on('click', function() {
      var product = 'milkshake';
      console.log(product);
    });

    $('#fl-button').on('click', function() {
      var product = 'float';
      console.log(product);
    });
    // next();
  };


  module.productController = productController;
})(window);
