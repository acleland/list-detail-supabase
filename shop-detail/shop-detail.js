import { getDonutShop } from '../fetch-utils.js';
import { renderShopDetail } from '../render-utils.js';

const main = document.querySelector('main');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const shop = await getDonutShop(id);
    const shopDetail = renderShopDetail(shop);
    main.append(shopDetail);
});
