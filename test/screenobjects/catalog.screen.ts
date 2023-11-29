import { $ } from '@wdio/globals'
import AppScreen from './AppScreen';
import Gestures from "../helpers/Gestures";

/**
 * Specific selectors and methods for CatalogScreen page
 */
class CatalogScreen extends AppScreen {

    constructor () {
        
        if (driver.isAndroid)
            super('~Scrollview manages views in given screen size');
        else    
            super('~Catalog-screen');
    }

    public async selectProduct (productName: string) {

        await Gestures.checkIfDisplayedWithSwipeUp($(`~${productName}`), 2);
        await $(`~${productName}`).click()
    }

    public async selectTopProduct () {
        await this.selectProduct("Sauce Labs Backpack");
    }

    public async selectBottomProduct () {
        await this.selectProduct("Sauce Labs Onesie");
    }

}

export default new CatalogScreen();
