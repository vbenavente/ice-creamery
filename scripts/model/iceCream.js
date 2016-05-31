(function(module) {
  function IceCream(opts) {
    this.scoops = opts.scoops;
    this.flavorOne = opts.flavorOne;
    this.flavorTwo = opts.flavorTwo;
    this.vessel = opts.vessel;
    this.discount = 0.00
    this.price = opts.scoops * 1.5;
    this.total = this.price;
  };
  module.IceCream = IceCream;
})(window);
