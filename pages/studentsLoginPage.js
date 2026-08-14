import { expect } from "@playwright/test";

class StudentsLoginPage {
    constructor(page,applicationUrl) {
        this.page = page;
        this.applicationUrl=applicationUrl;
        this.studentLogin = "a[href='/Attendance-Tracker/Students-Login']";
        this.loginPageTitle=".card-title";
        this.submitButton="button[type='submit']";
    }
    async verifyStudentLoginPage() {
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.studentLogin);
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.locator(this.loginPageTitle)).toBeVisible();
        await expect(this.page.locator(this.submitButton)).toBeVisible();
    }
};

export default StudentsLoginPage;