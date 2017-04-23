const assert = require('assert');

const baseUrl = 'https://www.zalando.de/';
const articleUrl = 'adidas-originals-nmd_r1-sneaker-low-utility-blackwhitesolid-grey-ad111s0gu-q11.html';
const logoSelector = '.z-navicat-header_logoLinkWrapper';

describe('Example Page', () => {
    it('should verify redirection', () => {
        browser.url(`${baseUrl}${articleUrl}`);
        browser.waitForVisible(logoSelector, 1000);

        browser.click(logoSelector);

        const url = browser.getUrl();
        assert.equal(url, baseUrl);
    });
});