(function(module) {
  var milkShakeView = {};


  milkShakeView.create = function() {
    $('#home-container').hide();
    $('#milkshake-order-container').show();
    $('#ms-order').on('click', function() {
      var curMilkShakeOrder = new MilkShake ({
        flavor: $('#msflavor-filter').val(),
        richness: $('#richness-filter').val()
      });
      console.log(curMilkShakeOrder);
    });
  }

  module.milkShakeView = milkShakeView;
})(window);
