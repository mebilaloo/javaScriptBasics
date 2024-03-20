// const arr=[1,3,5,7];

// function arrayFilterOpertion(a,op)
// {
//     let filteredArray;
// if(!a.length) return ' No elements in array';
// if(op==='even'){
//     filteredArray=a.filter((num)=>(num%2==0))
// }
// else if (op==='odd'){
//     filteredArray=a.filter((num)=>(num%2!=0))
// }

// return filteredArray.length > 0 ? filteredArray : (op==='even' ? 'No even numbres Found' : 'No odd Numbers Found')

// }
// const x=arrayFilterOpertion(arr,'even')
// console.log(x)

// const arr = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr = [2, 4, 6, 8, 10];

function completeFilterArray(a, op) {
    let filteredArray;
    return (!a.length) ? "Array is empty" 
        : (op === 'even') ? ((filteredArray = a.filter(num => num % 2 === 0)).length > 0 ? filteredArray : "No even numbers were found")
            : (op === 'odd') ? ((filteredArray = a.filter(num => num % 2 !== 0)).length > 0 ? filteredArray : "No odd numbers were found")
            : " The operation You  Entered is Not Correct.... "
               
}

const x1 = completeFilterArray(arr, 'odd');
console.log(x1);
