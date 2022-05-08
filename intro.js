const puppeteer=require("puppeteer");
let page;
console.log("before");
const browserOpenPromise=puppeteer.launch({
    headless:false,
    slowMo:true,
    defaultViewport:null,
    args:["--start-maximized"],
});
browserOpenPromise
    .then(function (browser) {
        // Gives currently opened tab
        let pagesArray=browser.pages();
        return pagesArray;
    }).then(function (browserPages) {
        page=browserPages[0];
        let gotoPromise=page.goto("https://www.google.co.in/");
        return gotoPromise;
    }).then(function () {
        // Waiting for the element to appear on the page
        let elementWaitPromise=page.waitForSelector("input[type='text']",{visible:true});
        return elementWaitPromise;
    })
    .then(function () {
        // console.log('Reached new page');
        // type any element on tht=at page using or identifying by selector
        let keysWillBeSendPromise=page.type("input[type='text']","pepcoding");
        return keysWillBeSendPromise;
    }).then(function () {
        // page.keyborad is used to type special characters
        let enterWillBePressed= page.keyboard.press("Enter");
        return enterWillBePressed;
    }).then(function () {
        let elementWaitPromise=page.waitForSelector("h3.LC20lb.DKV0Md",{visible:true});
        return elementWaitPromise;
    }).then(function () {
        let keysWillBeSendPromise=page.click("h3.LC20lb.DKV0Md");
        return keysWillBeSendPromise;
    })
    .catch(function (err) {
        console.log(err);
    })
console.log("after");