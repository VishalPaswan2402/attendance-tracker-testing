import{expect} from '@playwright/test';

class AttendancePage{
    constructor(page,applicationUrl){
        this.page=page;
        this.applicationUrl=applicationUrl;
        this.viewButton='a.btn.btn-primary.allBtns';
        this.submitAttendanceButton="#subAttendence";
        this.allClasses=':text("All Classes")';
    }
    async viewAttendancePage(){
        const allButtons=await this.page.locator(this.viewButton).count();
        if(allButtons>1){
            await this.page.locator(this.viewButton).nth(0).click();
            await expect(this.page.locator(this.submitAttendanceButton)).toBeVisible();
            await expect(this.page.locator(this.allClasses)).toBeVisible();
            await this.page.locator(this.allClasses).click();
        }
    }
};

export default AttendancePage;