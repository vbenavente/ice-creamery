(function(module) {
  var productController = {}

  productController.index = function() {
    $('#home-container').show();
    $('.container').hide();
    $($('.button')[0]).on('click', iceCreamController.create);

    $($('.button')[1]).on('click', milkShakeView.create);

    $($('.button')[2]).on('click', floatController.create);
  };


  module.productController = productController;
})(window);
