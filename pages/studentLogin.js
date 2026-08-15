import { expect } from "@playwright/test";
import studentsData from '../studentsData.json' with{type: 'json'};

class StudentLogin {
    constructor(page, applicationUrl) {
        this.page = page;
        this.applicationUrl = applicationUrl;
        this.loginButton = "a[href='/Attendance-Tracker/Students-Login']";
        this.inputName = '[name="sName"]';
        this.inputRollNo = '[name="sRollNo"]';
        this.inputSemester = '[name="semester"]';
        this.inputSection = '[name="section"]';
        this.inputCollege = '[name="collegeName"]';
        this.submitButton = "button[type='submit']";
        this.studentPage='a.nav-link.active.textSize';
        this.viewAttendanceOption="#showAttendTable";
        this.logout=':text("Log Out")';
        this.loginForm='#checkAttendance';
    }
    async loginToStudent() {
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.loginButton);
        await this.page.waitForLoadState("networkidle");
        await this.page.fill(this.inputName,studentsData.registered[0].name);
        await this.page.fill(this.inputRollNo,studentsData.registered[0].rollNo);
        await this.page.locator(this.inputSemester).selectOption({index:parseInt(studentsData.registered[0].semester)});
        await this.page.fill(this.inputSection,studentsData.registered[0].section);
        await this.page.locator(this.inputCollege).selectOption({value:studentsData.registered[0].college});
        await this.page.click(this.submitButton);
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.locator(this.logout)).toBeVisible();
        await expect(this.page.locator(this.studentPage)).toBeVisible();
        await expect(this.page.locator(this.viewAttendanceOption)).toBeVisible();
        await expect(this.page.getByText('Attendance graph of all subjects.')).toBeVisible();
    }
    async studentNotFound(){
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.loginButton);
        await this.page.waitForLoadState("networkidle");
        await this.page.fill(this.inputName,studentsData.notRegistered[0].name);
        await this.page.fill(this.inputRollNo,studentsData.notRegistered[0].rollNo);
        await this.page.locator(this.inputSemester).selectOption({index:parseInt(studentsData.notRegistered[0].semester)});
        await this.page.fill(this.inputSection,studentsData.notRegistered[0].section);
        await this.page.locator(this.inputCollege).selectOption({value:studentsData.notRegistered[0].college});
        await this.page.click(this.submitButton);
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.getByText('Oops ! Student Not Found !')).toBeVisible();
    };
    async emptyAllInputFields(){
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.loginButton);
        await this.page.waitForLoadState("networkidle");
        await this.page.click(this.submitButton);
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.locator('.was-validated')).toBeVisible();
    };
    async EmptyNameOnly(){
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.loginButton);
        await this.page.waitForLoadState("networkidle");
        // await this.page.fill(this.inputName,studentsData.notRegistered[0].name);
        await this.page.fill(this.inputRollNo,studentsData.notRegistered[0].rollNo);
        await this.page.locator(this.inputSemester).selectOption({index:parseInt(studentsData.notRegistered[0].semester)});
        await this.page.fill(this.inputSection,studentsData.notRegistered[0].section);
        await this.page.locator(this.inputCollege).selectOption({value:studentsData.notRegistered[0].college});
        await this.page.click(this.submitButton);
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.locator('.was-validated')).toBeVisible();
    };
    async EmptyNameAndRollNoOnly(){
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.loginButton);
        await this.page.waitForLoadState("networkidle");
        // await this.page.fill(this.inputName,studentsData.notRegistered[0].name);
        // await this.page.fill(this.inputRollNo,studentsData.notRegistered[0].rollNo);
        await this.page.locator(this.inputSemester).selectOption({index:parseInt(studentsData.notRegistered[0].semester)});
        await this.page.fill(this.inputSection,studentsData.notRegistered[0].section);
        await this.page.locator(this.inputCollege).selectOption({value:studentsData.notRegistered[0].college});
        await this.page.click(this.submitButton);
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.locator('.was-validated')).toBeVisible();
    };
    async EmptyRollNoAndSemesterOnly(){
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.loginButton);
        await this.page.waitForLoadState("networkidle");
        await this.page.fill(this.inputName,studentsData.notRegistered[0].name);
        // await this.page.fill(this.inputRollNo,studentsData.notRegistered[0].rollNo);
        // await this.page.locator(this.inputSemester).selectOption({index:parseInt(studentsData.notRegistered[0].semester)});
        await this.page.fill(this.inputSection,studentsData.notRegistered[0].section);
        await this.page.locator(this.inputCollege).selectOption({value:studentsData.notRegistered[0].college});
        await this.page.click(this.submitButton);
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.locator('.was-validated')).toBeVisible();
    };
    async EmptySemesterAndSectionOnly(){
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.loginButton);
        await this.page.waitForLoadState("networkidle");
        await this.page.fill(this.inputName,studentsData.notRegistered[0].name);
        await this.page.fill(this.inputRollNo,studentsData.notRegistered[0].rollNo);
        // await this.page.locator(this.inputSemester).selectOption({index:parseInt(studentsData.notRegistered[0].semester)});
        // await this.page.fill(this.inputSection,studentsData.notRegistered[0].section);
        await this.page.locator(this.inputCollege).selectOption({value:studentsData.notRegistered[0].college});
        await this.page.click(this.submitButton);
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.locator('.was-validated')).toBeVisible();
    };
    async EmptySectionAndCollegeOnly(){
        await this.page.goto(this.applicationUrl);
        await this.page.click(this.loginButton);
        await this.page.waitForLoadState("networkidle");
        await this.page.fill(this.inputName,studentsData.notRegistered[0].name);
        await this.page.fill(this.inputRollNo,studentsData.notRegistered[0].rollNo);
        await this.page.locator(this.inputSemester).selectOption({index:parseInt(studentsData.notRegistered[0].semester)});
        // await this.page.fill(this.inputSection,studentsData.notRegistered[0].section);
        // await this.page.locator(this.inputCollege).selectOption({value:studentsData.notRegistered[0].college});
        await this.page.click(this.submitButton);
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.locator('.was-validated')).toBeVisible();
    };
}

export default StudentLogin;