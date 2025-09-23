import { Page } from '@playwright/test';

export const LoginPage = (page : Page) => {
    const userInput = page.locator('#user_name');
    const passInput = page.locator('#user_password');
    const submitBtn = page.locator('#sysverb_login');
    const errorMsg = page.locator('#output_messages .outputmsg_text');


 return {
     goto: async () => {
         await page.goto('https://dev194623.service-now.com/login.do', {
             waitUntil: 'domcontentloaded',
     });
   },

 };
};