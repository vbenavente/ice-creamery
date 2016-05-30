
(function(module) {
  var floatController = {};

  floatController.create = function() {
    $('#home-container').hide();
    $($('.container')[2]).show();
    $('.js-float-flavor').hide();
    $('.float-scoops-filter').off().on('change', function() {
      console.log($('.float-scoops-filter').val());
      var scoops = ($('.float-scoops-filter').val());
      if(scoops == 1) {
        $($('.js-float-flavor')[1]).hide();
        $($('.js-float-flavor')[2]).hide();
        $($('.js-float-flavor')[3]).hide();
        $($('.js-float-flavor')[4]).hide();
        $($('.js-float-flavor')[0]).show();
      }
      if(scoops == 2) {
        $($('.js-float-flavor')[2]).hide();
        $($('.js-float-flavor')[3]).hide();
        $($('.js-float-flavor')[4]).hide();
        $($('.js-float-flavor')[0]).show();
        $($('.js-float-flavor')[1]).show();
      }
      if(scoops == 3) {
        $($('.js-float-flavor')[3]).hide();
        $($('.js-float-flavor')[4]).hide();
        $($('.js-float-flavor')[0]).show();
        $($('.js-float-flavor')[1]).show();
        $($('.js-float-flavor')[2]).show();
      }
      if(scoops == 4) {
        $($('.js-float-flavor')[4]).hide();
        $($('.js-float-flavor')[0]).show();
        $($('.js-float-flavor')[1]).show();
        $($('.js-float-flavor')[2]).show();
        $($('.js-float-flavor')[3]).show();
      }
      if(scoops == 5) {
        $($('.js-float-flavor')[0]).show();
        $($('.js-float-flavor')[1]).show();
        $($('.js-float-flavor')[2]).show();
        $($('.js-float-flavor')[3]).show();
        $($('.js-float-flavor')[4]).show();
      }
    })
    $('#fl-order').off().on('click', function() {
      var curFloatOrder = new Float ({
        scoops: $('.float-scoops-filter').val(),
        flavorOne: $($('.js-float-flavor')[0]).val(),
        flavorTwo: $($('.js-float-flavor')[1]).val(),
        flavorThree: $($('.js-float-flavor')[2]).val(),
        flavorFour: $($('.js-float-flavor')[3]).val(),
        flavorFive: $($('.js-float-flavor')[4]).val(),
        soda: $('.soda-filter').val()
      });
      console.log('Float', curFloatOrder);
      var orderHistory = new Order ({
        type: "float",
        data: curFloatOrder
      });
      Order.orders.push(orderHistory);
    });
    $('#fl-cancel').on('click', productController.index);
  };

  module.floatController = floatController;
})(window);
