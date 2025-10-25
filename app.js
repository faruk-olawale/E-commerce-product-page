
const cartsection = document.getElementById("cart-section");
const AddtoCartsectionLeft = document.getElementById("AddtoCart-sectionLeft");
const filledcart = document.getElementById("filled-cart");
const Emptycart = document.getElementById("Empty-cart");
const first = document.getElementById("first");
const second = document.getElementById("second");
const secondIMG1 = document.getElementById("second-item1");
const secondIMG2 = document.getElementById("second-item2");
const secondIMG3 = document.getElementById("second-item3");
const secondIMG4 = document.getElementById("second-item4");
const deleteicon = document.getElementById("delete");
const aside = document.querySelector("aside");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const countext = document.getElementById("countext");
const actualPrize = document.getElementById("actual-prize");
const totalPrize = document.getElementById("total-prize");
const calcuation = document.getElementById("calcuation");
const countupdating = document.getElementById("countupdating");
const topcart = document.getElementById("topcart");
const Emptycarticon = document.getElementById("cart-icon");
const imagePreview = document.getElementById("image-preview");
const firstsection = document.getElementById("first-section");
const closehamburger = document.getElementById("close");
const hambugerMenu = document.getElementById("menu-icon");
const mobilenaSection = document.getElementById("mobilenav-section");
const header = document.querySelector(".header");
let count = 0;


Emptycarticon.onclick = function(){
     if (cartsection.style.display === "none") {
     cartsection.style.display ="flex"; 
    } else {
     cartsection.style.display ="none";  
    }
      window.scrollTo({
      top:0,
      behavior:"smooth"
     });
}

AddtoCartsectionLeft.onclick = function(){
     filledcart.style.display ="flex"; 
     Emptycart.style.display ="none"; 
     topcart.innerHTML = `${count}`;
     topcart.style.display = "flex"
}

// secondIMG1.onclick = function(){
//     secondIMG1.style.opacity = "50%";
//     secondIMG1.style.border = "2px solid hsl(26, 100%, 55%)";
//     first.src = "images/image-product-1.jpg";
// }

// secondIMG2.onclick = function(){
//     secondIMG2.style.opacity = "60%";
//     secondIMG2.style.border = "2px solid hsl(26, 100%, 55%)";
//     first.src = "images/image-product-2.jpg";
// }


// secondIMG3.onclick = function(){
// secondIMG3.style.opacity = "60%";
//     secondIMG3.style.border = "2px solid hsl(26, 100%, 55%)";
//     first.src = "images/image-product-3.jpg";
// }

// secondIMG4.onclick = function(){
//     secondIMG4.style.opacity = "60%";
//     secondIMG4.style.border = "2px solid hsl(26, 100%, 55%)";
//     first.src = "images/image-product-4.jpg";
// }

const thumbnails = [secondIMG1, secondIMG2, secondIMG3, secondIMG4];
const imageSources = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
];

thumbnails.forEach((thumb, index) => {
  thumb.onclick = function () {
    thumbnails.forEach(t => {
      t.style.opacity = "100%";
      t.style.border = "none";
    });

    thumb.style.opacity = "50%";
    thumb.style.border = "2px solid hsl(26, 100%, 55%)";
    first.src = imageSources[index];
  };
});

deleteicon.onclick = function(){
   Emptycart.style.display = "flex";
   filledcart.style.display = "none";
   count = 0;
   topcart.innerHTML = count;
   countext.textContent =count;
}

plus.onclick = function(){
  count++;
  countext.textContent =`${count}`;
  cartsection.style.display ="none";
  if (count > 1) {
  countext.textContent =`${count}`;
  countupdating.innerHTML ="x " + count;
  totalPrize.textContent ="$" + "125.00" * count;
  } else {
    cartsection.style.display ="none";
     
  }
}

minus.onclick = function(){
  if (count > 0) {
  count--;
  countext.textContent =`${count}`;
  cartsection.style.display ="none";
  if (count > 1) {
  countext.textContent =`${count}`;
  countupdating.innerHTML ="x " + count;
  totalPrize.textContent ="$" + "125.00" * count;
  } else {
    cartsection.style.display ="none";
     
  }
}
}

// first.onclick = function(){
//   imagePreview.style.display ="flex";
//   header.style.opacity = "50%"
// }

hambugerMenu.onclick = function(){
  mobilenaSection.style.display ="flex"
}

mobilenaSection.onclick = function(){
  mobilenaSection.style.display ="none";
}




