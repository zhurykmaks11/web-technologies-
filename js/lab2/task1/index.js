// Функція знаходження мінімального та максимального значення у масиві
function findMinMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return { min: null, max: null };
    }
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min, max };
}

console.log(findMinMax([3, 7, 2, 9, 5]));

// Функція порівняння двох об'єктів за їхніми властивостями
function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

const objA = { name: "John", age: 30 };
const objB = { name: "John", age: 30 };
const objC = { name: "Jane", age: 25 };

console.log(compareObjects(objA, objB)); // true
console.log(compareObjects(objA, objC)); // false