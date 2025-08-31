// <!-- 11. Create a Rectangle class with width and height. -->

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // Getter for area
    // 12th part 
    get area() {
        return this.width * this.height;
    }


    // Setter for resizing the rectangle
    // 13th part
    set resize(newSize) {
        const [newWidth, newHeight] = newSize

        // Optional: Add Validation here
        if (newWidth <= 0 || newHeight <= 0) {
            console.warn("Width and height must be positive numbers");
            return;
        }

        this.width = newWidth;
        this.height = newHeight;
    }
}

const rect1 = new Rectangle(10, 5)
console.log(`Width: ${rect1.width}`) // Output: width: 10
console.log(`height: ${rect1.height}`) // Output: height: 5


// <!--12. Add a getter area that calculates width * height. -->

console.log(rect1.area)


// <!-- 13. Add a setter resize(newWidth, newHeight). -->

// ✅ Test
const rect2 = new Rectangle(10, 5);
console.log(`Original area: ${rect2.area}`) // 50

// Use setter to resize
rect2.resize = [20, 10];
console.log(`Resized area ${rect2.area}`); // 200