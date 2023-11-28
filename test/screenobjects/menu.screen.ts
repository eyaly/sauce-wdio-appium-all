import { $ } from '@wdio/globals'
import AppScreen from './AppScreen';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MenuScreen extends AppScreen {
    /**
     * define selectors using getter methods
     */


    public get cartBadge () {
        return $('id=com.saucelabs.mydemoapp.android:id/cartTV');
    }

    constructor () {

         super('~Displays number of items in your cart');

    }



    public async getCartAmount ():Promise<number> {
        const element = await this.cartBadge;
        if (!await element.isDisplayed()) {
            return await 0;
        }

        return parseInt(await element.getAttribute('text'));
    }

}

export default new MenuScreen();
