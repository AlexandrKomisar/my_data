let myData = [
  [
    (year = 2020),
    (water = [450,456,546,778]),
    (gas = [34,36,37]),
    (electricity = []),
    (rent = []),
    (internet = [165, 165]),
  ],
  [
    (year = 2021),
    (water = []),
    (gas = []),
    (electricity = []),
    (rent = []),
    (internet = [165, 165]),
  ],
];

let sumWater = 0;
let totalWater = 0;
for (let i = 0; i < myData[0][1].length; i++){
  console.log(myData[0][1][0]);
}

console.log(myData[0][1]);
console.log(sumWater);
console.log("totalWater -- "+totalWater);

