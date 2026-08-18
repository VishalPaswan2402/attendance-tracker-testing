import { test } from '@playwright/test'
import LandingPage from '../../pages/landingPage/landingPage';
import StudentLogin from '../../pages/students/studentLogin';
import StudentLogout from '../../pages/students/studentLogout';

test("Logout student user", async ({ page }) => {
    const applicationUrl = "https://attendance-tracker-4j6u.onrender.com/";
    const loginStudent = new StudentLogin(page, applicationUrl);
    const logoutStudent = new StudentLogout(page, applicationUrl);
    const landingPage = new LandingPage(page, applicationUrl);
    await loginStudent.loginToStudent();
    await logoutStudent.logoutStudent();
    await landingPage.checkLandingPageLoginOptions();
});