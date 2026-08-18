import { test } from '@playwright/test'
import TeachersLogin from '../../pages/teacher/loginLogout/teacherLogin';
import TeacherLogout from '../../pages/teacher/loginLogout/teacherLogout';
import LandingPage from '../../pages/landingPage/landingPage';

test("Teacher dashboard", async ({ page }) => {
    const applicationUrl = "https://attendance-tracker-4j6u.onrender.com/";
    const teacherLogin = new TeachersLogin(page, applicationUrl);
    const teacherLogout = new TeacherLogout(page, applicationUrl);
    const landingPage = new LandingPage(page, applicationUrl);
    await teacherLogin.loginToTeacher();
    await teacherLogout.logoutToTeacher();
    await landingPage.checkLandingPageLoginOptions();
})