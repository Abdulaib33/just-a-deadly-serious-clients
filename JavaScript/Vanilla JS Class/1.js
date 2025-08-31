    // <!-- 1. Create a User class with name and email properties. Add a greet() method. -->
console.log("tes")

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and my mail is ${this.email}`)
    }

}

const user1 = new User("Abdoulaye", "Abdulaibayo08@gmail.com")
user1.greet(); // Output: Hello, my name is Abdoulaye and my mail is Abdulaibayo08@gmail.com



// <!-- 2. Make 3 users and call their greet() method. -->

const user2 = new User("Maryam", "Maryambayo08@gmail.com")
user2.greet();

const user3 = new User("Nasroulaye", "Nasroulayebah08@gmail.com")
user3.greet()




//     <!-- 3. Add a changeEmail(newEmail) method.  -->

class User3rd {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet(){
        console.log(`My Name Is ${this.name} And My Professional Adress Mail is ${this.email}`)
    }


    changeEmail(newEmail){
        this.email = newEmail;
        console.log(`${this.name}'s Email has been updated to ${this.email}`)
    }


}

const user3rd = new User3rd("Abdoulaye", "Abdulaibayo08@gmail.com")
user3rd.greet()

user3rd.changeEmail("Abdulaibayobackend@gmail.com")