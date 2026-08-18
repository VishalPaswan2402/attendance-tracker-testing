import { expect } from "@playwright/test";

class PrintFilterAttendance {
    constructor(page, applicationUrl) {
        this.page = page;
        this.applicationUrl = applicationUrl;
        this.viewButton = 'a.btn.btn-primary.allBtns';
        this.submitAttendanceButton = "#subAttendence";
        this.allClasses = ':text("All Classes")';
        this.viewEditStudentIcon = '#editIcons';
        this.filterStudenButton = "#filterStudent";
        this.filterSubmitButton = ".formForFilter";
        this.filterCancleButton = ".filterCancle";
        this.filterInput = "#floatingp";
        this.allAttendanceSheet = 'Attendance Sheet';
        this.gotoClassesButton = ".printLink";
    }
    async filterStudents() {
        const totalClasses = await this.page.locator(this.viewButton).count();
        if (totalClasses > 1) {
            await this.page.locator(this.viewButton).nth(0).click();
            await expect(this.page.locator(this.submitAttendanceButton)).toBeVisible();
            await expect(this.page.locator(this.allClasses)).toBeVisible();
            const totalStudents = await this.page.locator(this.viewEditStudentIcon).count();
            if (totalStudents > 0) {
                await this.page.locator(this.filterStudenButton).click();
                await this.page.locator(this.filterInput).fill("59");
                await this.page.locator(this.filterSubmitButton).click();
                await expect(this.page).toHaveURL(/Print-Detained-Attendance-sheet/);
                await this.page.locator(`${this.gotoClassesButton} a`).nth(1).click();
            }
            await this.page.locator(this.allClasses).click();
        }
    };

    async viewAllAttendance() {
        const totalClasses = await this.page.locator(this.viewButton).count();
        if (totalClasses > 1) {
            await this.page.locator(this.viewButton).nth(0).click();
            await expect(this.page.locator(this.submitAttendanceButton)).toBeVisible();
            await expect(this.page.locator(this.allClasses)).toBeVisible();
            const totalStudents = await this.page.locator(this.viewEditStudentIcon).count();
            if (totalStudents > 0) {
                await this.page.getByText(this.allAttendanceSheet).click();
                await expect(this.page).toHaveURL(/Print-All-Attendance-sheet/)
                await this.page.locator(`${this.gotoClassesButton} a`).nth(1).click();
            }
            await this.page.locator(this.allClasses).click();
        }
    }

    async printAttendance() {
        const totalClasses = await this.page.locator(this.viewButton).count();
        if (totalClasses > 1) {
            await this.page.locator(this.viewButton).nth(0).click();
            await expect(this.page.locator(this.submitAttendanceButton)).toBeVisible();
            await expect(this.page.locator(this.allClasses)).toBeVisible();
            const totalStudents = await this.page.locator(this.viewEditStudentIcon).count();
            if (totalStudents > 0) {
                await this.page.getByText(this.allAttendanceSheet).click();
                await expect(this.page).toHaveURL(/Print-All-Attendance-sheet/);
                await this.page.evaluate(() => {
                    window.__printCalled = false;
                    window.print = () => {
                        window.__printCalled = true;
                    };
                });
                await this.page.locator(`${this.gotoClassesButton} a`).nth(0).click();
                await expect.poll(async () => {
                    return await this.page.evaluate(() => window.__printCalled);
                }).toBe(true);
            }
        }
    }
}

export default PrintFilterAttendance;