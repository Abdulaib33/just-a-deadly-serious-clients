class Teacher{
    constructor(name, subject) {
        this.name = name
        this.subject = subject
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}`)
    }
}

export default Teacher


// if you export it like this below
export { Teacher }
// you should also import it like this : import { Teacher } from