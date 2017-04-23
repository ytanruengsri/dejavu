const baseUrl = 'https://www.zalando.de/';
const articleUrl = 'adidas-originals-nmd_r1-sneaker-low-utility-blackwhitesolid-grey-ad111s0gu-q11.html';
const logoSelector = '.z-navicat-header_logoLinkWrapper';

module.exports = {
    before: (browser) => {
        browser
            .url(`${baseUrl}${articleUrl}`)
            .waitForElementVisible('body', 1000)
            .resizeWindow(1024, 800);
    },

    'Verify Redirection': (browser) => {
        browser
            .click(logoSelector)
            .waitForElementVisible('body', 1000)
            .assert.urlEquals(baseUrl)
            .end();
    }
};