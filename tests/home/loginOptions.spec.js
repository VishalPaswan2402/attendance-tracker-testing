import { test } from "@playwright/test";
import StudentsLoginPage from "../../pages/students/studentsLoginPage";
import TeachersLoginPage from "../../pages/teacher/loginLogout/teachersLoginPage";
import CollegeLoginPage from "../../pages/college/collegeLoginPage";

test.describe("Landing page login options", () => {
    const applicationUrl = "https://attendance-tracker-4j6u.onrender.com/";
    test("Student login option opens student login page", async ({ page }) => {
        const studentLogin = new StudentsLoginPage(page, applicationUrl);
        await studentLogin.verifyStudentLoginPage();
    });
    test("Teacher login option opens teacher login page", async ({ page }) => {
        const teacherLogin = new TeachersLoginPage(page, applicationUrl);
        await teacherLogin.verifyTeacherLoginPage();
    });
    test("College login option opens college login page", async ({ page }) => {
        const collegeLogin = new CollegeLoginPage(page, applicationUrl);
        await collegeLogin.verifyCollegeLoginPage();
    })
});