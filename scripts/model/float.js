(function(module) {
  function Float(opts) {
    this.scoops = opts.scoops;
    this.flavorOne = opts.flavorOne;
    this.flavorTwo = opts.flavorTwo;
    this.flavorThree = opts.flavorThree;
    this.flavorFour = opts.flavorFour;
    this.flavorFive = opts.flavorFive;
    this.soad = opts.soda;
    this.discount = 0.10;
    this.price = opts.scoops * 1.5
  };
  module.Float = Float;
})(window);
