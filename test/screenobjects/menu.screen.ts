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
        if (driver.isAndroid)
            return $('id=com.saucelabs.mydemoapp.android:id/cartTV');
        else
            return $('//XCUIElementTypeImage[@name="GrayRoundView Icons"]/../XCUIElementTypeStaticText');
    }

    constructor () {
        if (driver.isAndroid)
            super('~Displays number of items in your cart');
        else 
            super('~Menu Icons');
         

    }



    public async getCartAmount ():Promise<number> {
        const element = await this.cartBadge;
        if (!await element.isExisting()) {
            return await 0;
        }

        if (driver.isAndroid) 
            return parseInt(await element.getAttribute('text'));
        else 
            return parseInt(await element.getAttribute('value'));
    }

}

export default new MenuScreen();
