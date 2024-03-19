const datas=[
{name:"Muhammad Bilal",profession:"Data science"},
{name:"Asim Muneer",profession:"Army Cheif"}
];

function getDatas(){
    setTimeout(()=>{
let result="";
datas.forEach((data,index)=>{
    result+= `<li>${data.name}</li>`;
})
document.body.innerHTML=result
    },2000)
}


// function createData(newData,callBack){
//     setTimeout(() => {
//         datas.push(newData);
//         callBack();
//     }, 5000);
// }
function createData(newData){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            datas.push(newData);
            let error=false;
            if(!error)
            {
                resolve();
            }
            else{
                reject("Some Error occurred....");
            }
        }, 2000);
    });
}

// getDatas();
// createData({name:"hilal shah", profession:"Footballer"}).then(getDatas);
async function start(){
    await createData({name:"hilal shah", profession:"Footballer"}).then(getDatas);
getDatas();
}
start();