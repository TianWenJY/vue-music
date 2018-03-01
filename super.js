class A {

}
class B {

}
Object.setPrototypeOf(B.prototype,A.prototype);
Object.setPrototypeOf = function (obj,proto) {
	obj.__proto__ = proto;
	return obj;
}