
export function renderDonutShop(shop) {
    const a = document.createElement('a');
    a.classList.add('donut-shop');
    a.href = `/shop-detail/?id=${shop.id}`;
    
    const h3 = document.createElement('h3');
    h3.textContent = shop.name;

    const img = document.createElement('img');
    img.src = shop.image;
    
    a.append(h3, img);
    return a;
}