import {test} from '@playwright/test';
import LandingPage from '../../pages/landingPage';
import TeachersLogin from '../../pages/teacherLogin';
import TeacherLogout from '../../pages/teacherLogout';
import MarkAttendanceOfStudents from '../../pages/markAttendance';

test("Mark student attendance",async({page})=>{
    const applicationUrl="https://attendance-tracker-4j6u.onrender.com/";
    const landingPage=new LandingPage(page,applicationUrl);
    const teacherLogin=new TeachersLogin(page,applicationUrl);
    const markAttendanceOfStudents=new MarkAttendanceOfStudents(page,applicationUrl);
    const teacherLogout=new TeacherLogout(page,applicationUrl);
    await landingPage.checkLandingPageLoginOptions();
    await teacherLogin.loginToTeacher();
    await markAttendanceOfStudents.markAttendance();
    await teacherLogout.logoutToTeacher();
    await landingPage.checkLandingPageLoginOptions();
})