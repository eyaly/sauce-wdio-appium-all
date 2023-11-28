import { restartApp } from '../helpers/utils';
import CatalogScreen from '../screenobjects/catalog.screen'
import ProductDetailsScreen from '../screenobjects/product.details.screen'

describe('Catalog tests', () => {

    beforeEach(async () => {
        // Restart the app before each session, only not for the first session
        await restartApp();
        await CatalogScreen.waitForIsShown(true);
        });

    it('should be able to load the catalog screen', async () => {
        // the wait is done in the before :-) 
    })

    it('should be able to select product from the top of the catalog', async () => {
        await CatalogScreen.selectTopProduct();
        await ProductDetailsScreen.waitForIsShown(true);
    })

    it('should be able to select product from the bottom of the catalog', async () => {
        await CatalogScreen.selectBottomProduct();
        await ProductDetailsScreen.waitForIsShown(true);
    })

})

