for (let item of document.querySelectorAll(".list-item")){
  if (item.className == "item" || item.className.includes("list-item")){
    try{
      var priceElement = item.getElementsByClassName("price-m")[0].getElementsByClassName("value")[0];
      if (item.getElementsByClassName("free-s").length == 0){
        var shippingCostElement = item.getElementsByClassName("pnl-shipping")[0].getElementsByClassName("value")[0];
        var shippingCost = parseFloat(shippingCostElement.innerHTML.substr(2).replace(',','.'));
        var priceStrings = priceElement.innerHTML.substr(2).split(' - ');
        priceStrings = priceStrings.map(function (x){
          return (parseFloat(x.replace(',','.')) + shippingCost).toFixed(2).toString();
        })
        shippingCostElement.innerHTML = "";
        priceElement.innerHTML = priceElement.innerHTML.substr(0,2) + priceStrings.join(' - ')
      }
    }catch(error) {
      console.log(error)
    }
  }
}
