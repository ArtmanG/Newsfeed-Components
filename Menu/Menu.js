/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function createMenu(array) {
  const menu = document.createElement('div');
  const uList = document.createElement('ul');
  
    menuItems.forEach(e => {
    const listItem = document.createElement('li')
    listItem.textContent= e;
    uList.appendChild(listItem);
  });
  menu.appendChild(uList);

  menu.classList.add('menu');

  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', (event) => {
    menu.classList.toggle('menu--open');
  });
  
  // setup event listener

  // return
  return menu;
};

const newMenuItem = 'Num 9';
menuItems.push(newMenuItem);

const navMenu = document.querySelector('.header');
navMenu.appendChild(createMenu(menuItems));

/* 

  [x] Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  [x] Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  [x] Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  [x] Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  [x] Step 5: return the menu component.

  [x] Step 6: add the menu component to the DOM.
  
*/
