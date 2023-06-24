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

const personIvan = new Person("Ivan", 33);
console.log(`${personIvan.age}`); // cannot access name because its private
personIvan.speak();

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

// type is used for coollections API called
type User1 = {
    name: string;
    age: number;
    // x: string;
};

// interface declaration and usage
interface User2 {
    name: string;
    age: number;
}

class UserTest implements User1 {
    name: string;
    age: number;
}

// enum is based on integers starting from 0
enum PayStat {
    Failed, // members
    Successful,
    Pending,
}

// array
const PaymentStatus3 = ["Failed", "Successful", "Pending"];

// this is an object => key, value pairs
const PaymentStatus2 = {
    Failed: "Failed",
    Successfull: "Successful",
    Pending: "Pending",
}

interface UserInterface {
    name: string;
}

const users = [
    {name: "Marto1", page: 1, offset: 5},
    {name: "Marto2"},
    {name: "Marto3"},
    {name: "Marto4"},
    {name: "Marto5"},
    {name: "Marto6"},
] as UserInterface[]; // cast

const someUser : UserInterface = { name: "Marto123" }; // the type is UserInterface

function test(name: string, users: UserInterface[]){
    users.forEach( u => {
        u.name = name;
    })
}

