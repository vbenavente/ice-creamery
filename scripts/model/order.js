(function(module) {

  Order.orders = [];

  function Order(opts) {
    this.type = opts.type;
    this.date = new Date();
    this.data = opts.data;
  }
  module.Order = Order;
})(window);
