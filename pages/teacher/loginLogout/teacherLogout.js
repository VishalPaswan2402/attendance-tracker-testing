class TeacherLogout {
    constructor(page,applicationUrl) {
        this.page=page;
        this.applicationUrl=applicationUrl;
        this.logoutButton=':text("Log Out")';
    }
    async logoutToTeacher(){
        await this.page.click(this.logoutButton);
    }
};

export default TeacherLogout;