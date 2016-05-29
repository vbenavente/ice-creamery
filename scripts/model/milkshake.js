(function(module) {

  function MilkShake (opts) {
    this.flavor = opts.flavor;
    this.richness = opts.richness;
    this.discount = 0.10;
    this.price = 3.00;
    this.total = this.price - this.discount
  };
  module.MilkShake = MilkShake;
})(window);
