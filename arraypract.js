const arr=[1,232,4,5,6,435,54,232,43,543];
let Max=arr[0];
let Min=arr[0];

function maxMinArray(arrays){
if(arrays.length==0){
    return 'Array is empty'
}
for(let i=1;i<arrays.length;i++){
    if(arrays[i]>Max){
    Max=arrays[i];
    }
    if(arrays[i]<Min){
        Min=arrays[i];
            }

}
return {Min,Max};
}
const x=maxMinArray(arr);
console.log(x);