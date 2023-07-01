class   Deneme {
	constructor() {
		console.log('Deneme class çalıştı');
	}
}

let  hehe = new Deneme();

Deneme.bilal = 5;

console.log(Deneme.bilal);
console.log(hehe.bilal);

function    test(def = 5, ...args) {
	console.log(def, " - ", ...args);
}

test(undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

let	 arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Math.max(...arr));
console.log("ABC" , ..."DEF");

let	 [hebele, hübele] = arr

function	test2([a]) {
	console.log(a);
}

test2(arr);

let obj = {a:10, b:20, c:30};

let {a, b, c} = obj;
console.log(a)

import {
	addToCart
} from "./functions.js";

addToCart("Elma");

console.log(hehe.type)