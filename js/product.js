// For Products For You
const products = [
  {
    id: 1,
    title: `Men's T-shirt`,
    price: "₹40.00",
    labelOne: "men",
    labelTwo: "New",
    imgSrc: "./imgs/mens/img_1.webp",
    smallImgOne: "",
    smallImgSecond: "",
    smallImgThird: "",
    smallImgFourth: "",
    desciption:
      "produt1[Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quo consequatur exercitationem repellendus veniam recusandae laboriosam. Cum voluptate ea nulla Lorem ipsum dolor sit amet consectetur adipisicing elit..]",
    supplier: "supplier",
    rating: "3.6",
    delivery: "Paid delivery",
  },
  {
    id: 2,
    title: `Women's T-shirt`,
    price: "₹50.55",
    labelOne: "women",
    labelTwo: "New",
    imgSrc: "./imgs/women/img_1.webp",
    desciption:
      "produt2[Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quo consequatur exercitationem repellendus veniam recusandae laboriosam. Cum voluptate ea nulla Lorem ipsum dolor sit amet consectetur adipisicing elit..]",
    supplier: "supplier",
    rating: "4.6",
    delivery: "Paid delivery",
  },
  {
    id: 3,
    title: `kid's T-shirt`,
    price: "₹20.55",
    labelOne: "kid",
    labelTwo: "New",
    imgSrc: "./imgs/mens/img1.1.jpeg",
    desciption:
      "produt3[Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quo consequatur exercitationem repellendus veniam recusandae laboriosam. Cum voluptate ea nulla Lorem ipsum dolor sit amet consectetur adipisicing elit..]",
    supplier: "supplier",
    rating: "5",
    delivery: "free delivery",
  },
  {
    id: 4,
    title: `kitchon plate`,
    price: "₹20.55",
    labelOne: "kitchen",
    labelTwo: "New",
    imgSrc: "./imgs/meesho (1).png",
    desciption:
      "produt3[Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quo consequatur exercitationem repellendus veniam recusandae laboriosam. Cum voluptate ea nulla Lorem ipsum dolor sit amet consectetur adipisicing elit..]",
    supplier: "supplier",
    rating: "5",
    delivery: "free delivery",
  },
  {
    id: 5,
    title: `accesories For you`,
    price: "₹28.55",
    labelOne: "accesories",
    labelTwo: "New",
    imgSrc: "./imgs/meesho (1).png",
    desciption:
      "produt3[Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quo consequatur exercitationem repellendus veniam recusandae laboriosam. Cum voluptate ea nulla Lorem ipsum dolor sit amet consectetur adipisicing elit..]",
    supplier: "supplier",
    rating: "5",
    delivery: "free delivery",
  },
];

const productContainer = document.querySelector(".product-container");
const popupCard = document.querySelector(".popup");
const popupSuplier = document.getElementById("Supplier");

popupSuplier.addEventListener("click", (e) => {
  e.target = console.log("asd");
});

const closeBtn = document.querySelector(".closeBtn");

function createProductCards(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.setAttribute("data-product", product.id);

  const productImg = document.createElement("img");
  productImg.src = product.imgSrc;
  productImg.alt = product.title;

  const productImgContainer = document.createElement("div");
  productImgContainer.classList.add("product-img-container");
  productImgContainer.appendChild(productImg);

  const labelOne = document.createElement("label");
  labelOne.innerText = product.labelOne;
  labelOne.classList.add("labelProduct");
  labelOne.classList.add(`${product.labelOne}`);

  const labelTwo = document.createElement("label");
  labelTwo.innerText = product.labelTwo;
  labelTwo.classList.add("labelProduct");

  const LabelContainer = document.createElement("div");
  LabelContainer.classList.add("label-container");
  LabelContainer.appendChild(labelOne);
  LabelContainer.appendChild(labelTwo);

  const productTitle = document.createElement("h2");
  productTitle.innerText = product.title;

  const productPrice = document.createElement("p");
  productPrice.innerText = `${product.price}`;

  const infoCard = document.createElement("div");
  infoCard.classList.add("info");

  const infoCardSupplier = document.createElement("a");
  infoCardSupplier.href = "index.html";
  infoCardSupplier.id = "Supplier";
  infoCardSupplier.innerText = `${product.supplier}`;
  infoCardSupplier.classList.add("Supplier");

  const ratingStartImg = document.createElement("img");
  ratingStartImg.src = "./imgs/star-shine-svgrepo-com.svg";
  ratingStartImg.alt = product.rating;

  const infoCardRating = document.createElement("div");
  infoCardRating.innerText = product.rating;
  infoCardRating.classList.add("rating");

  infoCardRating.appendChild(ratingStartImg);
  infoCard.appendChild(infoCardSupplier);
  infoCard.appendChild(infoCardRating);

  const productDelivery = document.createElement("h3");
  productDelivery.innerText = product.delivery;
  productDelivery.classList.add("DeliverContent");

  productCard.appendChild(productImgContainer);
  productCard.appendChild(LabelContainer);
  productCard.appendChild(productTitle);
  productCard.appendChild(productPrice);
  productCard.appendChild(infoCard);
  productCard.appendChild(productDelivery);

  productContainer.appendChild(productCard);

  // Event Listener CLick on ProductCard

  productCard.addEventListener("click", () => {
    currentProductId = product.id;
    document.getElementById("popupLabelOne").innerText = product.labelOne;
    document.getElementById("popupLabelTwo").innerText = product.labelTwo;
    document.getElementById("popupTitle").innerText = product.title;
    document.getElementById("popupPrice").innerText = product.price;
    document.getElementById("popupImg").src = product.imgSrc;

    document.getElementById("popupDescription").innerText = product.desciption;
    document.getElementById("popupDelivery").innerText = product.delivery;
    document.getElementById("Supplier").innerText = product.supplier;
    document.getElementById("rating").innerText = product.rating;
    popupCard.style.display = "block";
  });
}

products.forEach((product) => {
  createProductCards(product);
});

closeBtn.addEventListener("click", () => {
  popupCard.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popupCard) {
    popupCard.style.display = "none";
  }
});
