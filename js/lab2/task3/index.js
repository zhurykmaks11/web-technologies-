// Функція визначення словесної оцінки студента
function getGradeDescription(grade) {
    if (grade >= 90) {
        return "Відмінно";
    } else if (grade >= 75) {
        return "Добре";
    } else if (grade >= 60) {
        return "Задовільно";
    } else {
        return "Незадовільно";
    }
}

console.log(getGradeDescription(95)); // Відмінно
console.log(getGradeDescription(80)); // Добре
console.log(getGradeDescription(65)); // Задовільно
console.log(getGradeDescription(50)); // Незадовільно

