// // console.log(arr.length);
// // console.log('test');
// for (let i=arr.length-1;i>=0;i--){
//     // console.log(arr[i]);
//     arr1.push(arr[i]);

// }
// console.log(arr1);

// Arrays through funtion

// const arr=[1,2,3,4,5,6,7,8,9];
// function reverseArray(arrays){
//     const arr1=[];
//     for (let i=arrays.length-1;i>=0;i--){
//             // console.log(arr[i]);
//             arr1.push(arrays[i]);

//         }
//         return arr1;
// }
// const x=reverseArray(arr)
// console.log(x);

// write a funtion that takes two parmeters - array and operation.
// if the array is empty, return "The array is empty".
// if the operation is "oddNumbers", return all odd numbers from the array into another array.
// if the operation is "evenNumber", return all odd numbers from the array into another array.
// if the operation is "oddNumbers" and there are no odd numbers in the array, return "No odd numbers found".
// if the operation is "evenNumbers" and there are no even numbers in the array, return "No even numbers found".

const arr=[2,4,6,8,9];
function arrayOperation(p1, p2) {
  let oddFlag = false;
  let evenFlag = false;
  const arr1 = [];
  if (p1.length === 0) {
    return "The array is empty";
  } else if (p2 === "even") {
    for (let i = 0; i < p1.length; i++) {
      if (p1[i] % 2 === 0) {
        evenFlag = true;
        arr1.push(p1[i]);
      }
    }
    if (evenFlag === false) {
      return "No even numbers found";
    }
  } else if (p2 === "odd") {
    for (let i = 0; i < p1.length; i++) {
      if (p1[i] % 2 != 0) {
        oddFlag = true;
        arr1.push(p1[i]);
      }
    }
    if (oddFlag === false) {
      return "No odd numbers found";
    }
  }
  return arr1;
}
let x = arrayOperation(arr, "odd");
console.log(x);


function optimisedArrayOperation(arr, op) {
  const arr1 = []

  if(!arr.length) return 'The array is empty'

  for (let i = 0; i < arr.length; i++) {
    
  }


  return arr1

}