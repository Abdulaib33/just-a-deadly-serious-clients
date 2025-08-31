// <!-- 8. Create a MathUtils class with a static method add(a, b) and randomInt(min, max). -->

class MathUtils {
    // 9th exercice part, and this belong to the Option 2
    static PI = 3.14159

    static add(a, b) {
        return a + b;
    }

    static randomInt(min, max) {
        // Ensure min and max are integers
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}

// Test the static methods
console.log(MathUtils.add(5, 7)); // Output: 12
console.log(MathUtils.randomInt(1, 10)); // Output: a number between 1 and 10

// <!-- 9. Add a static property PI = 3.14159. -->

    // Option 1: Define the PI outside the class MathUtils
    MathUtils.PI = 3.14159
    console.log(MathUtils.PI) // Output: 3.14159

    // Option 2: Define the PI inside the Class MathUtils
    console.log(MathUtils.PI) // Output: 3.14159


// <!-- 10. Show that you can call them without creating an instance.  -->

    // ✅ Call static methods and properties WITHOUT creating an instance
    console.log(MathUtils.add(10, 15)); // Ouput: 25
    console.log(MathUtils.randomInt(1, 100)) // Output: Random Number
    console.log(MathUtils.PI); // Output: 3.14159

    // ❌ This would be unnecessary and not how static is used:
    const m = new MathUtils();        // Not needed
    console.log(m.add(1, 2));         // ❌ This will throw an error: m.add is not a function