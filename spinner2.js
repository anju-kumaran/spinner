const createAnimation = function (spinCount, myArray) {
  let counter = 1;
  for (let i = 0; i < spinCount; i++) {
    for (let j =0; j < myArray.length; j++) {
      setTimeout(() => {
        process.stdout.write(`\r${myArray[j]}   `);
      }, 500 + (counter++) * 100);
    
    }
  }
}

let myArray = ['|', '/', '-', '\\','|', '/'];
let spinCount = 3;
createAnimation(spinCount,myArray);
