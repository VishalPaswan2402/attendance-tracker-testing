import { test } from '@playwright/test'
import LandingPage from '../../pages/landingPage/landingPage';
import TeachersLogin from '../../pages/teacher/loginLogout/teacherLogin';
import PrintFilterAttendance from '../../pages/teacher/attendanceOptions/printAndFilterAttendance';
import TeacherLogout from '../../pages/teacher/loginLogout/teacherLogout';


test("Print students attendance sheet", async ({ page }) => {
    const applicationUrl = "https://attendance-tracker-4j6u.onrender.com/";
    const landingPage = new LandingPage(page, applicationUrl);
    const teacherLogin = new TeachersLogin(page, applicationUrl);
    const printAndFilterAttendance = new PrintFilterAttendance(page, applicationUrl);
    const teacherLogout = new TeacherLogout(page, applicationUrl);
    await landingPage.checkLandingPageLoginOptions();
    await teacherLogin.loginToTeacher();
    await printAndFilterAttendance.printAttendance();
});