// ## Exercise 1
// There is a JSON file with students. Make a call to the file and get the following data from it: 
// * All students with an average grade higher than 3
// * All female student names with an average grade of 5
// * All male student full names who live in Skopje and are over 18 years old
// * The average grades of all female students over the age  of 24
// * All male students with a name starting with B and average grade over 2

// Use higher order functions to find the answers
// **Link:** https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json

BASE_URL = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"

async function fetchDataFromAPI() {
    const response = await fetch(BASE_URL);
    const data = await response.json()
    // console.log(data);
    console.log("---------------------")
    let gradeHigherthan3 = data.filter (grade => grade.averageGrade > 3);

    console.log("These are the students with avarage grade higher than 3:", gradeHigherthan3);
    console.log("---------------------")
    let femaleStudents = data
                            .filter(studentGender => studentGender.gender === "Female")
                            .filter(grade => grade.averageGrade === 5)
                            .map(studentsName => studentsName.firstName);
    console.log("These are the female student names with average grade of 5:", femaleStudents);
    console.log("---------------------");
    let maleStudents = data
                            .filter(studentGender => studentGender.gender === "Male")
                            .filter(age => age.age >= 18)
                            .map(studentsFullName => `${studentsFullName.firstName} ${studentsFullName.lastName}`);
    console.log("This are the male student full names who live in Skopje and are over 18 years old:", maleStudents);
    console.log("---------------------");
    let femaleOver24 = data
                            .filter(ageOver24 => ageOver24.age >= 24)
                            .filter(studentGender => studentGender.gender === "Female")
                            .map (studentAgerageGrade => studentAgerageGrade.averageGrade);
    console.log("This are the average grades of all female students over the age  of 24", femaleOver24);
    console.log("---------------------");
    let nameB = data
                    .filter(studentGender => studentGender.gender === "Male")
                    .filter(studentNameB => studentNameB.firstName.charAt(0) === "B")
                    .filter(grade => grade.averageGrade > 2);
    console.log("These are the male students with a name starting with B and average grade over 2:", nameB);
    
}

fetchDataFromAPI();





