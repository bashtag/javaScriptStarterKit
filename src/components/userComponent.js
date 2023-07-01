import AbstractUser from "../modules/abstractUser.js"
import UserService from "../services/userService.js"
import MongoLogger from "../crossCuttingConcerns/logging/mongoLogger.js"
import Customer from "../modules/Customer.js"

console.log("User Component is loaded")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new AbstractUser(1,"Engin","Demiroğ","Ankara")
let user2 = new AbstractUser(2,"Baran","Gökçekli","Muğla")
userService.add(user1)
userService.add(user2)

// console.log(userService.listErrors())
// console.log(userService.getById(2))

let customer = {id:1, firstName:"Engin"}

//prototyping
customer.lastName = "Demiroğ"

console.log("--------------------------")

let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","fdgdfg");

userService.add(customerToAdd)
console.log(userService.listCustomers())
console.log(userService.listEmployees())
console.log(userService.listErrors())
console.log(userService.getCustomersSorted())