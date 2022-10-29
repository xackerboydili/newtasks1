"1"
// function maps(x){
//     return x.map((e) => e * 2)
// }
// console.log(maps([1, 2, 3]))

"2"

// function check(a,x){
//     return a.includes(x) ? true : false
// }
// console.log(check([66, 101], 66))

"3"

// function sum (numbers) {
//     let num = 0;
//     for(let i = 0; i < numbers.length; i++){
//         num = num + numbers[i]
//     }
//     return num
// }
// console.log(sum([1, 3, 4, 5]))

"4"

// function arr(n){
//     let arrr = [];
//     for(let i = 0; i < n; i++){
//         arrr.push(i)
//     }
//     return arrr
// }
// console.log(arr(5))

"5"
// function removeEveryOther(arr){
//     let newarr = []
//     for(let i = 0; i< arr.length; i+=2){
        
//         newarr.push(arr[i])
//     }
//     return newarr
// }
// console.log(removeEveryOther(['a', 'b', 'a', 'b', 'a', 'b']))

"6"
// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(sheep => sheep).length;
//   }
// console.log(countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ]))

// "7"
// function multipleOfIndex(array) {
//     return array.filter((num, i) => num % i === 0);
// }
// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))

"8"

// function countPositivesSumNegatives(input) {
//     if (input === null || input.length < 1) {
//         return [];
//     }
//     var arrays = [0, 0]

//     for(var i = 0; i < input.length; i++) {
//         if(input[i] <= 0) {
//             arrays[1] += input[i];
//       } else {
//             arrays[0] += 1
//       }
//     }
//     return arrays
// }
// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))

"9"
// function check(a, x) {
//    return a.includes(x) ? true : false
// }
// console.log(check([66, 101], 66))

"10"

// function arrayPlusArray(arr1, arr2) {
//    return arr1.concat(arr2).reduce((e, n) => e + n)
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21)

"11"

// function countBy(x, n) {
//    var z = [];
//   for(let i=1; i<=n*x; i++ )
//   if(i%x==0) z.push(i)

//   return z;
//  }
//  console.log(countBy((1,10)))

"12"
// function stringToArray(string){

// 	return string.split(" ")

// }
// console.log(stringToArray("I love you"))

"13"

// function digitize(n) {
//    return Array.from(String(n), Number).reverse()
// }
// console.log(digitize(35231))

"14"

// var websites = [];
// console.log(websites.push("codewars"))

"15"

// function positiveSum(arr) {
//    let num = 0;
//    for(let element of arr){
//       if(element > 0){
//          num += element
//       }
//    }
//    return num
// }
// console.log(positiveSum([1,-4,7,12]))

"16"

// function divisibleBy(numbers, divisor){
//    return numbers.filter((e) => e % divisor == 0)
// }
// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))

"17"
// function findNeedle(haystack) {
//    return "found the needle at position " + haystack.indexOf("needle")
// }
// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

"18"

//chala

// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2).sort((a, b) => a-b)
// }
// console.log(mergeArrays([1, 5, 3, 7], [2, 6, 4, 8]))

"19"

// function sumMix(x){
//    return Number(x.reduce((a, b) => Number(a) + Number(b)))
// }
// console.log(sumMix([9, 3, '7', '3']), 22)

"20"

// function array(arr){
//    return arr.split(',').slice(1,-1).join(' ')|| null 
//    }
// console.log(array(1, 2, 4, 5, 6))

"21"

//chala
// function twoSort(s) {
//    return s.split(' ').sort((a, b) => a-b).join('')
// }
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))

"22"

// function printArray(array){
//    return array.join()
// }
// console.log(printArray(['hola']))

"23"
//chalaaa
// function invert(array) {
//    let arr = []
//    if(array > 0){
//       (array) * 1
//    }
//    else{
//       (array) * -1
//    }
//    return arr
// }
// console.log(invert([1, 2, 3, 4, 5, 6]))

"24"

// function grow(x){
//     let total = 1
//     for(let num of x){
//         total = total * num
//     }
//     return total
// }
// console.log(grow([1, 2, 3, 4,]))

'25'

// function squareSum(numbers){
//     return numbers.reduce((a, b) => (b * b) + a)
// }
// console.log(squareSum([1, 2, 2]))

"26"

// function addLength(str) {
//     let string = str.split(" ")
//         str.padEnd(5, " ")
//     return string
// }
// console.log(addLength("you will win"))

"27"
    
// function repeatStr (n, s) {
//     return n.repeat(s)
// }
// console.log(repeatStr("1", 4))

"28"

// function doubleInteger(i) {
//     return i * 2;
// }
// console.log(doubleInteger(3))