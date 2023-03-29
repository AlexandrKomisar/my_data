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
  2020, [450, 456, 462, 468],
];

let sumWater = 0;
let totalWater = 0;
for (let i = 1; i < water[1].length; i++){
  totalWater += water[1][i] - water[1][i-1];
  console.log(i);
  console.log(water[1][0]);

}
 
let out_totalWater = document.getElementById("out_totalWater");
out_totalWater.innerHTML = totalWater;

// for (let i = 0; i < myData[0][1].length; i++){
//   console.log(myData[0][1][0]);
// }

// console.log(myData[0][1]);
 console.log(sumWater);
 console.log("totalWater -- "+totalWater);

