// Завдання 1
let fruits = ["яблуко", "банан", "вишня", "груша", "апельсин"];

function removeLastElement() {
    fruits.pop();
    console.log("1.1 Оновлений масив:", fruits);
}

function addPineapple() {
    fruits.unshift("ананас");
    console.log("1.2 Масив після додавання ананаса:", fruits);
}

function sortFruitsReverse() {
    fruits.sort().reverse();
    console.log("1.3 Відсортований масив:", fruits);
}

function findAppleIndex() {
    console.log("1.4 Індекс яблука:", fruits.indexOf("яблуко"));
}

// Виконання завдання 1
removeLastElement();
addPineapple();
sortFruitsReverse();
findAppleIndex();

// Завдання 2
let colors = ["червоний", "синій", "жовтий", "темно-синій", "зелений"];

function findLongestAndShortest() {
    let longest = colors.reduce((a, b) => (a.length > b.length ? a : b));
    let shortest = colors.reduce((a, b) => (a.length < b.length ? a : b));
    console.log("2.1 Найдовший:", longest, ", Найкоротший:", shortest);
}

function filterBlueColors() {
    colors = colors.filter(color => color.includes("синій"));
    console.log("2.2 Масив після фільтрації:", colors);
}

function joinColors() {
    console.log("2.3 Об'єднаний рядок:", colors.join(", "));
}

// Виконання завдання 2
findLongestAndShortest();
filterBlueColors();
joinColors();

// Завдання 3
let employees = [
    { name: "Іван", age: 30, position: "розробник" },
    { name: "Олег", age: 25, position: "менеджер" },
    { name: "Марія", age: 27, position: "розробник" }
];

function sortEmployeesByName() {
    employees.sort((a, b) => a.name.localeCompare(b.name));
    console.log("3.1 Відсортований список:", employees);
}

function findDevelopers() {
    console.log("3.2 Розробники:", employees.filter(emp => emp.position === "розробник"));
}

function removeEmployeeByAge(age) {
    employees = employees.filter(emp => emp.age !== age);
    console.log("3.3 Після видалення:", employees);
}

function addEmployee() {
    employees.push({ name: "Андрій", age: 35, position: "тестувальник" });
    console.log("3.4 Оновлений список:", employees);
}

// Виконання завдання 3
sortEmployeesByName();
findDevelopers();
removeEmployeeByAge(25);
addEmployee();

// Завдання 4
let students = [
    { name: "Олексій", age: 21, course: 3 },
    { name: "Наталя", age: 22, course: 2 },
    { name: "Дмитро", age: 19, course: 1 }
];

function removeStudent() {
    students = students.filter(student => student.name !== "Олексій");
    console.log("4.1 Після видалення Олексія:", students);
}

function addStudent() {
    students.push({ name: "Андрій", age: 23, course: 3 });
    console.log("4.2 Додано студента:", students);
}

function sortStudentsByAge() {
    students.sort((a, b) => b.age - a.age);
    console.log("4.3 Відсортовані за віком:", students);
}

function findThirdCourseStudent() {
    console.log("4.4 Студент 3-го курсу:", students.find(student => student.course === 3));
}

// Виконання завдання 4
removeStudent();
addStudent();
sortStudentsByAge();
findThirdCourseStudent();

// Завдання 5
let numbers = [1, 2, 3, 4, 5];

function squareNumbers() {
    console.log("5.1 Квадрати чисел:", numbers.map(num => num ** 2));
}

function filterEvenNumbers() {
    console.log("5.2 Парні числа:", numbers.filter(num => num % 2 === 0));
}

function sumNumbers() {
    console.log("5.3 Сума чисел:", numbers.reduce((sum, num) => sum + num, 0));
}

function addMoreNumbers() {
    numbers = numbers.concat([6, 7, 8, 9, 10]);
    console.log("5.4 Додані числа:", numbers);
}

function removeFirstThree() {
    numbers.splice(0, 3);
    console.log("5.5 Після видалення перших трьох:", numbers);
}

// Виконання завдання 5
squareNumbers();
filterEvenNumbers();
sumNumbers();
addMoreNumbers();
removeFirstThree();

// Завдання 6 (Управління бібліотекою)
let library = [
    { title: "Книга 1", author: "Автор 1", genre: "Фантастика", pages: 200, isAvailable: true }
];

function addBook(title, author, genre, pages) {
    library.push({ title, author, genre, pages, isAvailable: true });
}

function removeBook(title) {
    library = library.filter(book => book.title !== title);
}

function findBooksByAuthor(author) {
    console.log("6.1 Книги автора:", library.filter(book => book.author === author));
}

function toggleBookAvailability(title, isBorrowed) {
    let book = library.find(book => book.title === title);
    if (book) book.isAvailable = !isBorrowed;
}

function sortBooksByPages() {
    library.sort((a, b) => a.pages - b.pages);
    console.log("6.2 Відсортовані книги:", library);
}

function getBooksStatistics() {
    console.log("6.3 Статистика:", {
        total: library.length,
        available: library.filter(book => book.isAvailable).length,
        borrowed: library.filter(book => !book.isAvailable).length,
        avgPages: library.reduce((sum, book) => sum + book.pages, 0) / library.length
    });
}

// Виконання завдання 6
addBook("Книга 2", "Автор 2", "Детектив", 300);
removeBook("Книга 1");
findBooksByAuthor("Автор 2");
toggleBookAvailability("Книга 2", true);
sortBooksByPages();
getBooksStatistics();

// Завдання 7
let student = { name: "Іван", age: 20, course: 2 };

function addSubjects() {
    student.subjects = ["Математика", "Фізика", "Програмування"];
}

function removeAge() {
    delete student.age;
}

function printStudent() {
    console.log("7.1 Оновлений об'єкт:", student);
}

// Виконання завдання 7
addSubjects();
removeAge();
printStudent();
