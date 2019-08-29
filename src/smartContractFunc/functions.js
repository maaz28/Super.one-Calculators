
import tokenSaleController from '../interface/tokenSaleController';
import tokenController from '../interface/tokenController';

export const calculateTokenPriceInDollars = async (amount)  => {
  let totalSupply = parseInt(await tokenController.methods.totalSupply().call());
  let totalAmountInDollar = 0;
  for (let i = 0; i < amount; i++) {
    if ((totalSupply + i) <= 1000) {
      totalAmountInDollar += 1000;
    }
    else if ((totalSupply + i) <= 2000) {
      totalAmountInDollar += 1500;
    }
    else if ((totalSupply + i) <= 3000) {
      totalAmountInDollar += 2000;
    }
    else if ((totalSupply + i) <= 4000) {
      totalAmountInDollar += 2500;
    }
    else if ((totalSupply + i) <= 5000) {
      totalAmountInDollar += 3000;
    }
  }
  return totalAmountInDollar
}

export const calculateTotalTokenPriceInEth = async (priceInDollars) => {
  if (priceInDollars === 0) {
    return 0;
  }
  let etherPrice = await tokenSaleController.methods.ETHUSD().call();
  let etherToSend = priceInDollars / etherPrice;
  etherToSend += +0.005;
  return etherToSend;

}