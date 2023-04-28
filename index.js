// Grab the html elements from the document so we can make changes to their content
const leftbutton = document.getElementsByClassName("leftarrow");
const rightbutton = document.getElementsByClassName("rightarrow");
const dealsimg = document.getElementById("dealsimg");
const dealstitle = document.getElementById("dealstitle");
const dealsdescription = document.getElementById("dealsdescription");
const dealsprice = document.getElementById("dealsprice");

// Create an array of items, each index in the array corresponds with a singular item
const menuItems = ["static/yepasburger.jpg", "static/sausageandegg.jpg", "static/fajitas.jpg"];
const menuItemNames = ["Yeburger", "Sausage and egg taco", "Beef fajita plate"];
const menuItemDescriptions = [
  "Made-from-scratch. This is a secret recipe that has been perfected throughout the years. Comes with fries and a drink",
  "Made-from scratch with farm raised eggs. Start your day with a nice and fresh taco that will fill you up",
  "Not made from scratch. This Beef fajita plate comes with beef fajitas, green bell peppers, lettuce, tomatoes, rice, and refried beans."];
const menuItemPrices = ["$7.99", "$3.99", "$10.99"];
let currItem = 0;

leftbutton[0].addEventListener("click", () => {
  if (currItem === 0){
    currItem = menuItems.length - 1;
  }
  else{
    currItem -= 1;
  }

  dealsimg.setAttribute("src", menuItems[currItem]);
  dealstitle.textContent = menuItemNames[currItem];
  dealsdescription.textContent = menuItemDescriptions[currItem];
  dealsprice.textContent = menuItemPrices[currItem];


  leftbutton[0].disabled = true;
  rightbutton[0].disabled = true;

  setTimeout(() =>{
    leftbutton[0].disabled = false;
    rightbutton[0].disabled = false;
  }, 1000);

})

rightbutton[0].addEventListener("click", () => {

  // Check to see if we've reached the end of the array
  // If we have, then set currItem = 0 to iterate through the array again
  // Else, add one to currItem to iterate
  if (currItem === menuItems.length - 1){
    currItem = 0;
  }
  else{
    currItem += 1;
  }

  // Change the values of the html elements
  dealsimg.setAttribute("src", menuItems[currItem]);
  dealsimg.setAttribute("src", menuItems[currItem]);
  dealstitle.textContent = menuItemNames[currItem];
  dealsdescription.textContent = menuItemDescriptions[currItem];
  dealsprice.textContent = menuItemPrices[currItem];

  // Momentarily disable the buttons so that the client can't abuse the server
  leftbutton[0].disabled = true;
  rightbutton[0].disabled = true;

  // Enable the buttons again so user can use it
  setTimeout(() =>{
    leftbutton[0].disabled = false;
    rightbutton[0].disabled = false;
  }, 1000);
})