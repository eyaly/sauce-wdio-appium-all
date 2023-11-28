// import { expect } from '@wdio/globals'
import CatalogScreen from '../screenobjects/catalog.screen'
import ProductDetailsScreen from "../screenobjects/product.details.screen";
import MenuScreen from "../screenobjects/menu.screen";
// import ProductDetailsScreen from '../screenobjects/product.details.screen'
// import MenuScreen from '../screenobjects/menu.screen'

describe('Product details tests', () => {

    it('should be able to add product to cart', async () => {

        await CatalogScreen.waitForIsShown(true);
        await CatalogScreen.selectProduct("Sauce Labs Backpack");

        await ProductDetailsScreen.waitForIsShown(true);
         // Before - the amount is 0 ( or the element with the amount still doesn't exist)
        await expect(await MenuScreen.getCartAmount()).toEqual(0)
        await ProductDetailsScreen.addProductToCart();
        // After - the amount is 1
        await expect(await MenuScreen.getCartAmount()).toEqual(1)

        await ProductDetailsScreen.addProductToCart();
        // After - the amount is 2
        await expect(await MenuScreen.getCartAmount()).toEqual(2)

        // For video purpose
        await driver.pause(1000);

    })

})

