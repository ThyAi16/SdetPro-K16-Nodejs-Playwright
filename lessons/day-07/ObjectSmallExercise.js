//Data
const teo = {
    name: "Teo",
    grades: [9, 2, 6],
};

const ti = JSON.parse(JSON.stringify(teo));
ti.name = 'Ti';
ti.grades = [7, 2, 9];

const tun = JSON.parse(JSON.stringify(teo));
tun.name = 'Tun';
tun.grades = [8, 9, 8];

//Usage
const bestStudentInfo = findBestStudent([teo, ti, tun]);
const {bestStudent, currentHighScore} = bestStudentInfo;
console.log(`The best student with hightest avg score is: ${JSON.stringify(bestStudent)} with average score ${currentHighScore}`);

// Controllers
function findBestStudent(students) {
    let bestStudent = students[0];
    let currentHighScore = 0;
    for(const student of students) { // Lay value trong array ma khong thay doi value trong array
        const averageSroce = calculateAvgSroce(student);
        if(averageSroce >= currentHighScore) {
            bestStudent = student;
            currentHighScore = averageSroce;
        }
    }
    //return {bestStudent: bestStudent, avgSroce: currentHighScore};
    return {bestStudent, currentHighScore}; // Neu key va value giong nhau thi se offout
}

//Destructure: grades
function calculateAvgSroce({grades}) {
    let totalScore = 0;
    for (const grade of grades) {
        totalScore = totalScore + grade;
    }
    return Math.ceil(totalScore / grades.length);
}