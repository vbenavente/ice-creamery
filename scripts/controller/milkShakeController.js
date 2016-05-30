(function(module) {
  var milkShakeView = {};


  milkShakeView.create = function() {
    $('#home-container').hide();
    $($('.container')[1]).show();
    $('#ms-order').off().on('click', function() {
      var curMilkShakeOrder = new MilkShake ({
        flavor: $('.js-milkshake-flavor').val(),
        richness: $('.richness-filter').val()
      });
      console.log(curMilkShakeOrder);
    });
    $('#ms-cancel').on('click', productController.index);
  }

  module.milkShakeView = milkShakeView;
})(window);
