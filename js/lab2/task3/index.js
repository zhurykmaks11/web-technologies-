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

console.log(getGradeDescription(95));
console.log(getGradeDescription(80));
console.log(getGradeDescription(65));
console.log(getGradeDescription(50));

// function getseason(month) {
//     if (month >= 3 && month <=5) {
//         return "Spring";
//     } else if (month >= 6 && month <=8) {
//         return "summer";
//     } else if (month >= 9 && month <=11) {
//         return "Autumn";
//     } else {
//         return "winter";
//     }
// }
// console.log(getseason(12));
// console.log(getseason(6));
// console.log(getseason(11));
// console.log(getseason(8));

function getseasonter(month){
    return(month >= 3 && month <=5) ? "spring" :
          (month >= 6 && month <=8) ? "summer" :
              (month >= 9 && month <=11) ? "Autumn" : "Winter"
}
console.log(getseasonter(12));
console.log(getseasonter(1));
console.log(getseasonter(7));
console.log(getseasonter(10));