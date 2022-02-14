import { getDonutShops } from './fetch-utils.js';
import { renderDonutShop } from './render-utils.js';

const donutShops = document.getElementById('donut-shops');

window.addEventListener('load', async() => {
    const shops = await getDonutShops();
    for (let shop of shops) {
        const shopLink = renderDonutShop(shop);
        donutShops.append(shopLink);
    }
});
