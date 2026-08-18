import { test } from '@playwright/test';
import LandingPage from '../../pages/landingPage/landingPage';
import TeachersLogin from '../../pages/teacher/loginLogout/teacherLogin';
import AttendancePage from '../../pages/teacher/attendanceOptions/attendancePage';
import TeacherLogout from '../../pages/teacher/loginLogout/teacherLogout';


test("View attendance page", async ({ page }) => {
    const applicationUrl = "https://attendance-tracker-4j6u.onrender.com/";
    const landingPage = new LandingPage(page, applicationUrl);
    const teacherLogin = new TeachersLogin(page, applicationUrl);
    const attendancePage = new AttendancePage(page, applicationUrl);
    const teacherLogout = new TeacherLogout(page, applicationUrl);
    await landingPage.checkLandingPageLoginOptions();
    await teacherLogin.loginToTeacher();
    await attendancePage.viewAttendancePage();
    await teacherLogout.logoutToTeacher();
})