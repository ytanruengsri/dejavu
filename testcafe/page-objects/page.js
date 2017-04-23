import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.addToCartButton = Selector('.z-vegas_primaryContent_ctaButtons');
        this.sizeSelectionHint = Selector('.z-vegas_primaryContent_sizeHint');
    }
}