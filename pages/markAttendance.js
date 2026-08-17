import { expect } from "@playwright/test";

class MarkAttendanceOfStudents {
    constructor(page, applicationUrl) {
        this.page = page;
        this.applicationUrl = applicationUrl;
        this.viewButton = 'a.btn.btn-primary.allBtns';
        this.submitAttendanceButton = "#subAttendence";
        this.allClasses = ':text("All Classes")';
        this.viewEditStudentIcon = '#editIcons';
        this.presentButton = '.preP';
        this.absentButton = '.absA'
        this.buttonContainer = '#buttonContainer';
        this.submitFinalAttendance = "#submitAllAttend";
        this.cancleFinalAttendance = "#cancleSub";
        this.totalClasses = ".to1";
    }
    async markAttendance() {
        const totalClasses = await this.page.locator(this.viewButton).count();
        if (totalClasses > 1) {
            await this.page.locator(this.viewButton).nth(0).click();
            await expect(this.page.locator(this.submitAttendanceButton)).toBeVisible();
            await expect(this.page.locator(this.allClasses)).toBeVisible();
            const totalStudents = await this.page.locator(this.viewEditStudentIcon).count();
            if (totalStudents > 0) {
                const prevTotalClass = await this.page.locator(this.totalClasses).nth(0).innerText();
                for (let i = 0; i < totalStudents; i++) {
                    let preORabs = Math.floor(Math.random() * 10);
                    await this.page.locator(preORabs <= 5 ? this.presentButton : this.absentButton).nth(i).click();
                }
                await this.page.locator(this.submitAttendanceButton).click();
                await expect(this.page.locator(this.submitFinalAttendance)).toBeVisible();
                await expect(this.page.locator(this.cancleFinalAttendance)).toBeVisible();
                await this.page.locator(this.submitFinalAttendance).click();
                await this.page.waitForLoadState('networkidle');
                const newTotalClass = await this.page.locator(this.totalClasses).nth(0).innerText();
                await expect(parseInt(newTotalClass)).toBe(parseInt(prevTotalClass) + 1);
            }
            await this.page.locator(this.allClasses).click();
        }
    }
}

export default MarkAttendanceOfStudents;