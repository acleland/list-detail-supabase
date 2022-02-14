// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDonutShop, renderShopDetail } from '../render-utils.js';
import { getDonutShops, getDonutShop } from '../fetch-utils.js';


const test = QUnit.test;
// const skip = QUnit.skip;

test('test getDonutShops', async(expect) => {
    const expected = 'Voodoo Doughnut';
    const shops = await getDonutShops();
    const actual = shops[0].name;
    expect.equal(actual, expected);
    expect.equal(shops.length, 5);
});

test('test getDonutShop', async(expect) => {
    const expected = 'Coco Donuts';
    const shop = await getDonutShop(1);
    const actual = shop.name;
    expect.equal(actual, expected);
});

test('test renderShopDetail', async(expect) => {
    const expected = `<div class="shop-detail"><h1 class="detail-title">Coco Donuts</h1><div class="detail-image"><img src="/assets/coco.png"></div><ul class="detail-info"><li>(971) 302-7445</li><li>4790 SE Milwaukie Ave, Portland, Oregon 97202</li><li>https://www.cocodonuts.com/</li></ul></div>`;
    const shop = await getDonutShop(1);
    const actual = renderShopDetail(shop);
    expect.equal(actual.outerHTML, expected);
});

test('test renderDonutShop', async(expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a class="donut-shop" href="/shop-detail/?id=1"><h3>Coco Donuts</h3><div class="image-container"><img src="../assets/coco.png"></div></a>`;
    const shop = await getDonutShop(1);
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDonutShop(shop);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
