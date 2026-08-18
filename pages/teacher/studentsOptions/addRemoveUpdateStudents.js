import { expect } from '@playwright/test';

class AddRemoveUpdateStudent {
    constructor(page, applicationUrl) {
        this.page = page;
        this.applicationUrl = applicationUrl;
        this.viewButton = 'a.btn.btn-primary.allBtns';
        this.submitAttendanceButton = "#subAttendence";
        this.allClasses = ':text("All Classes")';
        this.viewEditStudentIcon = '#editIcons';
        this.updateStudentButton = ':text("Update Student")';
        this.deleteStudentButton = '#removeStudent';
        this.cancleFormButton = ':text-is("Cancle Form")';
        this.studentName = '#floatingn';
        this.studentRollNo='#floatingr';
        this.markAttendance = "#floatingSelectc";
        this.confirmDelete=':text("Confirm")';
        this.cancleDelete=':text-is("Cancle")';
        this.addNewStudentButton='button:has-text("Add New Student")';
        this.confirmAddButton='.addNewStudentByTeacher';
        this.cancleAddButton=':text("Cancle Student")';
        this.alertMsg='alert';
    }
    async viewStudentDetails() {
        const totalClasses = await this.page.locator(this.viewButton).count();
        if (totalClasses > 1) {
            await this.page.locator(this.viewButton).nth(0).click();
            await expect(this.page.locator(this.submitAttendanceButton)).toBeVisible();
            await expect(this.page.locator(this.allClasses)).toBeVisible();
            const totalStudents = await this.page.locator(this.viewEditStudentIcon).count();
            if (totalStudents > 2) {
                await this.page.locator(this.viewEditStudentIcon).nth(2).click();
                await expect(this.page).toHaveTitle("Attendance-Tracker Student-Edit");
                await expect(this.page.locator(this.updateStudentButton)).toBeVisible();
                await expect(this.page.locator(this.deleteStudentButton)).toBeVisible();
                await expect(this.page.locator(this.cancleFormButton)).toBeVisible();
                await this.page.locator(this.cancleFormButton).click();
                const newTotalStudents = await this.page.locator(this.viewEditStudentIcon).count();
                await expect(totalStudents).toBe(newTotalStudents);
            }
            await this.page.locator(this.allClasses).click();
        }
    }
    async editStudentNameAndAttendance() {
        const totalClasses = await this.page.locator(this.viewButton).count();
        if (totalClasses > 1) {
            await this.page.locator(this.viewButton).nth(0).click();
            await expect(this.page.locator(this.submitAttendanceButton)).toBeVisible();
            await expect(this.page.locator(this.allClasses)).toBeVisible();
            const totalStudents = await this.page.locator(this.viewEditStudentIcon).count();
            if (totalStudents > 2) {
                await this.page.locator(this.viewEditStudentIcon).nth(2).click();
                await expect(this.page).toHaveTitle("Attendance-Tracker Student-Edit");
                const randomValue=Math.floor((Math.random)*100)
                await this.page.fill(this.studentName, "Balvindar"+randomValue.toString());
                const num = Math.round(Math.random());
                await this.page.locator(this.markAttendance).selectOption({ value: num == 1 ? "Present" : "Absent" });
                await this.page.waitForTimeout(3000);
                await this.page.locator(this.updateStudentButton).click();
                const newTotalStudents = await this.page.locator(this.viewEditStudentIcon).count();
                await expect(totalStudents).toBe(newTotalStudents);
            }
            await this.page.locator(this.allClasses).click();
        }
    };
    async removeStudent() {
        const totalClasses = await this.page.locator(this.viewButton).count();
        if (totalClasses > 1) {
            await this.page.locator(this.viewButton).nth(0).click();
            await expect(this.page.locator(this.submitAttendanceButton)).toBeVisible();
            await expect(this.page.locator(this.allClasses)).toBeVisible();
            const totalStudents = await this.page.locator(this.viewEditStudentIcon).count();
            if (totalStudents > 2) {
                await this.page.locator(this.viewEditStudentIcon).nth(2).click();
                await expect(this.page).toHaveTitle("Attendance-Tracker Student-Edit");
                await this.page.locator(this.deleteStudentButton).click();
                await expect(this.page.locator(this.confirmDelete)).toBeVisible();
                await expect(this.page.locator(this.cancleDelete)).toBeVisible();
                await this.page.locator(this.confirmDelete).click();
                const newTotalStudents = await this.page.locator(this.viewEditStudentIcon).count();
                await expect(newTotalStudents).toBe(totalStudents-1);
            }
            await this.page.locator(this.allClasses).click();
        }
    };
    async addNewStudent(){
        const totalClasses = await this.page.locator(this.viewButton).count();
        if (totalClasses > 1){
            await this.page.locator(this.viewButton).nth(0).click();
            await expect(this.page.locator(this.submitAttendanceButton)).toBeVisible();
            await expect(this.page.locator(this.allClasses)).toBeVisible();
            await expect(this.page.locator(this.addNewStudentButton)).toBeVisible();
            const beforeAdd=await this.page.locator(this.viewEditStudentIcon).count();
            await this.page.locator(this.addNewStudentButton).click();
            await this.page.waitForLoadState('networkidle');
            const rollNum=Math.floor(Math.random()*1000);
            await this.page.locator(this.studentName).fill("Bunny"+rollNum.toString());
            await this.page.locator(this.studentRollNo).fill(rollNum.toString());
            await this.page.locator(this.confirmAddButton).click();
            const isAdded=(await this.page.getByRole(this.alertMsg).textContent()).includes("successfully");
            await expect(isAdded).toBeTruthy();
            const afterAdd=await this.page.locator(this.viewEditStudentIcon).count();
            await expect(afterAdd).toBe(beforeAdd+1);
            await this.page.locator(this.allClasses).click();
        }
    }
};

export default AddRemoveUpdateStudent;