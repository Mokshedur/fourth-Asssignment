//function declear
function seerToMon(seer) {
  const totalMon = seer / 40;
  return totalMon;

}
//function call
const totalWeight = seerToMon(80);
console.log(totalWeight);

//Question two
//function declear

function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
  const perShirtPrice = 100;
  const perPantPrice = 200;
  const perShoesPrice = 500;
  //shirt, pants, shoes, calculatin
  const shirtProductQuantity = shirtQuantity * perShirtPrice;
  const pantsProductQuantity = pantQuantity * perPantPrice;
  const shoesProductQuantity = shoesQuantity * perShoesPrice;
  //adding all product quantity
  const totalPrice = shirtProductQuantity + pantsProductQuantity + shoesProductQuantity;
  return totalPrice;

}
//function call
const ProductTotalOperation = totalSales(2, 5, 10);
console.log(ProductTotalOperation);


//Question 03:
//function declear
function deliveryCost(ProductQuantity) {
  const firstRateperTshirt = 100;
  const secondrateperTshirt = 80;
  const thirtRateperTshirt = 50;
  if (ProductQuantity <= 100) {
    const count = ProductQuantity * firstRateperTshirt;
    return count;

  }
  else if (ProductQuantity <= 200) {
    const firstQuantity = 100 * firstRateperTshirt;
    const restProduct = ProductQuantity - 100;
    const SecondQuantity = restProduct * secondrateperTshirt;
    const totalQuantity = firstQuantity + SecondQuantity
    return totalQuantity;

  }
  else {
    const firstQuantity = 100 * firstRateperTshirt; //this is for first 100 quantity
    const secondQuantity = 100 * secondrateperTshirt;//this is for second 100 quantity
    const restProductTshirt = ProductQuantity - 200;
    const thirtQuentity = restProductTshirt * thirtRateperTshirt;
    const totalProductQuentity = firstQuantity + secondQuantity + thirtQuentity;
    return totalProductQuentity;
  }
}
//function call

const TshirtQuentity = deliveryCost(280);
console.log(TshirtQuentity);



//Question-04
////function declear

function perfectFriend(friends) {
  if (typeof friends != 'object') {
    return 'please Enter a Array include your friends name';

  }
  for (const friend of friends) {
    if (friend.length == 5) {
      return friend;
    }
  }
}
// function call

console.log(perfectFriend(['momin', 'Baki', 'Ali']))


