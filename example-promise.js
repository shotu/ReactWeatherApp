// function getTempCallback(location, callback){
//   callback(undefined,78);
//   callback("City not found");
// }
//
// getTempCallback('Philadelphia', function (err,temp) {
//   if(err){
//     console.log('error',err);
//   }else {
//     console.log('success',temp);
//   }
// })
//
//
// function getTempPromise(location) {
//   return new Promise(function (resolve,reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     },2000);
//
//   })
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('Success',temp);
// }, function (err) {
//   console.log("error",err);
// })
//
//
// function printABC() {
//   setTimeout(function () {
//     console.log("A");
//     setTimeout(function () {
//       console.log("B");
//       setTimeout(function () {
//         console.log("C");
//       },1000);
//     },1000)
//   },1000)
// }
//
// printABC();
//
function addNumberPromise(a,b) {
  return new Promise(function (resolve,reject) {
      if(typeof a !== 'number' || typeof b !== 'number'){
        reject("the data proviede is not of type number")
      }else{
        resolve(a+b)
      }
  })
}

addNumberPromise(1,'a').then(function (sum) {
  console.log("sum is "+sum);

}, function (err) {
  console.log(err);
})
