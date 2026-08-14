import { expect } from "@playwright/test";

class TeachersLoginPage {
    constructor(page,applicationUrl) {
        this.page = page;
        this.applicationUrl=applicationUrl;
        this.teacherLogin = "a[href='/Attendance-Tracker/Teacher-Login']";
        this.loginPageTitle=".card-title";
        this.submitButton="button[type='submit']";
        this.teacherSignupButton="a[href='/Attendance-Tracker/Teacher-SignUp']";
        this.forgetPassword=':text-is("Forgot Password?")';
    }
    async verifyTeacherLoginPage() {
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.teacherLogin);
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.locator(this.loginPageTitle)).toBeVisible();
        await expect(this.page.locator(this.submitButton)).toBeVisible();
        await expect(this.page.locator(this.teacherSignupButton)).toBeVisible();
        await expect(this.page.locator(this.forgetPassword)).toBeVisible();
    }
};

export default TeachersLoginPage;