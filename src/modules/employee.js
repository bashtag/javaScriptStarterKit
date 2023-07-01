import AbstractUser from "./abstractUser.js";

export default class	Employee extends AbstractUser {
	constructor(id, firstName, lastName, city, age, salary) {
		super(id, firstName, lastName, city, age)
		this.salary = salary
		this.type = "customer"
	}
}