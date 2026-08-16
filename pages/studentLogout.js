import {expect} from "@playwright/test"

class StudentLogout{
    constructor(page,applicationUrl){
        this.page=page;
        this.applicationUrl=applicationUrl;
        this.logoutButton=':text("Log Out")';
    }
    async logoutStudent(){
        await this.page.click(this.logoutButton);
    }
}

export default StudentLogout;