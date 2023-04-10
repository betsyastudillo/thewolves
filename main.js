const menuEmail = document.querySelector('.navbar-email');
const menuHambIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const orderCarrito = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleOrderCarrito);

function toggleDesktopMenu() {
  const isOrderCarritoClosed = orderCarrito.classList.contains('inactive');

  if (!isOrderCarritoClosed) {
    orderCarrito.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  const isOrderCarritoClosed = orderCarrito.classList.contains('inactive');

  if (!isOrderCarritoClosed) {
    orderCarrito.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}
function toggleOrderCarrito() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  else if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }

  orderCarrito.classList.toggle('inactive');
}