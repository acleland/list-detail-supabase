import { getDonutShops } from './fetch-utils.js';

const donutShopsContainer = document.getElementById('donut-shops-container');

window.addEventListener('load', async() => {
    const donutShops = await getDonutShops();
    for (let shop of donutShops) {
        console.log(shop.name);
    }
});
