(function(module) {
  var orderView = {};

  orderView.generateHeadingRow = function(inputArray){
    var row = document.createElement('tr');
    var col;
    for(var i = 0; i < inputArray.length; i++) {
      col = document.createElement('th');
      col.textContent = inputArray[i];
      row.appendChild(col);
    }
    return row;
  }

  orderView.generateDataRow = function(inputArray) {
    var row = document.createElement('tr');
    var col;
    for(var i = 0; i < inputArray.length; i++) {
      col = document.createElement('td');
      col.textContent = inputArray[i];
      row.appendChild(col);
    }
    return row;
  }

  orderView.makeTable = function(order) {
    var orderTable = document.getElementById("order-history-table");
    var orderTableHeader = orderView.generateHeadingRow(['Order Date', 'Treat Type', 'Price', 'Discount', 'Total', 'Scoops', 'Flavor One', 'Flavor Two', 'Flavor Three', 'Flavor Four', 'Flavor Five', 'Richness', 'Soda']);
    orderTable.appendChild(orderTableHeader);
    for(var i = 0; i < Order.orders.length; i++) {
      var orderTreatRow = orderView.generateDataRow([Order.orders[i].date.toDateString(), Order.orders[i].type, ('$'+ (JSON.stringify(Order.orders[i].data.price))), ('$' + (JSON.stringify(Order.orders[i].data.discount))), ('$' + (JSON.stringify(Order.orders[i].data.total))), (JSON.stringify(Order.orders[i].data.scoops)), (JSON.stringify(Order.orders[i].data.flavorOne)), (JSON.stringify(Order.orders[i].data.flavorTwo)), (JSON.stringify(Order.orders[i].data.flavorThree)), (JSON.stringify(Order.orders[i].data.flavorFour)), (JSON.stringify(Order.orders[i].data.flavorFive)), (JSON.stringify(Order.orders[i].data.richness)), (JSON.stringify(Order.orders[i].data.soda))]);
      orderTable.appendChild(orderTreatRow);
    }
  }

module.orderView = orderView;
})(window);
