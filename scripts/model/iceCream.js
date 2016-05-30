(function(module) {
  function IceCream(opts) {
    this.scoops = opts.scoops;
    this.flavorOne = opts.flavorOne;
    this.flavorTwo = opts.flavorTwo;
    this.vessel = opts.vessel;
    this.price = opts.scoops * 1.5
  };
  module.IceCream = IceCream;
})(window);
