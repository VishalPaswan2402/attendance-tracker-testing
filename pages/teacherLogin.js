import {expect} from '@playwright/test';
import teacherData from '../teacherData.json' with{type:'json'};

class TeachersLogin {
    constructor(page,applicationUrl) {
        this.page=page;
        this.applicationUrl=applicationUrl;
        this.teacherLoginButton="//a[@href='/Attendance-Tracker/Teacher-Login']";
        this.teacherName='[name="username"]';
        this.teacherPassword='input[name="password"]';
        this.submitButton="button[type='submit']";
        this.allClasses='All Classes';
        this.logout='Log Out';
        this.addNewClass='#createNewClass';
        this.flashMessage="#flashId";
        this.failText='Password or username is incorrect';
        this.validateLoginForm="form.was-validated";
    };
    async LoginToTeacher(){
        await this.page.goto(this.applicationUrl);
        await this.page.waitForLoadState('networkidle');
        await this.page.click(this.teacherLoginButton);
        await this.page.waitForLoadState('networkidle');
        await this.page.fill(this.teacherName,teacherData.registered[0].name);
        await this.page.fill(this.teacherPassword,teacherData.registered[0].password);
        await this.page.click(this.submitButton);
        await expect(this.page.getByText(this.allClasses)).toBeVisible();
        await expect(this.page.locator(this.addNewClass)).toBeVisible();
        await expect(this.page.getByText(this.logout)).toBeVisible();
    };
    async loginWithoutRegister(){
        await this.page.goto(this.applicationUrl);
        await this.page.waitForLoadState("networkidle");
        await this.page.click(this.teacherLoginButton);
        await this.page.waitForLoadState("networkidle");
        await this.page.fill(this.teacherName,teacherData.notRegistered[0].name);
        await this.page.fill(this.teacherPassword,teacherData.notRegistered[0].password);
        await this.page.click(this.submitButton);
        await expect(this.page.locator('#flashId')).toContainText('Password or username is incorrect');
    }
    async emptyUsernameAndPassword() {
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.teacherLoginButton);
        await this.page.waitForLoadState("networkidle");
        await this.page.click(this.submitButton);
        await expect(this.page.locator(this.validateLoginForm)).toBeVisible();
    }
    async emptyUsernameOnly() {
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.teacherLoginButton);
        await this.page.waitForLoadState("networkidle");
        await this.page.fill(this.teacherPassword,teacherData.registered[0].password);
        await this.page.click(this.submitButton);
        await expect(this.page.locator(this.validateLoginForm)).toBeVisible();
    }
    async emptyPasswordOnly() {
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.teacherLoginButton);
        await this.page.waitForLoadState("networkidle");
        await this.page.fill(this.teacherName,teacherData.registered[0].name);
        await this.page.click(this.submitButton);
        await expect(this.page.locator(this.validateLoginForm)).toBeVisible();
    }
};

export default TeachersLogin;