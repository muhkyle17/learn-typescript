"use strict";
var _a;
console.log('hello world');
let thisAge = 20;
if (thisAge < 50)
    thisAge += 10;
console.log(thisAge);
let sales = 1236345234234;
let level;
function render(document) {
    console.log(document);
}
let numbers = [];
numbers.forEach(n => n.toString);
let user = [1, 'Mosh'];
user[0].toFixed;
user[1].charAt;
user.push(1);
var SizeString;
(function (SizeString) {
    SizeString["Small"] = "s";
    SizeString["Medium"] = "m";
    SizeString["Large"] = "l";
})(SizeString || (SizeString = {}));
let mySize = 2;
console.log(mySize, 'mySize');
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2023);
let employee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    },
};
employee.name = 'Mosh';
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Hola');
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map