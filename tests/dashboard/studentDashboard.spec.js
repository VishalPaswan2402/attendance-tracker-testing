import { test } from '@playwright/test'
import StudentLogin from '../../pages/students/studentLogin';
import StudentLogout from '../../pages/students/studentLogout';
import LandingPage from '../../pages/landingPage/landingPage';

test("Student dashboard", async ({ page }) => {
    const applicationUrl = "https://attendance-tracker-4j6u.onrender.com/";
    const studentLogin = new StudentLogin(page, applicationUrl);
    const studentLogout = new StudentLogout(page, applicationUrl);
    const landingPage = new LandingPage(page, applicationUrl);
    await studentLogin.loginToStudent();
    await studentLogout.logoutStudent();
    await landingPage.checkLandingPageLoginOptions();
})