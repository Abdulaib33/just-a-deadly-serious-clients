    // <!-- 4. Create a Person class with name and age. Add introduce().. -->


    class Person {

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }


        introduce() {
            return(`Hello my name is ${this.name} and im ${this.age} old`)
        }

    }

    const person1 = new Person("Abdoulaye", "Maybe 21(im not sure, i never celebrate anniversary)")
    console.log(person1.introduce())


    // <!-- 5. Extend it into a Student class with grade and a study() method. -->

    class Student extends Person {
        constructor(name, age, grade){
            super(name, age)
            this.grade = grade
        }

        study(){
            return(this.introduce() + `and my grade are ${this.grade}`)
        }
    }   

    let student1 = new Student("Abdoulaye", "22", "A*")
    console.log(student1.study())


    // <!-- 6. Extend it further into a Teacher with subject and teach(). -->


    class Teacher extends Student {
        constructor(name, age, grade, subject) {
            super(name, age, grade)
            this.subject = subject
        }

        teach() {
            return(this.study() + `in ${this.subject} subject`)
        }
    }

    let teacher1 = new Teacher("Abdoulaye", 22, "A*", "Mathematic")
    console.log(teacher1.teach())

    // <!-- 7. Create instances and test introduce(), study(), and teach(). -->


    const person2 = new Person("Abdoulaye", "Maybe 21 im not sure");
    console.log(person2.introduce())

    const student2 = new Student("Maryam", 20, "A")
    console.log(student2.study())

    const teacher2 = new Teacher("Ibrahim", 35, "A+", "Science")
    console.log(teacher2.teach())