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

  try {
    document.querySelector('#imgProductDetail').remove();
    document.querySelector('.product-info').remove();
  }
  catch(e)
  {
    console.log(e)
  }
}

function closeProductDetailAside () {
  document.querySelector('#imgProductDetail').remove();
  document.querySelector('.product-info').remove();
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
  description: "Hola, acá hay un texto",
});
productList.push({
  name: 'Bolso manos libres',
  price: 105000,
  image: './imagenes/bolso.jfif',
  description: "Hola, acá hay un texto",
});
productList.push({
  name: 'Billeteras',
  price: 19000,
  image: './imagenes/carteras.jfif',
  description: "Hola, acá hay un texto",
});
productList.push({
  name: 'Carteras',
  price: 28000,
  image: './imagenes/carteritas.jfif',
  description: "Hola, acá hay un texto",
});
productList.push({
  name: 'Cesta para escritorio',
  price: 40000,
  image: './imagenes/cesta.jfif',
  description: "Hola, acá hay un texto",
});
productList.push({
  name: 'Organizador',
  price: 50000,
  image: './imagenes/organizadores.jfif',
  description: "Hola, acá hay un texto",
});
productList.push({
  name: 'Termos',
  price: 36000,
  image: './imagenes/termos.jfif',
  description: "Hola, acá hay un texto",
});
productList.push({
  name: 'Almohada',
  price: 40000,
  image: './imagenes/almohada.jfif',
  description: "Hola, acá hay un texto",
});
productList.push({
  name: 'Bolso manos libres',
  price: 105000,
  image: './imagenes/bolso.jfif',
  description: "Hola, acá hay un texto",
});
productList.push({
  name: 'Billeteras',
  price: 19000,
  image: './imagenes/carteras.jfif',
  description: "Hola, acá hay un texto",
});
productList.push({
  name: 'Carteras',
  price: 28000,
  image: './imagenes/carteritas.jfif',
  description: "Hola, acá hay un texto",
});
productList.push({
  name: 'Cesta para escritorio',
  price: 40000,
  image: './imagenes/cesta.jfif',
  description: "Hola, acá hay un texto",
});

function renderProducts(array) {
  
  for (product of array) {
    
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.addEventListener("click", infoDetailProduct)
    productCard.product = product

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
    
    productInfoDiv.append(productPrice, productName);

    const productFigure = document.createElement('figure');
    const productFigureImg = document.createElement('img');
    productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productFigure.appendChild(productFigureImg);  
      
    productInfo.append(productInfoDiv, productFigure);
    
    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard); 
  }
}

renderProducts(productList);    

function infoDetailProduct(data) {
  
  const productDetail = document.getElementById('productDetail')

  // Imagen del producto
  const imageProductDetail = document.createElement('img');
  imageProductDetail.setAttribute('src', data.currentTarget.product.image);
  imageProductDetail.setAttribute('id', 'imgProductDetail');

  // Se añade la imagen al aside principal
  productDetail.appendChild(imageProductDetail);

  // Div donde estará el precio, nombre, descripción y botón añadir al carrito
  const productInfoDetail = document.createElement('div');
  productInfoDetail.classList.add('product-info');

  const productPrice = document.createElement('p');
  productPrice.innerHTML = '$ ' + data.currentTarget.product.price;
  const productName = document.createElement('p');
  productName.innerHTML = data.currentTarget.product.name;
  const productDescription = document.createElement('p');
  productDescription.innerHTML = data.currentTarget.product.description;

  productInfoDetail.append(productPrice, productName, productDescription);

  const addToCartButton = document.createElement('button');
  addToCartButton.classList.add('primary-button', 'add-to-cart-button');
  addToCartButton.innerText = "Añadir al carrito";

  const addToCartImg = document.createElement('img');
  addToCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');

  addToCartButton.appendChild(addToCartImg);

  productInfoDetail.append(addToCartButton);
  productDetail.appendChild(productInfoDetail);
}

// infoDetailProduct(productList);
// console.log(productList);