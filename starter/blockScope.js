var guessMe1 = 1;
let guessMe2 = 2;

{
  try {
    console.log(guessMe1, guessMe2);
  } catch (err) {
    console.log('Error'); // Error
  }

  let guessMe2 = 3;
  console.log(guessMe1, guessMe2); // (B) 1 : 3
}

console.log(guessMe1, guessMe2); // (C) 1 : 2

const print_func = () => {
  console.log(guessMe1);
  var guessMe1 = 5;
  let guessMe2 = 6;
  console.log(guessMe1, guessMe2);
};

console.log(guessMe1, guessMe2); // (F) 1 : 2
