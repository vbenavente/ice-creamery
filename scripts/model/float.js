(function(module) {
  function Float(opts) {
    this.scoops = opts.scoops;
    this.flavorOne = opts.flavorOne;
    this.flavorTwo = opts.flavorTwo;
    this.flavorThree = opts.flavorThree;
    this.flavorFour = opts.flavorFour;
    this.flavorFive = opts.flavorFive;
    this.soda = opts.soda;
    this.discount = 0.10;
    this.price = opts.scoops * 1.5;
    this.total = this.price - this.discount;
  };
  module.Float = Float;
})(window);
