import { test } from '@playwright/test';
import LandingPage from "../../pages/landingPage";

test("Test for landing page [TC-001]", async ({ page }) => {
    const applicationUrl="https://attendance-tracker-4j6u.onrender.com/"
    const landingPage = new LandingPage(page,applicationUrl);
    await landingPage.checkLandingPageLoginOptions();
});
