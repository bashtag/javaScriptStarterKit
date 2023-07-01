import AbstractUser from "./abstractUser.js";

export default class	Customer extends AbstractUser {
	constructor(id, firstName, lastName, city, age, creditCardNumber) {
		super(id, firstName, lastName, city, age)
		this.creditCardNumber = creditCardNumber
		this.type = "customer"
	}
}