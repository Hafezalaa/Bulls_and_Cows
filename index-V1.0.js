// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const prompt = require("prompt-sync")({ sigint: true });
const RS = require("readline-sync");

// Stage 1: creating the function-s
// This function takes 2 numbers as input and checks for bulls and cows
// returned value is shown according to the level

function check(secNum, entryNum, num) {
  let cowCounter = 0;
  let bullCounter = 0;
  let bullPosition = []
  const secArray = [
    Number(secNum.toString()[0]),
    Number(secNum.toString()[1]),
    Number(secNum.toString()[2]),
    Number(secNum.toString()[3]),
  ];
  const entryArray = [
    Number(entryNum.toString()[0]),
    Number(entryNum.toString()[1]),
    Number(entryNum.toString()[2]),
    Number(entryNum.toString()[3]),
  ];
  if(num<=6){
  if (secArray[0] === entryArray[0]) {
    bullCounter++;
    bullPosition.push(0)
  } else if (secArray.includes(entryArray[0])) {
    cowCounter++;
  }
  if (secArray[1] === entryArray[1]) {
    bullCounter++;
    bullPosition.push(1)
  } else if (secArray.includes(entryArray[1])) {
    cowCounter++;
  }
  if (secArray[2] === entryArray[2]) {
    bullCounter++;
    bullPosition.push(2)
  } else if (secArray.includes(entryArray[2])) {
    cowCounter++;
  }
  if (secArray[3] === entryArray[3]) {
    bullCounter++;
    bullPosition.push(3)
  } else if (secArray.includes(entryArray[3])) {
    cowCounter++;
  }

  return `You have [${bullCounter}] BULLS at positions [${bullPosition}], and [${cowCounter}] COWS`;
}
else{
  if (secArray[0] === entryArray[0]) {
    bullCounter++;
    
  } else if (secArray.includes(entryArray[0])) {
    cowCounter++;
  }
  if (secArray[1] === entryArray[1]) {
    bullCounter++;
   
  } else if (secArray.includes(entryArray[1])) {
    cowCounter++;
  }
  if (secArray[2] === entryArray[2]) {
    bullCounter++;
    
  } else if (secArray.includes(entryArray[2])) {
    cowCounter++;
  }
  if (secArray[3] === entryArray[3]) {
    bullCounter++;
    
  } else if (secArray.includes(entryArray[3])) {
    cowCounter++;
  }

  return `You have [${bullCounter}] BULLS, and [${cowCounter}] COWS`;
}
}

// this function checks the validity of the number

function validNum(num) {
  if (
    num.length === 4 &&
    num[0] !== num[1] &&
    num[0] !== num[2] &&
    num[0] !== num[3] &&
    num[1] !== num[2] &&
    num[1] !== num[3] &&
    num[2] !== num[3] &&
    !num.includes("+") &&
    !num.includes("-") &&
    !isNaN(Number(num))
  ) {
    return true;
  }
  return false;
}

// saving the level of the game
let level
do {
  level = RS.question(
    `
          Please enter the level of the game as a number as following:
              (This level represents the number of allowed tries)
          3 : very hard
          . :
          . : 
          . : 
          15: very easy
          by choosing 6 or harder you will git extra hints in the console:
    `
  )
 
} while (level<3 || level>15);
let counter = Number(level)

console.log(`
          Your Level is: `, counter);

// Stage 2 : saving Player 1 & secret number

console.log();
console.log();
let firstPlayer=null
do{ firstPlayer = RS.question(
  `First Player, Please Enter your name to play: `
);}
while(!firstPlayer)
let secretNumber = 0;
do {
  secretNumber = RS.question(
    `
        Thank you ${firstPlayer}:
        ===============================================
        Please enter a secret number to start playing.
        Please notice ===>
        * The number should contain 4 digits only.
        * All digits should be unique and not repeated.
        ===============================================
        ===> `
  );
} while (validNum(secretNumber) === false);


console.log(
  `
        ${firstPlayer}, we have saved the secret number as [****],
        we ready for the second player.
        Please give him the roll!!!

  `);



RS.question(
  `
            hit enter to continue...`
);
// Stage 3 Player 2: saving and asking for a guess

console.log();

let secondPlayer
do{
secondPlayer = RS.question(
  `     
        ====================================================================================
        Hello, I guess you are the player who wants to challenge, Great!!! let's start,
        Please Enter your name to play:
        ===> `
);
}while(!secondPlayer)
RS.question(
  `
          
        Thanks a lot ${secondPlayer}.
        ===============================================
        Please remember:
            Your guess should contain 4 digits only.
            All digits should be unique and not repeated.
        have fun.     
        =========
        hit enter again...  `
);

let entryNumber = 0;

do {
  entryNumber = RS.question(
    `
        ============================
        Now you have ${counter} tries left.
        Enter Your Guess: ===> `
  );

  counter--;
  if (!validNum(entryNumber)) {
    console.log();
    console.log(`${secondPlayer}, Your entry is not valid`);

    console.log();
    if (counter === 0) {
      console.log(`You have ${counter} Tries`);
      console.log(`Sorry, you lost`);
    }
  } else if (validNum(entryNumber)) {
    if (entryNumber !== secretNumber) {
      console.log();
      console.log();
      console.log(`${secondPlayer}, ${check(secretNumber, entryNumber, counter)}`);

      console.log();
      console.log();
      if (counter === 0) {
        console.log(`You have ${counter} Tries`);
        console.log(`Sorry, you lost`);
      }
    } else if (entryNumber === secretNumber) {
      console.log();
      console.log(
        `
          ====================
          congratulations ${secondPlayer}!!!
          you got it right this time.
          ====================
  `
      );
      console.log();
      break;
    }
  }
} while (counter !== 0 || entryNumber === secretNumber);
