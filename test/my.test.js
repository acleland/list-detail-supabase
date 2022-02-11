// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDonutShop } from '../render-utils.js';
import { getDonutShops, getDonutShop } from '../fetch-utils.js';


const test = QUnit.test;
const skip = QUnit.skip;

test('test getDonutShops', async(expect) => {
    const expected = 'Coco Donuts';
    const shops = await getDonutShops();
    const actual = shops[0].name;
    expect.equal(actual, expected);
});

test('test getDonutShop', async(expect) => {
    const expected = 'Coco Donuts';
    const shop = await getDonutShop(1);
    const actual = shop.name;
    expect.equal(actual, expected);
});


skip('test renderDonutShop', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a class="donut-shop" href="/shop-detail/?id=1"><h3>Coco Donuts</h3><img src="/assets/coco.png"></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDonutShop();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
