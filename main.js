#! /usr/bin/env node
import chalk from "Chalk";
import inquirer from "inquirer";
//Create Class of Student
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
//Create Class of Person
class Person {
    students = [];
    addstudent(obj) {
        this.students.push(obj);
    }
}
//Create array of person
const persons = new Person();
//Create a function of ProgramStart
const programStart = async (persons) => {
    do {
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Would you like to talk to someone?",
            choices: ["Self", "Student", "Parents", "Exit"],
        });
        if (ans.select == "Self") {
            console.log(chalk.bold.green("\nI am talking with myself."));
            console.log(chalk.bold.green("\nI am not feeling well.\n"));
        }
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Which student do you want to talk to?",
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addstudent(name);
                console.log(chalk.bold.bgBlue(`Hello, I am ${name.name}.`));
                console.log(persons.students);
            }
            if (student) {
                console.log(chalk.bold.blue(`Hello, I am ${student.name} and I am Fine.........`));
                console.log(persons.students);
            }
        }
        if (ans.select == "Parents") {
            console.log(chalk.bold.green("\nHow is going your Child Studies?\n"));
        }
        if (ans.select == "Exit") {
            console.log("\n", "=".repeat(70));
            console.log(chalk.bold.red.italic("\n\t\tThank You for using our application."));
            console.log("\n", "=".repeat(70));
            process.exit();
        }
    } while (true);
};
programStart(persons);
