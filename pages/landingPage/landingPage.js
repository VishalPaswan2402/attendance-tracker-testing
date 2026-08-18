import { expect } from "@playwright/test";

class LandingPage {
    constructor(page,applicationUrl) {
        this.page = page;
        this.applicationUrl=applicationUrl;
        this.studentLogin = "a[href='/Attendance-Tracker/Students-Login']";
        this.teacherLogin = "a[href='/Attendance-Tracker/Teacher-Login']";
        this.collegeLogin = "//a[normalize-space()='College Login']";
    }
    async checkLandingPageLoginOptions() {
        await this.page.goto(this.applicationUrl);
        await expect(this.page.locator(this.studentLogin)).toBeVisible();
        await expect(this.page.locator(this.teacherLogin)).toBeVisible();
        await expect(this.page.locator(this.collegeLogin)).toBeVisible();
    }
};

export default LandingPage;