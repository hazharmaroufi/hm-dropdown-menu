export function dropdownMenuClick(){
  const menuIcon = document.querySelector('.menu');
  const menuItems = document.querySelector('.menu-items');
  menuIcon.addEventListener('click', () => {
    if (menuItems.classList.contains('none')) {
      menuItems.classList.remove('none');
      menuItems.classList.add('inline-block');
    } else {
      menuItems.classList.remove('inline-block');
      menuItems.classList.add('none');
    }
  });
}
