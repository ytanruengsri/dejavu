import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.addToCartButton = Selector('.z-vegas_primaryContent_ctaButtons')
            .find('button');
        this.sizeSelectionHint = Selector('.z-vegas_primaryContent_sizeHint')
            .find('.z-vegas-ui_text');
    }
}