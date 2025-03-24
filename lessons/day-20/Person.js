"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.validateAge(age);
        this.name = name;
        this.age = age;
    }
    //Service method
    Person.prototype.setAge = function (age) {
        this.validateAge(age);
        this.age = age;
    };
    // Support method
    Person.prototype.validateAge = function (age) {
        if (age < 0) {
            throw new Error("Age must be greater than 0");
        }
    };
    return Person;
}());
exports.default = Person;
// Private: Properties "private name: string;" is private and accessible within class "Person"
// Nếu Properties để private thì muốn dùng -> Sử sụng setName, setAge sẽ validate data
