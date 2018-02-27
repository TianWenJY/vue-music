class Point {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return 
	}
}
function Point (x,y) {
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function () {
	ret
}

typeof Point "function"
Point === Point.prototype.constructor

class Bar {
	doStuff() {
		console.log('stuff');
	}
}
var b = new Bar();
b.doStuff()

class Point {
	constructor() {

	}
	toString() {

	}

	toValue() {

	}
}
Point.prototype = {
	constructor(){},
	toString(){},
	toValue() {}
}

class B {}
let b = new B();

b.constructor === B.prototype.constructor

classPoint {
	constructor(){}
}

Object.assign(Point.prototype,{
	toString(){},
	toValue(){}
})

class Point {
	constructor(x,y) {}
	toString() {}
}
Object.keys(Point.prototype)

let methodName = 'getArea';

class Square {
	constructor(length) {

	}
	[methodNa]() {

	}
}

class Foo{
	constructor() {
		return Object.create(null);
	}
}
new Foo() instanceof Foo

class Foo {
	constructor(){
		return Object.create(null);
	}
}
new Foo() instanceof Foo

class Foo {

}
class Point {

}
var  point = new Point(2,3);
class Point {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	toString () {
		return 
	}
}
var point = new Point(2,3);
point.toString();
point.hasOwnProperty('x')
point.hasOwnProperty('y')
point.hasOwnProperty('toString')
point.__proto__.hasOwnProperty('toString')

var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__ === p2.__proto__

var p1 = new Point(2,3);
var p2 = new  Point(3,2);

p1.__proto__.printName = function () { return 'Oopes' };

p1.printName()
p2.printName()

const MyClass = class Me {
	getClassName() {
		return Me.name;
	}
};

let inst = nw Myclass();
inst.getClassNAme()
Me.name

const MyClass = class { }

let person = new class {
	constructor(name) {
		this.name = name;
	}
	sayName() {
		console.log(this.name);
	}
}('张三');

person.sayName();

let person = new class {
	constructor (name) {
		this.name = name;
	}
	sayName() {
		console.log(this.name);
	}
}
{
	let Foo = class {};
	class Bar extends Foo {

	}
}

class Widget {
	foo(baz) {
		this._bar(baz);
	}
	_baz(baz) {
		return this.snaf = baz;
	}
}
class Widget {
	foo(baz) {
		bar.call(this,baz);
		var.call(this,baz);	
	}
}
function bar(baz) {
	return this.snaf = baz;
}

class Logger {
	printName(name = 'there') {
		this.print(`Hello ${name}`);
	} 
	print(text) {
		console.log(text);
	}
}
const logger = new Logger();
const {printName} = logger;
printName();

