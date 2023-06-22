var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isEaven = false;
var num = 4;
var str = '';
var peshoUser = {
    name: 'Pesho',
    age: 21,
};
peshoUser.age = 1; // only age and name are allowed
var AnotheruserClass = /** @class */ (function () {
    function AnotheruserClass() {
    }
    return AnotheruserClass;
}());
// API Call
var anotherUserList = [
    { firstName: 'Ivan', id: 1 },
    { firstName: 'Pesho', id: 2 },
    { firstName: 'Iva', id: 3 }
]; // list , array
anotherUserList.forEach(function (_a) {
    var firstName = _a.firstName, id = _a.id;
    // user => { firstName, id }
    console.log("".concat(id, ": ").concat(firstName));
});
//class modifiers
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.speak = function () {
        console.log("hello");
    };
    return Human;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    return Person;
}(Human));
// Generics can work with string number separately
function getIdentity(id) {
    // 
    console.log(id);
}
getIdentity("123");
getIdentity(12);
// enum
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Failed"] = 0] = "Failed";
    PaymentStatus[PaymentStatus["Successful"] = 1] = "Successful";
    PaymentStatus[PaymentStatus["Pending"] = 2] = "Pending";
})(PaymentStatus || (PaymentStatus = {}));
var x = PaymentStatus.Pending;
//const FAILED = 'Failed'
//if(x === FAILED){}
if (x === PaymentStatus.Pending) {
    console.log(x);
}
var personIvan = new Person("Ivan", 33);
console.log("".concat(personIvan.age)); // cannot access name because its private
personIvan.speak();
