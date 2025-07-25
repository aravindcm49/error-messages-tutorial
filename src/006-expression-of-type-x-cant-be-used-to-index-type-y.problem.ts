const productPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: keyof typeof productPrices) => { //makes the index signature dynamic as we update productPrices
  return productPrices[productName];
};
