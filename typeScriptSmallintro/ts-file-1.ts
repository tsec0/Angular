let isEaven: boolean = false;
let num: number = 4;
let str: string = '';

type User = {
    // members
    name: string,
    age: number
}

const peshoUser = {
    name: 'Pesho',
    age: 21,
} as User;

peshoUser.age = 1; // only age and name are allowed

interface Anotheruser {
    firstName: string;
    id: number;
    getUserName: () => string;
}

class AnotheruserClass implements Anotheruser {
    firstName: string; // should be implemented
    id: number; // should be implemented

    getUserName: () => string; // should be implemented
}

// API Call
const anotherUserList = [
    {firstName: 'Ivan', id: 1}, 
    {firstName: 'Pesho', id: 2}, 
    {firstName: 'Iva', id: 3}
] as Anotheruser[]; // list , array

anotherUserList.forEach(({ firstName, id }) => {
    // user => { firstName, id }
    console.log(`${id}: ${firstName}`);
});

//class modifiers
class Human {
    speak(){
        console.log("hello");
    }
}

class Person extends Human{
    private name: string;
    public age: number;

    constructor(name: string, age: number) {
        super(); // inherts and extends
        this.name = name;
        this.age = age;
    }
}

// Generics can work with string number separately
function getIdentity<T>(id: T){
    // 
    console.log(id);
}
getIdentity<string>("123");
getIdentity<number>(12);

// enum
enum PaymentStatus {
    Failed,
    Successful,
    Pending,
}
const x = PaymentStatus.Pending;
//const FAILED = 'Failed'
//if(x === FAILED){}
if(x === PaymentStatus.Pending){
    console.log(x);
}

const personIvan = new Person("Ivan", 33);
console.log(`${personIvan.age}`); // cannot access name because its private
personIvan.speak();