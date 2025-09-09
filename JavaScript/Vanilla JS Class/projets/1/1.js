// 1. User Management System (Mini CRM)

//     Classes: User, Admin, Customer

//     Features:

//         Add/change email (changeEmail)

//         Different roles (Admin extends User)

//         Store users in a CaseInsensitiveMap for fast lookup

//     Practice: inheritance, Map, modules, export/import.

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet() {
        console.log(`hello ${this.name}, how are you doing ?`)
    }

    set changeEmail(newEmail) { // you can do it without set, but i just wanted to practice what i have understand about get and set

        if (!newEmal.includes("@")) {
            console.error("Invalid email")
        }
        this.email = newEmail

    }
}



class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    banUser(user) {
        console.log(`${user.name} has been banned`);
    }

    promoteUser(user) {
        console.log(`${user.name} has been promoted`)
    }
}



class Customer extends User{
    constructor(name, email) {
        super(name, email)
    }
}


class CaseInsensitiveMap{
    constructor() {
        this.map = new Map();
    }

    set(key, value) {
        this.map.set(key.toLowerCase(), value)
    }

    get(key) {
        return this.map.get(key.toLowerCase())
    }

    has(key) {
        return this.map.has(key.toLowerCase())
    }

    delete(key) {
        return this.map.delete(key.toLowerCase())
    }

    [Symbol.iterator] () {
        return this.map[Symbol.iterator]()
    }
}

// Testing 

const users = new CaseInsensitiveMap();

const admin = new Admin("AdminGuy", "admin@exemple.com");
const customer = new Customer("Alice", "alice@exemple.com");

users.set(admin.email, admin);
users.set(customer.email, customer)

console.log(users.get("ALICE@EXEMPLE.COM")); // ✅ works

admin.banUser(customer) // ✅ works