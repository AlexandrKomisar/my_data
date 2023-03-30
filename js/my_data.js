// let myData = [
//   [
//     (year = 2020),
//     (water = [450,456,546,778]),
//     (gas = [34,36,37]),
//     (electricity = []),
//     (rent = []),
//     (internet = [165, 165]),
//   ],
//   [
//     (year = 2021),
//     (water = []),
//     (gas = []),
//     (electricity = []),
//     (rent = []),
//     (internet = [165, 165]),
//   ],
// ];

let water = [
  2020,
  [648, 657, 664, 674, 684, 696, 705, 716, 726, 736, 747, 758, 768],
  2021,
  [768, 777, 785, 793, 800, 803, 810, 823, 833, 838, 839, 849, 858],
  2022,
  [858, 867, 876, 884, 885, 887, 890, 895, 895, 895, 896, 896, 896],
  2023,
  [896, 896, 896, 896, , , , , , , , ,],
];
// нульове значення масиву це попередні показники за рік

const priceWater = 34.044;
let sumPriceWater = 0;
let totalWater = 0;

// рахуємо скільки спожито кубів води
for (let i = 1; i < water[1].length; i++){
  totalWater += water[1][i] - water[1][i - 1];
  sumPriceWater= Math.round(totalWater * priceWater)
  console.log(i);
  console.log(water[1][0]);

}
 
let out_totalWater = document.getElementById("out_totalWater");
out_totalWater.innerHTML = totalWater;

let out_sumPriceWater = document.getElementById("out_sumPriceWater");
out_sumPriceWater.innerHTML = sumPriceWater;

 console.log(sumPriceWater);
 console.log("totalWater -- "+totalWater);

