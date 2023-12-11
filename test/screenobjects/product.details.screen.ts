import { $ } from '@wdio/globals'
import AppScreen from './AppScreen';
import {swipeElement} from "../helpers/utils";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductDetailsScreen extends AppScreen {

    public get addToCartBtn () {
        if (driver.isAndroid)
            return $('~Tap to add product to cart');
        else
            return $('~AddToCart');
    }

    constructor () {
        if (driver.isAndroid) {
            console.log("I'm in Android");
            super('~Displays selected product');
        }
        else {
            console.log("I'm in iOS") 
            super('~ProductDetails-screen');
        }
    }

    public async addProductToCart () {

        await this.addToCartBtn.click()
    }

}

export default new ProductDetailsScreen();
