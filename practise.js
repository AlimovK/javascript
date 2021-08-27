// bir xil juft xarflarni birinchi takrorlangini chiqarish
/*var arr = [`a`, `b`, `c`, `b`, `c`, `a`];
var list = [];
for (value of arr) {
  if (list.includes(value)) {
    console.log(value);
    break;
  }
  list.push(value);
}*/

//===========================

//search

// const data = [
//   {id:1, status:`high`, name:`Sanad`},
//   {id:2, status:`medium`, name:`Jasur`},
//   {id:3, status:`high`, name:`Alisher`},
//   {id:4, status:`low`, name:`Bahrom`},
//   {id:11, status:`medium`, name:`Azamat`}
// ]

// function dataFilter (input, key){
//   list= data.filter((value)=>{
//    return ls = value[key].toString().toLowerCase().includes(input.toLowerCase());
//     includes(input.toLowerCase());
//   })
//   console.log(list);
// }
// dataFilter(`5`, `id`)

//========================
//qaysi harfdan nechta borligini hisoblab beradi;


// var name = `aabbbbdddkkkkjjjjjjaaddddd`;
// var result = "";
// function stringZip(name) {
//   var nameZip = name.split("");
//   i = 1;
//   nameZip.forEach((letter, count) => {
//     if (letter == nameZip[count + 1]) {
//       i += 1;
//     } else {
//       if (i == 1) {
//         result = result + nameZip[count];
//       } else {
//         result = result + nameZip[count] + i;
//         i = 1;
//       }
//     }
//   });
//   return console.log(result);
// }
// stringZip(name)


//================================

// var S = 2;
// var arr = [1, 3, 2, 2];
// function meanvalue(arr, S) {
//   var res = 0;
//   var sum = 0;
//   arr.map((item, index) => {
//     (sum += item) / (index + 1) === S && res++;
//     //inner loop
//     var j = 1;
//     var cnt = 0;
//     for (let i = index + 1; i < arr.length; i++) {
//       (cnt += arr[i]) / j === S && res++;
//       j++;
//     }
//   });
//   console.log("res", res);
// }
// meanvalue(arr, S);

//=====================================

// const arr = [
//   { id: 1, name: `Gulbashakar`, status: `master` },
//   { id: 1, name: `baliq`, status: `high` },
//   { id: 1, name: `Mirshakar`, status: `medium` },
// ];
// let str = "";
// let countA = 0;
// let countB = 0;
// //1)
// arr.map((value) => {
//   str += value.name + value.status;
//   countA = str.match(/a/gi).length;
//   countB = str.match(/b/gi).length;
// });
// //2)
// str.split("").map((value) => {
//   switch (value.toLocaleLowerCase()) {
//     case "a":
//       countA++;
//       break;
//     case "b":
//       countB++;
//       break;
//   }
// });

// console.log(countA, countB);

//==============================================
