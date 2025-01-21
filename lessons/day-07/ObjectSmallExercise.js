//Data
const teo = {name: 'Teo', grades: [9, 8, 6]};
const ti = JSON.parse(JSON.stringify(teo));
ti.name = " Ti";
ti.grades = [2, 3, 4];

const tun = JSON.parse(JSON.stringify(teo));
tun.name = "Tun";
tun.grades = [5, 6, 7];

//Usage
const bestStudentInfo = findBestStudent([teo, ti, tun]);
const {bestStudent, currentHightScore} = bestStudentInfo;
console.log(`The best student is: ${JSON.stringify(bestStudent)} with average score ${currentHightScore}`);

//Controllers
function findBestStudent(students) {
    let bestStudent = students[0];
    let currentHightScore = 0;
    //For of: Lay tung gia gtri trong mang, khong thay doi gia tri trong mang
    for (const student of students) {
        const averageScore = calculateAverageScore(student);
        if( averageScore >= currentHightScore) {
            bestStudent = student;
            currentHightScore = averageScore;
        }
    }
    return {
        bestStudent,
        currentHightScore
    };
}

function calculateAverageScore({grades}) {
    let totalScore = 0;
    for (const grade of grades) {
        totalScore = totalScore + grade;
        //totalScore += grade;
    }
    return Math.ceil(totalScore / grades.length);
}
