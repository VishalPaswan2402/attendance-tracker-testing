import { test } from "@playwright/test";
import StudentLogin from "../../pages/students/studentLogin";

test.describe("Student login test", () => {
    const applicationUrl = "https://attendance-tracker-4j6u.onrender.com/";
    test("Successfull login", async ({ page }) => {
        const loginToStudent = new StudentLogin(page, applicationUrl);
        await loginToStudent.loginToStudent();
    });
    test("Invalid student data", async ({ page }) => {
        const loginToStudent = new StudentLogin(page, applicationUrl);
        await loginToStudent.studentNotFound();
    });
    test("Empty all inputs field", async ({ page }) => {
        const loginToStudent = new StudentLogin(page, applicationUrl);
        await loginToStudent.emptyAllInputFields();
    });
    test("Empty student name only", async ({ page }) => {
        const loginToStudent = new StudentLogin(page, applicationUrl);
        await loginToStudent.EmptyNameOnly();
    });
    test("Empty student name and roll no. only", async ({ page }) => {
        const loginToStudent = new StudentLogin(page, applicationUrl);
        await loginToStudent.EmptyNameAndRollNoOnly();
    });
    test("Empty student roll no. and semester only", async ({ page }) => {
        const loginToStudent = new StudentLogin(page, applicationUrl);
        await loginToStudent.EmptyRollNoAndSemesterOnly();
    });
    test("Empty student semester and section only", async ({ page }) => {
        const loginToStudent = new StudentLogin(page, applicationUrl);
        await loginToStudent.EmptySemesterAndSectionOnly();
    });
    test("Empty student section and college only", async ({ page }) => {
        const loginToStudent = new StudentLogin(page, applicationUrl);
        await loginToStudent.EmptySectionAndCollegeOnly();
    });
});
