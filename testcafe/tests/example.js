import { Selector } from 'testcafe';

const baseUrl = 'https://www.zalando.de/';
const articleUrl = 'adidas-originals-nmd_r1-sneaker-low-utility-blackwhitesolid-grey-ad111s0gu-q11.html';
const logoSelector = '.z-navicat-header_logoLinkWrapper';

fixture `Example page`
    .page `${baseUrl}${articleUrl}`;

test('Verify Redirection', async t => {
    await t
        .debug()
        .click(logoSelector);

    const location = await t.eval(() => window.location);
    await t.expect(location.pathname).eql('/');
});
