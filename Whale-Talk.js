let input = "turpentine and turtles";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++){
  // console.log(i + 1);
  for (let j = 0; j < vowels.length; j++){
    if (input[i] === vowels[j]){
      if (input[i] === 'e') {
        resultArray.push(input[i], input[i]);
      }
      if (input[i] === 'u') {
        resultArray.push(input[i], input[i]);
      }
      if (input[i] === 'a') {
        resultArray.push(input[i]);
      }
      if (input[i] === 'i') {
        resultArray.push(input[i]);
      }
      if (input[i] === 'o') {
        resultArray.push(input[i]);
      }
      
    }
  }
}

console.log(resultArray.join('').toUpperCase());