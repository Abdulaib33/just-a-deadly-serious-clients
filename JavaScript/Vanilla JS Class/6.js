// <!-- 17. Extend Array into CustomArray with a new method first() that returns the first element.-->

class CustomArray extends Array { // go check discord One-Shot_Script_Client > classes
    first() {
        return this[0]
    }
}


const myArray = new CustomArray(10, 123, 32)

console.log(myArray.first())
console.log(myArray instanceof Array) // we can compare an extended instance with it extend
console.log(myArray instanceof CustomArray) // i have no idea why it's true

// <!-- 18. Extend Error into ValidationError that always prefixes the message with "Validation failed:". -->


class ValidationError extends Error {
    constructor(message) {
        // Call the constructor with the modified message 
        super(`Validation failed: ${message}`);
        this.name = this.constructor.name; // This ensure the name is set to "ValidationError"
    }
}

const error = new ValidationError("Invalid input or email is required");
console.log(error.message) // Output: "Validation failed: Invalid input"
console.log(error instanceof ValidationError); // true
console.log(error instanceof Error); // true
console.log(error.name) // Output: ValidationError


// <!-- 19. Extend Map into CaseInsensitiveMap where keys are always stored lowercase.  -->

console.log(19)

class CaseInsensitiveMap extends Map {
    constructor(entries = []) {
        super()
        for (let [key, value] of entries) {
            this.set(key, value)
        }
    }

    _normalizeKey(key){
        return (typeof key === "string") ? key.toLowerCase() : key;
    }

    set(key, value) {
        return super.set(this._normalizeKey(key), value)
    }

    get(key) {
        return super.get(this._normalizeKey(key))
    }

    had(key) {
        return super.has(this._normalizeKey(key))
    }

    delete(key) {
        return super.delete(this._normalizeKey(key))
    }
}


const ciMap = new CaseInsensitiveMap();

ciMap.set("Name", "Alice");
ciMap.set("AGE", 30);

console.log(ciMap.get("name")); // "Alice"
console.log(ciMap.get("AGE")); // 30
console.log(ciMap.get("age")); // 30
console.log(ciMap.has("nAmE")); // true

ciMap.delete("AGE");
console.log(ciMap.has("age")); // false

