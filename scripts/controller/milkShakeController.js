(function(module) {
  var milkShakeView = {};


  milkShakeView.create = function() {
    $('#home-container').hide();
    $($('.container')[1]).show();
    $('#ms-order').off().on('click', orderView.makeTable, function() {
      var curMilkShakeOrder = new MilkShake ({
        flavor: $('.js-milkshake-flavor').val(),
        richness: $('.richness-filter').val()
      });
      console.log(curMilkShakeOrder);
      var orderHistory = new Order ({
        type: "milk shake",
        data: curMilkShakeOrder
      });
      Order.orders.push(orderHistory);
      orderView.makeTable(Order.orders);
    });
    $('#ms-cancel').on('click', productController.index);
  }

  module.milkShakeView = milkShakeView;
})(window);
