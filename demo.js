class Point {

}
class ColorPoint extends Point {
	constructor(x,y,color) {
		super(x,y);
		this.color = color;
	}

	toString() {
		return this.color + ''+super.toString();
	}
}

class ColorPoint extends Point {}

class ColorPoint extends Point }{

}
class Point {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
}
class ColorPoint extends Point {
	constructor(x,y,color) {
		this.color = color;
		super(x,y);
		this.color = color;
	}
}

let cp = new ColorPoint (25,8,'green');

cp instanceof ColorPoint //true
cp instanceof Point  

Object.getPrototypeOf(ColorPoint) === Point


class A {}

class B extends A {
	constructor() {
		super();
	}
}

class A {
	constructor() {
		console.log(new.target.name);
	}
}
class B extends A {
	constructor() {
		super();
	}
}
new A()
new B()

class A {
	constructor() {
		console.log(new.target.name);
	}
}
class B extends A {
	constructor() {
		super();
	}
}


new A()
new B()

class A {
	p() {
		return 2;
	}
}

class B extends A {
	constructor() {
		super();
		console.log(super.p());
	}
}
A.prototype.constructor.call(this);
A.prototype.constructor.call(this);
A.prototype.constructor.call(this);