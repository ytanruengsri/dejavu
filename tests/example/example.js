import Page from '../../page-objects/page';

fixture `Example page`
    .page `https://www.zalando.de/nike-sportswear-sneaker-low-metallic-silvervarsity-redblack-ni111s08k-d11.html`;

const page = new Page();

test('verify `select size` message', async t => {
    await t
        .wait(5000)
        .click(await page.addToCartButton);

    const sizeSelectionHint = await page.sizeSelectionHint;
    t.expect(sizeSelectionHint.innerText).eql('Wähle deine Größe');
});