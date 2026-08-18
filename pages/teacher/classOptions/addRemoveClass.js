import {expect} from '@playwright/test';

class AddRemoveClass{
    constructor(page,applicationUrl){
        this.page=page;
        this.applicationUrl=applicationUrl;
        this.addClassButton="#createNewClass";
        this.submitNewClassButton='#addNewClass';
        this.cancleForm="#cancleForm";
        this.allClassButton='All Classes';
        this.semesterOption='#floatingSelect';
        this.inputSection='[name="section"]';
        this.viewClassButtons='a.btn.btn-primary.allBtns';
        this.deleteClassButton="#delClass";
        this.confirmDeleteButton='#delTech';
        this.cancleDeleteButton="#cancleDel";
        this.confirmText=':text-is("Are You Sure ?")';
    }
    async openAndCloseAddClassForm(){
        await this.page.locator(this.addClassButton).click();
        await expect(this.page.locator(this.submitNewClassButton)).toBeVisible();
        await expect(this.page.locator(this.cancleForm)).toBeVisible();
        await expect(this.page.getByText(this.allClassButton)).toBeVisible();
        await this.page.locator(this.cancleForm).click();
        await expect(this.page.getByText(this.allClassButton)).toBeVisible();
        await expect(this.page.locator(this.addClassButton)).toBeVisible();
    }
    async addNewClass(){
        await this.page.locator(this.addClassButton).click();
        await this.page.waitForLoadState('networkidle');
        await this.page.locator(this.semesterOption).selectOption({index:3});
        const randomSection=Math.floor((Math.random())*100);
        const newSection="CSE-"+randomSection;
        await this.page.fill(this.inputSection,newSection);
        await this.page.locator(this.submitNewClassButton).click();
        await expect(this.page.getByText('New class added successfully.')).toBeVisible();
    }
    async deleteExixtingClass(){
        const allButtons=await this.page.locator(this.viewClassButtons).count();
        if(allButtons>2){
            await this.page.locator(this.viewClassButtons).nth(allButtons-2).click();
            await expect(this.page.locator(this.deleteClassButton)).toBeVisible();
            await this.page.waitForLoadState('networkidle');
            await this.page.locator(this.deleteClassButton).click();
            await this.page.locator(this.confirmDeleteButton).click();
            const updatedButtons=await this.page.locator(this.viewClassButtons).count();
            await expect(updatedButtons+1).toBe(allButtons);
        }
    }
};

export default AddRemoveClass;