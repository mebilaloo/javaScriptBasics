class Person {
    constructor(name) {
        this.name = name;
    }
    
    printArrowfns() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name); // Arrow: Bilal
        }, 100);
    }
}

let person = new Person('Bilal');
person.printArrowfns();

setTimeout(()=>{console.log(person.name)}, 2000); // Outputs "Bilal" because the arrow
// let calculator=()=>{
//     console.log("This is a clculator");
// }
// calculator();