
export function renderDonutShop(shop) {
    const a = document.createElement('a');
    a.classList.add('donut-shop');
    a.href = `/shop-detail/?id=${shop.id}`;
    
    const h3 = document.createElement('h3');
    h3.textContent = shop.name;

    const image = document.createElement('div');
    image.classList.add('image-container');
    const img = document.createElement('img');
    img.src = `..${shop.image}`;
    image.append(img);
    
    a.append(h3, image);
    return a;
}

export function renderShopDetail(shop) {
    const div = document.createElement('div');
    div.classList.add('shop-detail');
    
    const h1 = document.createElement('h1');
    h1.classList.add('detail-title'); 
    h1.textContent = shop.name;
    
    const image = document.createElement('div');
    image.classList.add('detail-image');
    const img = document.createElement('img');
    img.src = shop.image;
    image.append(img);

    const ul = document.createElement('ul');
    ul.classList.add('detail-info');
    
    const phone = document.createElement('li');
    phone.textContent = shop.phone;
    const address = document.createElement('li');
    address.textContent = shop.address;
    const website = document.createElement('li');
    website.textContent = shop.website;
    

    ul.append(phone, address, website);

    div.append(h1, image, ul);
    return div;
}