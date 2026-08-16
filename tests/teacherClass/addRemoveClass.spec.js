import {test} from "@playwright/test"
import TeachersLogin from "../../pages/teacherLogin";
import AddRemoveClass from "../../pages/addRemoveClass";
import TeacherLogout from "../../pages/teacherLogout";
import LandingPage from "../../pages/landingPage";

test.describe("Operation on class",()=>{
    const applicationUrl="https://attendance-tracker-4j6u.onrender.com/";
    test("Open and close add new class form",async({page})=>{
        const loginTeacher=new TeachersLogin(page,applicationUrl);
        const addRemoveClass=new AddRemoveClass(page,applicationUrl);
        const logoutTeacher=new TeacherLogout(page,applicationUrl);
        const landingPage=new LandingPage(page,applicationUrl);
        await landingPage.checkLandingPageLoginOptions();
        await loginTeacher.loginToTeacher();
        await addRemoveClass.openAndCloseAddClassForm();
        await logoutTeacher.logoutToTeacher();
        await landingPage.checkLandingPageLoginOptions();
    });
    test("Add new class",async({page})=>{
        const loginTeacher=new TeachersLogin(page,applicationUrl);
        const addRemoveClass=new AddRemoveClass(page,applicationUrl);
        const logoutTeacher=new TeacherLogout(page,applicationUrl);
        const landingPage=new LandingPage(page,applicationUrl);
        await landingPage.checkLandingPageLoginOptions();
        await loginTeacher.loginToTeacher();
        await addRemoveClass.addNewClass();
        await logoutTeacher.logoutToTeacher();
        await landingPage.checkLandingPageLoginOptions();
    });
    test("delete existing class",async({page})=>{
        const loginTeacher=new TeachersLogin(page,applicationUrl);
        const addRemoveClass=new AddRemoveClass(page,applicationUrl);
        const logoutTeacher=new TeacherLogout(page,applicationUrl);
        const landingPage=new LandingPage(page,applicationUrl);
        await landingPage.checkLandingPageLoginOptions();
        await loginTeacher.loginToTeacher();
        await addRemoveClass.deleteExixtingClass();
        await logoutTeacher.logoutToTeacher();
        await landingPage.checkLandingPageLoginOptions(); 
    })
})