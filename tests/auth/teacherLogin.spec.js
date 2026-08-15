import { test } from "@playwright/test";
import TeachersLogin from "../../pages/teacherLogin";

test.describe("Teacher login verification",()=>{
    const applicationUrl="https://attendance-tracker-4j6u.onrender.com/"
    test("Successfull login",async({page})=>{
        const teacherLogin=new TeachersLogin(page,applicationUrl);
        await teacherLogin.LoginToTeacher();
    });
    test("Login without registered",async({page})=>{
        const teacherLogin=new TeachersLogin(page,applicationUrl);
        await teacherLogin.loginWithoutRegister();
    });
    test("Empty username and password",async({page})=>{
        const teacherLogin=new TeachersLogin(page,applicationUrl);
        await teacherLogin.emptyUsernameAndPassword();
    });
    test("Empty username",async({page})=>{
        const teacherLogin=new TeachersLogin(page,applicationUrl);
        await teacherLogin.emptyUsernameOnly();
    });
    test("Empty password",async({page})=>{
        const teacherLogin=new TeachersLogin(page,applicationUrl);
        await teacherLogin.emptyPasswordOnly();
    })
})