//1) concatination of arrays
// function concatination(...arr){
// let n = []
// return n.concat(...arr);
// }
// console.log(concatination([1,2,3],[4,5],[6,7]));
// console.log(concatination([1],[2],[3],[4],[5],[6],[7]));
// console.log(concatination([1,2],[3,4]));

//2)
// function secondLargest(arr){
//   let n = [...arr];
//   let max = Math.max(...n);
//   let index = n.indexOf(max);
//   n.splice(index,1);
//   let SeconMax = Math.max(...n);
//   return SeconMax;
// }
// console.log(secondLargest([10,40,30,20,50]));
// console.log(secondLargest([25,143,89,13,105]));
// console.log(secondLargest([54, 23, 11, 17, 10]));

//3)  compact
// function compact(arr) {
//   return arr.filter(e=>!!e)
// }
// console.log(compact([0, 1, false, 2, "", 3]));
// console.log(compact([1, 0, false, null, undefined, "banana"]));
// console.log(compact([]));


//4) 
// function arrayOfMultiples(num1, num2){
//   let arr = [];
//   let multiple = num1;
//   while (result.length<num2){
//     result.push(multiple);
//     multiple +=num1;
//   }
//   return arr;
// }
// console.log(arrayOfMultiples(7,5));


//5) Maria
// function MarathonDistance(arr){
// let distance = 25;
// let sum = 0;
//   arr.forEach(e=>{
//     sum+=e;
//   })
//   if (sum == distance){
//     return true;
//   } else{
//     return false;
//   }
// }
// console.log(MarathonDistance([1,2,3,4]));
// console.log(MarathonDistance([1,9,5,8,2]));
// console.log(MarathonDistance([-6,15,4]));???


//6) Mirror
// function mirror(arr){
//   let arr2 = [...arr];
   
// return arr2.concat(arr.reverse().slice(1));
// }
// console.log(mirror([0,2,4,6]));
// console.log(mirror([1,2,3,4,5]));

//7) IndexMultiplier
// function IndexMultiplier(arr){
//    let sum = 0;
//   arr.filter((e,i)=>{
//     sum += e*i;
//   });
//   return sum;
// }
// console.log(IndexMultiplier([1,2,3,4,5]));
// console.log(IndexMultiplier([-3,0,8,-6]));

//8)
// function ascDesNone(arr,str){
//   let rightSort = [...arr].sort((a,b)=> {
//     return a-b;
//   });
//   let descendingSort = [...arr].sort((a,b)=> {
//     return b-a;
//   }); 

//   if (str == "Asc"){
//     return rightSort;
//   } else if (str == "Des"){
//     return descendingSort 
//   }
//   else if (str !== "Asc" && str !== "Des"){
//     return arr;
//   }  
// }
// console.log(ascDesNone([4,3,2,1],"Asc"));
// console.log(ascDesNone([7,8,11,66],"Des"));
// console.log(ascDesNone([1,2,3,4],"None"));

//9)
// function findNaN(arr){
//   let n = NaN;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]!==arr[i]){
//       return i
//     } 
//   }
//   return -1
// }
// console.log(findNaN([1,2,NaN]));
// console.log(findNaN([NaN, 1,2,3,4]));


//10) reverseArr
// function reverseArr(...arr){
//   let res = [];
//   let str= arr.toString();
//   str.split(" ");
//   res = [...str];
//   return res.reverse();
// }
// console.log(reverseArr(1485979));
// console.log(reverseArr(623478));
// console.log(reverseArr(12345));