
// const restartApp = async (): Promise<void> => {
//      // await driver.reset();
// }

export async function restartApp() {
    if (!driver.firstAppStart) {
        if (driver.isAndroid) {
            await driver.terminateApp("com.saucelabs.mydemoapp.android");
            await driver.activateApp("com.saucelabs.mydemoapp.android");
        }
        else {
            await driver.terminateApp("com.saucelabs.mydemoapp.ios");
            await driver.activateApp("com.saucelabs.mydemoapp.ios");
        }
    }

    // See the wdio.conf.ts file in the `before` hook for what this property does
    // Set the firstAppstart to false to say that the following test can be reset
    driver.firstAppStart = false;
}

// const swipeElement = async (element: WebdriverIO.Element , direction: string) =>
// {
//
//     // const start = { x: 200, y: 1500 }; // starting coordinates for swipe
//     // const end = { x: 200, y: 500 };    // ending coordinates for swipe
//     // const duration = 1000;             // duration for the swipe action in ms
//     //
//     // await driver.performActions([
//     //     {
//     //         type: 'pointer',
//     //         id: 'finger1',
//     //         parameters: { pointerType: 'touch' },
//     //         actions: [
//     //             { type: 'pointerMove', duration: 0, x: start.x, y: start.y },
//     //             { type: 'pointerDown', button: 0 },
//     //             { type: 'pause', duration: duration },
//     //             { type: 'pointerMove', duration: duration, x: end.x, y: end.y },
//     //             { type: 'pointerUp', button: 0 }
//     //         ]
//     //     }
//     // ]);
//     //
//     // // If necessary, release actions after performing them
//     // await driver.releaseActions();
//
//
//     // 1. Get the screen / element size (element size is explained in the touch actions)
//     let screenSize;
//     if (element === null)
//         screenSize = await driver.getWindowRect();
//     else
//         screenSize = await getRect(element)
//
//     // 2. Determine X and Y position
//     //    We move our finger on the horizontal axis, this means we need to
//     //    have a starting X position and the Y position will stay the same.
//     //    We need to determine the startX and centerY position
//     // const startX = x + width - 100;
//     // const centerY = y + height / 2;
//
//     // 3. Execute the touch action
//     //    We swipe over the horizontal axis which means the Y position
//     //    will always stay the same, but you can change it to create
//     //    different gestures for swiping
//     //    See https://github.com/jlipps/simple-wd-spec#perform-actions
//     //    for a clear explanation of all properties
//     // await driver.performActions([
//     //     {
//     //         // 3a. Create the event
//     //         type: 'pointer',
//     //         id: 'finger1',
//     //         parameters: { pointerType: 'touch' },
//     //         actions: [
//     //             // 3b. Move finger into start position
//     //             { type: 'pointerMove', duration: 0, x: 500, y: 600 },
//     //             // 3c. Finger comes down into contact with screen
//     //             { type: 'pointerDown', button: 0 },
//     //             // 3d. Pause for a little bit
//     //             { type: 'pause', duration: 100 },
//     //             // 3e. Finger moves to end position
//     //             //     We move our finger from the center of the element to the
//     //             //     starting position of the element
//     //             { type: 'pointerMove', duration: 250, x: 500, y: 100 },
//     //             // 3f. Finger lets up, off the screen
//     //             { type: 'pointerUp', button: 0 },
//     //         ],
//     //     },
//     // ]);
//
//     // For demo purpose
//     await driver.pause(5000);
//     // if (direction.toLowerCase() === 'up') {
//         // startX = elementRect.x + elementRect.width / 2;
//         // startY = elementRect.y + elementRect.height - 1;
//         // endX = startX;
//         // endY = 0.2 * screenSize.height; // Adjust the value for the desired swipe distance
//     // }
//     // } else if (direction.toLowerCase() === 'down') {
//     //     startX = elementRect.x + elementRect.width / 2;
//     //     startY = elementRect.y;
//     //     endX = startX;
//     //     endY = 0.8 * screenSize.height; // Adjust the value for the desired swipe distance
//     // }
//
//     // Perform the swipe action using W3C Actions
//     // await driver.performActions([
//     //     {
//     //         type: 'pointer',
//     //         id: 'finger1',
//     //         parameters: { pointerType: 'touch' },
//     //         actions: [
//     //             { type: 'pointerMove', duration: 0, x: startX, y: startY },
//     //             { type: 'pointerDown', button: 0 },
//     //             { type: 'pointerMove', duration: 100, x: endX, y: endY },
//     //             { type: 'pointerUp', button: 0 },
//     //         ],
//     //     },
//     // ]);
//     //
//     // // always allow scroll action to complete
//     // await browser.pause(500);
// }
//
// async function getRect(element: WebdriverIO.Element): Promise<{ x: number, y: number, width: number, height: number }> {
//     const location = await element.getLocation();
//     const size = await element.getSize();
//     return {
//         x: location.x,
//         y: location.y,
//         width: size.width,
//         height: size.height
//     };
// }
//
// export {
//     swipeElement
// };