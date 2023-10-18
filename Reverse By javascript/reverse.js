function reverseNumber(number) {
    const numberString = number.toString();
    
    const reversedString = numberString.split('').reverse().join('');
  
    const reversedNumber = parseInt(reversedString, 10);
  
    return reversedNumber;
  }
  
  const x = 32243;
  const reversedX = reverseNumber(x);
  console.log(reversedX); 
  