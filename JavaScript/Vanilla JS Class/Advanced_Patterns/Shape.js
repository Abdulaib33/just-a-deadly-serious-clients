// Shape.js
// ✅ 26. Create a Shape “abstract” class

// JavaScript doesn't have true abstract classes, but you can simulate one by throwing an error in unimplemented methods.
class Shape {
    constructor() {
        if (this.constructor === shape) {
            throw new Error("Shape is an abstract class and cannot be instantiated directly")
        }
    }

    getArea() {
        throw new Error("getArea() must be implemented in subclass.")
    }
}

export default Shape;