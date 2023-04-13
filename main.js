const menuEmail = document.querySelector('.navbar-email');
const menuHambIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainerCloseIcon = document.querySelector('.close-shopping-cart-container');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleshoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
shoppingCartContainerCloseIcon.addEventListener('click', closeShoppingCartContainer);

function toggleDesktopMenu() {
  const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');

  closeProductDetailAside();

}
function toggleMobileMenu() {
  const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');

  closeProductDetailAside();  
}
function toggleshoppingCartContainer() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isproductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  else if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }
  else if (!isproductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside () {
  shoppingCartContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');


  productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside () {
  productDetailContainer.classList.add('inactive');
}
function closeShoppingCartContainer () {
  shoppingCartContainer.classList.add('inactive');
}


const productList = [];
productList.push({
  name: 'Almohada',
  price: 40000,
  image: './imagenes/almohada.jfif',
});
productList.push({
  name: 'Bolso manos libres',
  price: 105000,
  image: './imagenes/bolso.jfif',
});
productList.push({
  name: 'Billeteras',
  price: 19000,
  image: './imagenes/carteras.jfif',
});
productList.push({
  name: 'Carteras',
  price: 28000,
  image: './imagenes/carteritas.jfif',
});
productList.push({
  name: 'Cesta para escritorio',
  price: 40000,
  image: './imagenes/cesta.jfif',
});
productList.push({
  name: 'Organizador',
  price: 50000,
  image: './imagenes/organizadores.jfif',
});
productList.push({
  name: 'Termos',
  price: 36000,
  image: './imagenes/termos.jfif',
});
productList.push({
  name: 'Almohada',
  price: 40000,
  image: './imagenes/almohada.jfif',
});
productList.push({
  name: 'Bolso manos libres',
  price: 105000,
  image: './imagenes/bolso.jfif',
});
productList.push({
  name: 'Billeteras',
  price: 19000,
  image: './imagenes/carteras.jfif',
});
productList.push({
  name: 'Carteras',
  price: 28000,
  image: './imagenes/carteritas.jfif',
});
productList.push({
  name: 'Cesta para escritorio',
  price: 40000,
  image: './imagenes/cesta.jfif',
});

function renderProducts(array) {
for (product of array) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  //product = { name, price, image }
  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);
  productImg.addEventListener('click', openProductDetailAside);

  
  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  
  const productInfoDiv = document.createElement('div');
  
  const productPrice = document.createElement('p');
  productPrice.innerHTML = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerHTML = product.name;
  
  
  const productFigure = document.createElement('figure');
  const productFigureImg = document.createElement('img');
  productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
  
  productFigure.appendChild(productFigureImg);  
  
  productInfoDiv.append(productPrice, productName);
  
  productInfo.append(productInfoDiv, productFigure);
  
  productCard.append(productImg, productInfo);

  cardsContainer.appendChild(productCard); 
}
}

renderProducts(productList);