import { users } from "../data/users.js";
import DataError from "../modules/dataError.js";
import AbstractUser from "../modules/abstractUser.js";


// default: default class for this file
export default class	UserService {
	// private properties
	#employees = []
	#customers = []
	#errors = []
	#loggerService

	/**
	 * Constructs with a logger
	 * Makes load operation to load data from users.js
	 * @param {BaseLogger} loggerService 
	 */
	constructor(loggerService) {
		this.#loggerService = loggerService
		this.#load()
	}

	/**
	 * private load function to load data in users.js to this class
	 */
	#load() {
		for (const user of users) {
			this.add(user)
		}
	}

	/**
	 * Add a user to an appropriate list.
	 * If an error occurs then push the error to the errors list
	 * @param {AbstractUser} abstractUser 
	 */
	add(abstractUser) {
		if (abstractUser.type == "customer") {
			if (!this.#checkCustomerValidtyForErrors(abstractUser))
				this.#customers.push(abstractUser)
		}
		else if (abstractUser.type == "employee") {
			if (!this.#checkEmployeeValidtyForErrors(abstractUser))
				this.#employees.push(abstractUser)
		}
		else
			this.#errors.push(new DataError("Wrong user type" , abstractUser))

		this.#loggerService.log(abstractUser)
	}

	
	/**
	 * Check user validty.
	 * If there will be a problem, then DataError occurs in of errors list
	 * @param {AbstractUser} abstractUser 
	 * @param {string} extension 
	 * @returns Is there an error or not
	 */
	#checkUserValidtyForErrors(abstractUser, extension) {
		let	required = "id firstName lastName age city " + extension
		let requiredFields = required.split(" ")
		let	hasErrors = false

		for (const field of requiredFields) {
			if (!abstractUser[field]) {
				hasErrors = true
				this.#errors.push(new DataError(`Validation problem. ${field} is required.`, abstractUser))
			}
		}

		if (Number.isNaN(Number.parseInt(+abstractUser.age))) {
			hasErrors = true
			this.#errors.push(new DataError(`Validation problem. ${abstractUser.age} is not a number.`, abstractUser))
		}

		return (hasErrors)
	}

	/**
	 * 
	 * @param {AbstractUser} abstractUser 
	 * @returns Is there an error or not
	 * 
	 */
	#checkCustomerValidtyForErrors(abstractUser) {
		return (this.#checkUserValidtyForErrors(abstractUser, "creditCardNumber"))
	}

	/**
	 * 
	 * @param {AbstractUser} abstractUser 
	 * @returns Is there an error or not
	 * 
	 */
	#checkEmployeeValidtyForErrors(abstractUser) {
		return (this.#checkUserValidtyForErrors(abstractUser, "salary"))
	}

	/**
	 * list of customers
	 * @returns {Array<Customer>}
	 */
	listCustomers() {
		return (this.#customers)
	}

	/**
	 * list of employees
	 * @returns {Array<Employee>}
	 */
	listEmployees() {
		return (this.#employees)
	}

	/**
	 * list of errors
	 * @returns {Array<DataError>}
	 */
	listErrors() {
		return (this.#errors)
	}

	/**
	 * Fetch the user using id
	 * @param {number} id 
	 * @returns user
	 */
	getById(id) {
		let user = this.#customers.find(c => c.id == id)

		if (!user)
			return (user)
		return (this.#employees.find(e => e.id == id))
	}

	/**
	 * 
	 * @returns sorted customer array
	 */
	getCustomersSorted() {
		return (this.#customers.sort((c1, c2) => {
			if (c1.id > c2.id)
				return (1);
			else if (c1.firstName === c2.firstName)
				return (0);
			else
				return (-1);
		}))
	}
}