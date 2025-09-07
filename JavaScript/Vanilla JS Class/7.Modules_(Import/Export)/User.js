class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    greet() {
        console.log(`Hello, im ${this.name}`)
    }
}

export default User

// if you export it like this below
export { User }
// you should also import it like this : import { User } from