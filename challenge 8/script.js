/*
const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

    La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.
    
    index of buy > sold;
*/
const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
const pricesEth = [10, 20, 30, 40, 50, 60, 70];

function buySold(prices) {
  //Declarates variables
  let priceBuy = [];

  let buy = [];
  let sold = [];

  //Search for the best price
  for (i = 0; i < prices.length - 1; i++) {
    priceBuy.push(prices[i]);
  }
  console.log();

  prices.forEach((value, index) => {
    let contador;
    if (value === Math.min(...priceBuy)) {
      buy = value;
      contador = index;
      prices.splice(0, contador);
    }

    prices.forEach((value2, index2) => {
      if (value2 === Math.max(...prices) && contador < index2) {
        sold = value2;
      }
    });
  });

  console.log("Buy: " + buy + " Sold: " + sold);
  return sold - buy;
}

buySold(pricesBtc);
buySold(pricesEth);
