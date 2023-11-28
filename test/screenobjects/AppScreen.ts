
/**
* main Page/Screen object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class AppScreen {

    private selector: string;

    constructor (selector: string) {
        this.selector = selector;
    }

    public async waitForIsShown (isShown = true) {
        return await $(this.selector).waitForDisplayed({
            reverse: !isShown,
        });
    }
}
