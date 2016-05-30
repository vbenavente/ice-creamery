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
    var orderTableHeader = orderView.generateHeadingRow(['Order Date', 'Treat Type', 'Order Info']);
    orderTable.appendChild(orderTableHeader);
    for(var i = 0; i < Order.orders.length; i++) {
      var orderTreatRow = orderView.generateDataRow([Order.orders[i].date, Order.orders[i].type, (JSON.stringify(Order.orders[i].data))]);
      orderTable.appendChild(orderTreatRow);
    }
  }

module.orderView = orderView;
})(window);
