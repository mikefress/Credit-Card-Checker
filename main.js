const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = (card) => {
  let cardInverted = card.slice().reverse(); // make a copy of the card and invert the array right to left.
  for (let i = 0; i < cardInverted.length; i++) { // check each index and pick out the even numbers
    if (i % 2 != 0) {
      cardInverted[i] = cardInverted[i] * 2; // double the value of the array at each even index
      if (cardInverted[i] > 9) {
        cardInverted[i] -= 9; // if the value is higher then 9 deduct it by 9
      }  
    }
  }
  let sum = cardInverted.reduce((a, b) => a + b, 0); // add all numbers of the array
  if (sum % 10 === 0) { // check if the sum modulo 10 equals zero
    return true; // if so return true, card is valid
  } else {
    return false; // if not return false, card is invalid
  }  
}
  
const findInvalidCards = (cards) => {
  let invalidCardNumbers = [];
  for ( let card = 0; card < cards.length; card++) {
    if(!validateCred(cards[card])) {
      invalidCardNumbers.push(cards[card])
    }
  }
  return invalidCardNumbers
}


const idInvalidCardCompanies = (invalidCards) => {
  let InvalidCardCompanies = [];
  for ( let card = 0; card < invalidCards.length; card++) {
    if(invalidCards[card].indexOf(3) === 0 && InvalidCardCompanies.includes('Amex (American Express)') === false) {
      InvalidCardCompanies.push('Amex (American Express)')
    } else if(invalidCards[card].indexOf(4) === 0 && InvalidCardCompanies.includes('Visa') === false) {
      InvalidCardCompanies.push('Visa')
    } else if(invalidCards[card].indexOf(5) === 0 && InvalidCardCompanies.includes('Mastercard') === false) {
      InvalidCardCompanies.push('Mastercard')
    } else if(invalidCards[card].indexOf(6) === 0 && InvalidCardCompanies.includes('Discover') === false) {
      InvalidCardCompanies.push('Discover')
    } else if(invalidCards[card].indexOf(0) === 0 || invalidCards[card].indexOf(1) === 0 || invalidCards[card].indexOf(2) === 0 || invalidCards[card].indexOf(7) === 0 || invalidCards[card].indexOf(8) === 0 || invalidCards[card].indexOf(9) === 0) {
      InvalidCardCompanies.push('Company Not Found')
    };   
  };
  return InvalidCardCompanies;
};

let invalidCards1 = findInvalidCards(batch);
console.log(invalidCards1)

console.log(idInvalidCardCompanies(invalidCards1))
