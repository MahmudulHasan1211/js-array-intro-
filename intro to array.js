//calculate the length of numbers array
const numbers = [23, 33, 44, 55, 66, 77, 88, 99]
console.log(numbers.length);

// index of array 
const number = [23, 33, 44, 55, 66, 77, 88, 99]
console.log(number[0])

// set index value in another variable 
const niw = number[7];
console.log(niw);

// set or update element value by index names 
number[0] = 172;
console.log(number)

// push new items into array 
let hasa = [10, 20, 30, 40, 50,]
console.log(hasa)
hasa.push(60)
console.log(hasa)

// pop items from array 
hasa.pop()
console.log(hasa)
//  out value from another array and put into new variable
const tik = hasa.pop()
console.log(tik)

// shift unshift 
let rooms = [101, 102, 104]
console.log(rooms)
// add the value at 0 index 
rooms.unshift(100)
console.log(rooms)

let bikePrice = ['100k', '200k', '300k']
console.log(bikePrice)
// remove the value of index 0 
bikePrice.shift()
console.log(bikePrice)