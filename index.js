// Grab the html elements from the document so we can make changes to their content
const leftbutton = document.getElementsByClassName("leftarrow");
const rightbutton = document.getElementsByClassName("rightarrow");

// Deals elements
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

// handle review li elements
// Customer review elements
const reviewsli = document.querySelectorAll('.reviewsli')
const displayedreviews = Array.from(reviewsli);
const reviews = [
  {
    name: "Steven W",
    review: "The food was not very good. When I bit into the burger, it was raw and pink. The fries were really greasy and oily too. Overall a terrible experience, I am never coming back here."
  },
  {
    name: "Random guy #1",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perspiciatis labore nostrum culpa doloremque voluptas deleniti nulla assumenda totam quibusdam quas esse ipsam officia consequuntur quo, ducimus voluptatem quam tempora"
  },
  {
    name: "Random guy #2",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perspiciatis labore nostrum culpa doloremque voluptas deleniti nulla assumenda totam quibusdam quas esse ipsam officia consequuntur quo, ducimus voluptatem quam tempora"
  },
  {
    name: "Squirrel",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perspiciatis labore nostrum culpa doloremque voluptas deleniti nulla assumenda totam quibusdam quas esse ipsam officia consequuntur quo, ducimus voluptatem quam tempora"
  },
  {
    name: "Bob",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perspiciatis labore nostrum culpa doloremque voluptas deleniti nulla assumenda totam quibusdam quas esse ipsam officia consequuntur quo, ducimus voluptatem quam tempora"
  },
  {
    name: "Clown",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perspiciatis labore nostrum culpa doloremque voluptas deleniti nulla assumenda totam quibusdam quas esse ipsam officia consequuntur quo, ducimus voluptatem quam tempora"
  },
  {
    name: "This place sucks",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perspiciatis labore nostrum culpa doloremque voluptas deleniti nulla assumenda totam quibusdam quas esse ipsam officia consequuntur quo, ducimus voluptatem quam tempora"
  },
  {
    name: "Anna",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perspiciatis labore nostrum culpa doloremque voluptas deleniti nulla assumenda totam quibusdam quas esse ipsam officia consequuntur quo, ducimus voluptatem quam tempora"
  },
  {
    name: "David",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perspiciatis labore nostrum culpa doloremque voluptas deleniti nulla assumenda totam quibusdam quas esse ipsam officia consequuntur quo, ducimus voluptatem quam tempora"
  },
]

let currentlydisplayed = [0, 1, 2, 3];

reviewsli.forEach((review) => {
  review.addEventListener("click", () => {
    let randomreview = Math.floor(Math.random() * reviews.length);
    while(currentlydisplayed.includes(randomreview)){
      randomreview = Math.floor(Math.random() * reviews.length);
    }
    console.log(randomreview);

    // find which review you are
    const reviewtitle = review.children[0];
    const reviewdescription = review.children[1];
    let index = 0;
    for (let i = 0; i < currentlydisplayed.length; i++){
      if (reviewtitle.textContent === reviews[currentlydisplayed[i]].name){
        index = i;
        break;
      }
    }

    // Change currently displayed, and the text content of the list item to the new item
    currentlydisplayed[index] = randomreview;
    reviewtitle.textContent = reviews[randomreview].name;
    reviewdescription.textContent = reviews[randomreview].review;
  })
})

// handle form submissions
const form = document.getElementsByClassName('subscribeform')[0];
const submitformbtn = document.getElementsByClassName('submitsubscribe')[0];

submitformbtn.addEventListener("click", () => {
  form.reset();
});