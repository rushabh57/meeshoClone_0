document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading progress
  let progressBar = document.querySelector(".bar");
  let interval = setInterval(function () {
    let randomIncrement = Math.random() * 20;
    if (progressBar.clientWidth >= 300) {
      clearInterval(interval);
      const loader = document.querySelector(".loader").classList.add("hidden");
      document.body.classList.add("visible");
      document.body.classList.remove("showy");
    } else {
      progressBar.style.width =
        progressBar.clientWidth + randomIncrement + "px";
    }
  }, 200); // Adjust the interval as needed
});
const mainproductsforall = document.querySelector(".main-products-for-all");

const More__product = [
  {
    id: 0,
    img: "./imgs/mens/img_1.webp",
    lbl1: "men",
    lbl2: "new",
    title: "Premium White Cotton Shirt",
    desciption:
      "Upgrade your wardrobe with our premium white cotton shirt. Impeccable style meets unparalleled comfort. Perfect for any occasion.",
    price: 259,
    star: 3,
    divilary: "paid delivery",
  },
  {
    id: 1,
    img: "./imgs/women/img_1.webp",
    lbl1: "women",
    lbl2: "new",
    title: "Chic Pink Flared Kurti",
    desciption:
      "Step into elegance with our chic pink flared kurti. Intricate border yoke placement and vibrant prints make it a wardrobe essential.",
    price: 304,
    star: 3.2,
    divilary: "paid delivery",
  },
  {
    id: 2,
    img: "./imgs/mens/img1.jpeg",
    lbl1: "men",
    lbl2: "old",
    title: "Classic Jorden Leather Shoes",
    desciption:
      "Step out in timeless style with our classic Jorden limited leather shoes. Crafted for durability and fashion-forward appeal.",
    price: 310,
    star: 3.23,
    divilary: "paid delivery",
  },
  {
    id: 3,
    img: "./imgs/shoe/shoe_1.png",
    lbl1: "men",
    lbl2: "new",
    title: "Jorden Limited Everyday Shoe",
    desciption:
      "Experience everyday comfort with our Jorden Limited shoe. A perfect blend of style and functionality for your daily adventures.",
    price: 295,
    star: 3.5,
    divilary: "paid delivery",
  },
  {
    id: 4,
    img: "./imgs/shoe/shoe2.webp",
    lbl1: "men",
    lbl2: "old",
    title: "Jorden Limited Casual Shoe",
    desciption:
      "Casual yet stylish, our Jorden Limited casual shoes are a go-to choice for your relaxed outings. Walk with confidence.",
    price: 325,
    star: 3,
    divilary: "paid delivery",
  },
  {
    id: 5,
    img: "./imgs/shoe/women1.png",
    lbl1: "women",
    lbl2: "new",
    title: "Air Jordan 1 Mid",
    desciption:
      "Elevate your sneaker game with Air Jordan sneakers. Modern design meets ultimate comfort for your active lifestyle.",
    price: 299,
    star: 2.5,
    divilary: "paid delivery",
  },
  {
    id: 6,
    img: "./imgs/shoe/women2.png",
    lbl1: "women",
    lbl2: "new",
    title: "Air Jordan 1 Mid SE",
    desciption:
      "Make a statement at formal events with our Air Jordan shoes. Classic design and premium craftsmanship.",
    price: 310,
    star: 5,
    divilary: "paid delivery",
  },
  {
    id: 7,
    img: "./imgs/women/women1.jpg",
    lbl1: "women",
    lbl2: "old",
    title: "Diva Emb Refined Women Dresses",
    desciption:
      "Step into sophistication with our Jorden Limited leather boots. Designed to withstand both style and rugged terrains.",
    price: 259,
    star: 5,
    divilary: "paid delivery",
  },
  {
    id: 8,
    img: "./imgs/women/img4.jpeg",
    lbl1: "women",
    lbl2: "old",
    title: "Trending Indian Ethnic Fashion",
    desciption:
      "Casual elegance redefined with our Trending Indian Ethnic Fashion. Slip into comfort without compromising on style.",
    price: 315,
    star: 5,
    divilary: "paid delivery",
  },
  {
    id: 9,
    img: "./imgs/women/img3.png",
    lbl1: "women",
    lbl2: "new",
    title: "V-neck-Blouses",
    desciption:
      "Unleash your athletic prowess with Jorden Limited athletic shoes. Engineered for performance without sacrificing style.",
    price: 330,
    star: 4.5,
    divilary: "paid delivery",
  },
  {
    id: 10,
    img: "./imgs/mens/img2.jpeg",
    lbl1: "men",
    lbl2: "new",
    title: "Mens Clothing | Mens Fashion |",
    desciption:
      "Slide into comfort and style with Jorden Limited slip-ons. Effortless footwear for your laid-back moments.",
    price: 305,
    star: 3.5,
    divilary: "paid delivery",
  },
  {
    id: 11,
    img: "./imgs/clock/c2.jpeg",
    lbl1: "clock",
    lbl2: "old",
    title: "Vintage Brown Leather Cloak",
    desciption:
      "Step into the past with our vintage brown leather cloak. Timeless style meets modern comfort for a unique fashion statement.",
    price: 310,
    star: 4,
    divilary: "paid delivery",
  },
  {
    id: 12,
    img: "./imgs/clock/c1.jpeg",
    lbl1: "clock",
    lbl2: "old",
    title: "Mystic Green Hooded Cloak",
    desciption:
      "Embrace mystery with our mystic green hooded cloak. Perfect for fantasy enthusiasts and those who love a touch of magic.",
    price: 295,
    star: 3.4,
    divilary: "paid delivery",
  },
  {
    id: 13,
    img: "./imgs/mens/img1.1.jpeg",
    lbl1: "kid",
    lbl2: "new",
    title: "Whimsical Unicorn Onesie",
    desciption:
      "Let your little one's imagination soar with our whimsical unicorn onesie. Comfortable, cute, and perfect for playtime.",
    price: 45,
    star: 5,
    divilary: "paid delivery",
  },
  {
    id: 14,
    img: "./imgs/mens/img1.2.jpeg",
    lbl1: "kid",
    lbl2: "new",
    title: "Adorable Dinosaur Pajama Set",
    desciption:
      "Make bedtime fun with our adorable dinosaur pajama set. Soft, cozy, and designed for a good night's sleep.",
    price: 35,
    star: 5,
    divilary: "paid delivery",
  },
];

const category = [
  ...new Set(
    More__product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
mainproductsforall.innerHTML = category
  .map((item) => {
    var { id, img, title, price, lbl1, lbl2, star, divilary } = item;
    return `<div class="product-card ${lbl1.toLowerCase()}" data-product="${id}" data-price="${price}" >
          <div class="product-img-container">
            <img src="${img}" alt="Men's T-shirt">
          </div>
          <div class="label-container">
            <label class="labelProduct">${lbl1.toLowerCase()}</label>
            <label class="labelProduct">${lbl2.toLowerCase()}</label>
          </div>
            <h2>${title}</h2>
            <p>₹${price}</p>
          <div class="info">
            <a href="index.html" id="Supplier" class="Supplier">supplier</a>
              <div class="rating">
                ${star}
                <img src="./imgs/star-shine-svgrepo-com.svg" alt="3.6">
              </div>
            </div>
            <h3 class="DeliverContent">${divilary} </h3>
          </div>`;
  })
  .join("");

// Search functionality
const srchBtn = document.querySelector(".srchBtn");
const inputSrch_for_MP = document.querySelector(".inputSrch_for_MP");
const mainproductsforallProducts = document.querySelectorAll(
  ".main-products-for-all .product-card"
);

// Search functionality
srchBtn.addEventListener("click", () => {
  let userInput = inputSrch_for_MP.value.trim().toLowerCase();
  mainproductsforallProducts.forEach((card) => {
    const cardLbl1 = card
      .querySelector(".labelProduct:first-child")
      .textContent.toLowerCase();
    const cardLbl2 = card
      .querySelector(".labelProduct:last-child")
      .textContent.toLowerCase();
    const cardTitle = card.querySelector("h2").textContent.toLowerCase();
    const cardPrice = parseFloat(card.getAttribute("data-price"));

    // Check if the user input matches any of the values
    const matchFound =
      (userInput === "men" && cardLbl1.includes("men")) ||
      (userInput === "women" && cardLbl1.includes("women")) ||
      (userInput !== "men" &&
        userInput !== "women" &&
        (cardLbl1.includes(userInput) ||
          cardLbl2.includes(userInput) ||
          cardTitle.includes(userInput) ||
          (Number.isFinite(cardPrice) && cardPrice <= parseFloat(userInput))));

    if (matchFound) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});

// Add event listener to each product card
mainproductsforallProducts.forEach((card) => {
  card.addEventListener("click", () => {
    // Get the data-product attribute value
    const productId = card.getAttribute("data-product");

    // Find the product data based on the clicked ID
    const clickedProduct = More__product.find(
      (product) => product.id == productId
    );

    // Update the popup content with the clicked product data
    updatePopupContent(clickedProduct);

    // Display the popup
    document.getElementById("popup").style.display = "block";
  });
});

// Function to update popup content
function updatePopupContent(product) {
  // Update the content of the popup based on the product data
  document.getElementById("popupImg").src = product.img;
  document.getElementById("popupLabelOne").textContent = product.lbl1;
  document.getElementById("popupLabelTwo").textContent = product.lbl2;
  document.getElementById("popupTitle").textContent = product.title;
  document.getElementById("popupPrice").textContent = `₹${product.price}`;
  document.getElementById("popupDescription").textContent = product.desciption;
  document.getElementById("popupDelivery").textContent = product.divilary;
}

const navBottomNav = document.querySelectorAll(" .nav-btn-groups button");
navBottomNav.forEach((btn) => {
  btn.classList.remove("active-navBtnBottom");
  btn.addEventListener("click", () => {
    btn.classList.add("active-navBtnBottom");
  });
});

const accordion = (function () {
  const accordionButtons = document.getElementsByClassName("accordion-heading");

  for (let i = 0; i < accordionButtons.length; i++) {
    const accordionButton = accordionButtons[i];
    accordionButton.onclick = function () {
      const classList = this.parentNode.classList;
      if (classList.contains("active")) {
        this.classList.remove("a-ctive");
        classList.remove("active");
        this.setAttribute("aria-expanded", false);
      } else {
        classList.add("active");
        this.classList.add("a-ctive");
        this.setAttribute("aria-expanded", true);
      }
    };
  }
})();

// ===================filter code here=====================
const fiilterBtnIcon = document.getElementById("FilterBtnIcon");
let filterBtnIsClicked = false;
const fillteringContainer = document.getElementById("fillteringContainer");
const SecondproductContainer = document.querySelector(
  " .productContainerSecond"
);
fiilterBtnIcon.addEventListener("click", () => {
  if (!filterBtnIsClicked) {
    gsap.to(fiilterBtnIcon, {
      filter: " invert(0) grayscale(0)",
    });
    gsap.to(
      ".filterwrapper",
      {
        opacity: 0,
        y: -15,
        display: "none",
      },
      "-=.5"
    );
    gsap.to(fillteringContainer, {
      opacity: 0,
      display: "none",
    });
    filterBtnIsClicked = true;
  } else {
    gsap.to(fiilterBtnIcon, {
      filter: " invert(.35) grayscale(1)",
    });
    gsap.to(fillteringContainer, {
      x: -0,
      opacity: 1,
      width: 350,
      display: "block",
    });
    gsap.to(
      ".filterwrapper",
      {
        opacity: 1,
        y: 20,
        display: "block",
      },
      "+=.5"
    );
    filterBtnIsClicked = false;
  }
});

// ==========================================================
// ====================Search Code Here======================
// ==========================================================
const RecentSearches = document.getElementById("RecentSearches");
const searchInput = document.getElementById("SearchInput");

let searchValue = "";

searchInput.addEventListener("input", () => {
  searchValue = searchInput.value.trim();
});

searchInput.addEventListener("change", () => {
  if (searchValue !== "") {
    let recentSearchLi = document.createElement("li");
    recentSearchLi.classList.add("rsUl_Li");
    recentSearchLi.textContent = searchValue;
    RecentSearches.appendChild(recentSearchLi);

    const DeletRecentSearch = document.createElement("spna");
    DeletRecentSearch.innerHTML = `&times`;
    DeletRecentSearch.classList.add("DeletRecentSearch");
    recentSearchLi.appendChild(DeletRecentSearch);

    DeletRecentSearch.addEventListener("click", () => {
      DeletRecentSearch.parentElement.remove();
    });

    searchInput.value = ""; // Clear the search input
    searchValue = ""; // Reset the searchValue for the next search
  }
});

// Optionally, you can also clear the search input when the user clicks on a recent search item
RecentSearches.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    searchInput.value = event.target.textContent;
    // Trigger the search functionality here if you want
  }
});
// ================

// Product For You Container -->
const scrollContainer = document.querySelector(".product-content-wrapper");
const scrollContent = document.querySelector(".product-container");
const scrollIndicatorLeft = document.getElementById("scroll-indicator-left");
const scrollIndicatorRight = document.getElementById("scroll-indicator-right");

scrollIndicatorLeft.addEventListener("click", () => {
  scrollContainer.scrollTo({
    left: scrollContainer.scrollLeft - 100, // Adjust the value as needed
    behavior: "smooth",
  });
});

scrollIndicatorRight.addEventListener("click", () => {
  scrollContainer.scrollTo({
    left: scrollContainer.scrollLeft + 100, // Adjust the value as needed
    behavior: "smooth",
  });
});

const popularSearches = document.querySelector(".popular-searches");
const threeDots = document.getElementById("ThreeDots");
isClicked = false;

threeDots.addEventListener("click", () => {
  if (!isClicked) {
    gsap.to(popularSearches, {
      opacity: 1,
      display: "block",
      duration: 1,
      ease: "power4.Out(1.7)",
      top: "100%",
    });

    isClicked = true;
  } else {
    gsap.to(popularSearches, {
      opacity: 0,
      display: "none",
      duration: 1,
      ease: "power4.Out(1.7)",
      top: "10%",
    });
    isClicked = false;
  }
});

gsap.registerPlugin(Flip);

const links = document.querySelectorAll("nav li span");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // Turn Nav Blue
    gsap.to(links, { color: "var(--black)" });

    if (document.activeElement === link) {
      gsap.to(link, { color: "var( --primary-color)" });
    }
    // Move Blue Line Using Flip
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 1.25,
      absolute: true,
      ease: "elastic.out(1,0.5)",
    });
  });
});

const dropContainers = document.querySelectorAll(".main-drop-container");
const dropContainersCloseBtn = document.querySelectorAll(".close-box");
let activeIndex = null;

links.forEach((open, index) => {
  open.addEventListener("click", function () {
    if (activeIndex === index) {
      dropContainers[index].classList.remove("active");
      activeIndex = null;
    } else {
      if (activeIndex !== null) {
        dropContainers[activeIndex].classList.remove("active");
      }

      dropContainers[index].classList.add("active");
      activeIndex = index;
    }
    dropContainersCloseBtn[index].addEventListener("click", function () {
      dropContainers[index].classList.remove("active");
      activeIndex = null;
    });
  });
});

const profile = document.querySelector(".Profile");
profile.addEventListener("click", () => {
  // Set the desired URL you want to redirect to
  const redirectUrl = "SignupPage.html";
  window.location.href = redirectUrl;
});

const slideTimeLine = gsap.timeline({
  repeat: -1,
  defaults: {
    duration: 1.5,
  },
});

slideTimeLine
  .to(
    ".img-container",
    {
      width: "100%",
      ease: Expo.easeInOut,
      stagger: 2,
    },
    "a"
  )

  .to(
    ".silderHeading h2",
    {
      ease: Expo.easeInOut,
      stagger: 2,
      top: 0,
    },
    "a"
  )
  .to(
    ".silderHeading h2",
    {
      delay: 2,
      ease: Expo.easeInOut,
      stagger: 2,
      top: 200,
    },
    "a"
  )
  .to(
    ".silderSubHeading p",
    {
      ease: Expo.easeInOut,
      stagger: 2,
      top: 0,
    },
    "a"
  )
  .to(
    ".silderSubHeading p",
    {
      delay: 2,
      ease: Expo.easeInOut,
      stagger: 2,
      top: 200,
    },
    "a"
  )
  .to(
    ".slider-button button",
    {
      ease: Expo.easeInOut,
      stagger: 2,
      top: 0,
    },
    "a"
  )
  .to(
    ".slider-button button",
    {
      delay: 2,
      ease: Expo.easeInOut,
      stagger: 2,
      top: 200,
    },
    "a"
  )

  .to(
    ".img-container img",
    {
      ease: Expo.easeInOut,
      stagger: 2,
      right: 0,
      delay: 0.5,
      opacity: 0.8,
    },
    "a"
  );

// ======================================================
//                PRODUCT FOR YOU SLIDER
//                   \-- LOGIC CODE --/
// ======================================================
const PasueSliderBtn = document.getElementById("PauseSliderBtn");
const pausePlayIcon = document.getElementById("pausePlayIcon");
const PauseBTnG = `play_arrow `;
const playBtn = `pause`;
PasueSliderBtn.addEventListener("click", (e) => {
  if (pausePlayIcon.innerHTML !== PauseBTnG) {
    slideTimeLine.pause();
    pausePlayIcon.innerHTML = PauseBTnG;
  } else {
    slideTimeLine.play();
    pausePlayIcon.innerHTML = playBtn;
  }
});

// ======================================================
// CHANGE COLOR IF IT'S CONTAINS ARRAYOFPRODUCTSITEMS NAME'S
//                   \-- LOGIC CODE --/
// ======================================================

let arrayOfProductItems = [
  "men",
  "women",
  "kid",
  "accesories",
  "electronics",
  "jewellery",
  "home",
  "kitchen",
  "beauty",
  "health",
  "bags",
  "footwear",
];
const labelProsElements = document.querySelectorAll(".labelProduct");

labelProsElements.forEach((label) => {
  arrayOfProductItems.forEach((item) => {
    if (label.classList.contains(item)) {
      label.style.mixBlendMode = "difference";
    }
  });
});
