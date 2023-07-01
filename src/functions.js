export function addToCart(productName) {
	console.log("Sepete eklendi : " + productName)
}

let	sayHello = () => {
	console.log("Hello World!")
}

sayHello();

let	sayHello2 = function (...params) { // parameter with rest operator must be the last parameter
	console.log("Hello World 2! " + params)
}

sayHello2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function	addToCart2(productName, quantity, unitPrice) {
	console.log("Ürün : " + productName + " Adet : " + quantity + " Fiyat : " + unitPrice)
}

addToCart2("Elma", 5, 10);
addToCart2("Armut", 2, 20);
addToCart2("Limon", 3, 15);

console.log("--------------------")

function	addToCart3(product) {
	console.log("Ürün : " + product.productName + " Adet : " + product.quantity + " Fiyat : " + product.unitPrice)
}

let	product1 = {productName: "Elma", quantity: 5, unitPrice: 10};

addToCart3(product1);

let	product2 = {productName: "Armut", quantity: 2, unitPrice: 20};

product2 = product1;
product2.productName = "Karpuz";
console.log(product1.productName);

// Objects are reference types

let	num1 = 10;
let	num2 = 20;
num2 = num1;
num1 = 30;
console.log(num2);

// Primitive types are value types
// string, number, bigint, boolean, undefined, symbol, null


let	[{productName:newName, quantity, unitPrice}, [sehir]] = [
	product1,
	[
		["Ankara"],
		["Bursa"]
	]
];

console.log(newName)
console.log(sehir)