function isInRange(num, min, max) {
    return num >= min && num <= max;
}

console.log(isInRange(5, 1, 10)); // true
console.log(isInRange(1, 1, 3)); // false
function toggleBoolean(value) {
    return !value;
}

console.log(toggleBoolean(true)); // false
console.log(toggleBoolean(false)); // true