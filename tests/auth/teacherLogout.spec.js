import {test} from '@playwright/test'
import TeachersLoginPage from '../../pages/teachersLoginPage';
import TeacherLogout from '../../pages/teacherLogout';
import LandingPage from '../../pages/landingPage';
import TeachersLogin from '../../pages/teacherLogin';

test("Logout to teacher user",async({page})=>{
    const applicationUrl = "https://attendance-tracker-4j6u.onrender.com/";
    const teacherLogin= new TeachersLogin(page,applicationUrl);
    const teacherLogout=new TeacherLogout(page,applicationUrl);
    const landingPage=new LandingPage(page,applicationUrl);
    await teacherLogin.loginToTeacher();
    await teacherLogout.logoutToTeacher();
    await landingPage.checkLandingPageLoginOptions();
});