// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const arr = [17, 21, 23];
const arr1 = [12, 5, -5, 0, 4];

function printForcast(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    console.log(`${arr1[i]}°C in ${[i + 1]} days...`);
  }
}

printForcast(arr1);
