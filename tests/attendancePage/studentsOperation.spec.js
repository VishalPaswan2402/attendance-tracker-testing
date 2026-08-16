import {test} from '@playwright/test'
import LandingPage from '../../pages/landingPage';
import TeachersLogin from '../../pages/teacherLogin';
import TeacherLogout from '../../pages/teacherLogout';
import AttendancePage from '../../pages/attendancePage';
import AddRemoveUpdateStudent from '../../pages/addRemoveUpdateStudents';

test.describe("Verify students operations",()=>{
    const applicationUrl = "https://attendance-tracker-4j6u.onrender.com/";
    test("View student details",async({page})=>{
        const landingPage=new LandingPage(page,applicationUrl);
        const teacherLogin=new TeachersLogin(page,applicationUrl);
        const studentsAction=new AddRemoveUpdateStudent(page,applicationUrl);
        const teacherLogout=new TeacherLogout(page,applicationUrl);
        await landingPage.checkLandingPageLoginOptions();
        await teacherLogin.loginToTeacher();
        await studentsAction.viewStudentDetails();
        await teacherLogout.logoutToTeacher();
    });
    test("Edit student name and last attendance details",async({page})=>{
        const landingPage=new LandingPage(page,applicationUrl);
        const teacherLogin=new TeachersLogin(page,applicationUrl);
        const studentsAction=new AddRemoveUpdateStudent(page,applicationUrl);
        const teacherLogout=new TeacherLogout(page,applicationUrl);
        await landingPage.checkLandingPageLoginOptions();
        await teacherLogin.loginToTeacher();
        await studentsAction.editStudentNameAndAttendance();
        await teacherLogout.logoutToTeacher();
    });
    test("Delete student details",async({page})=>{
        const landingPage=new LandingPage(page,applicationUrl);
        const teacherLogin=new TeachersLogin(page,applicationUrl);
        const studentsAction=new AddRemoveUpdateStudent(page,applicationUrl);
        const teacherLogout=new TeacherLogout(page,applicationUrl);
        await landingPage.checkLandingPageLoginOptions();
        await teacherLogin.loginToTeacher();
        await studentsAction.removeStudent();
        await teacherLogout.logoutToTeacher();
    });
    test("Add new Student data",async({page})=>{
        const landingPage=new LandingPage(page,applicationUrl);
        const teacherLogin=new TeachersLogin(page,applicationUrl);
        const studentsAction=new AddRemoveUpdateStudent(page,applicationUrl);
        const teacherLogout=new TeacherLogout(page,applicationUrl);
        await landingPage.checkLandingPageLoginOptions();
        await teacherLogin.loginToTeacher();
        await studentsAction.addNewStudent();
        await teacherLogout.logoutToTeacher();
    })
})