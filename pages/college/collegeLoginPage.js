import { expect } from "@playwright/test";

class CollegeLoginPage {
    constructor(page,applicationUrl) {
        this.page = page;
        this.applicationUrl=applicationUrl;
        this.collegeLogin = "//a[normalize-space()='College Login']";
        this.loginPageTitle=".card-title";
        this.submitButton="button[type='submit']";
        this.collegeSignupButton=':text-is("College SignUp")';
        this.forgetPassword=':text-is("Forgot Password?")';
    }
    async verifyCollegeLoginPage() {
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.collegeLogin);
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.locator(this.loginPageTitle)).toBeVisible();
        await expect(this.page.locator(this.submitButton)).toBeVisible();
        await expect(this.page.locator(this.collegeSignupButton)).toBeVisible();
        await expect(this.page.locator(this.forgetPassword)).toBeVisible();
    }
};

export default CollegeLoginPage;