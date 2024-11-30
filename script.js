function Category() {
  let catProducts = [
    {
      img: "./images/over.jpg",
      title: "Over",
    },
    {
      img: "./images/neckband.jpg",
      title: "Neckband",
    },
    {
      img: "./images/gaming.jpg",
      title: "Gaming",
    },
    {
      img: "./images/sports.jpg",
      title: "Sports",
    },
    {
      img: "./images/wired.jpg",
      title: "Wired",
    },
  ];

  let cardsContainer = document.querySelector("card-container");
  cluster = "";
  catProducts.forEach((card) => {
    cluster += ` <div class="card">
          <div class="card-image">
            <img src=${card.img} alt="" />
          </div>
          <div class="card-contents">
            <p>${card.title}</p>            
          </div>
        </div>`;

    cardsContainer.innerHTML = cluster;
  });
}
Category();

function AllProducts() {
  let AvailableProducts = [
    {
      img: "./over/Over1.jpg",
      title: "Over Headphones",
      review: "(100)",
      price: 100,
    },
    {
      img: "./neckband/Neckband1.jpg",
      title: "Neckband",
      review: "(100)",
      price: 100,
    },
    {
      img: "./over/Over2.jpg",
      title: "Over Headphones",
      review: "(100 )",
      price: 100,
    },
    {
      img: "./gaming/gaming5.jpg",
      title: "Gaming",
      review: "(100)",
      price: 100,
    },
    {
      img: "./over/Over3.jpg",
      title: "Over Headphones",
      review: "(100)",
      price: 100,
    },
    {
      img: "./sports/sports2.jpg",
      title: "Sports",
      review: "(100)",
      price: 100,
    },
    {
      img: "./neckband/Neckband5.jpg",
      title: "Neckband",
      review: "(100)",
      price: 100,
    },
    //Other

    {
      img: "./over/Over5.jpg",
      title: "Over Headphones",
      review: "(100)",
      price: 100,
    },
    {
      img: "./neckband/Neckband2.jpg",
      title: "Neckband",
      review: "(100)",
      price: 100,
    },
    {
      img: "./neckband/Neckband3.jpg",
      title: "Neckband",
      review: "(100)",
      price: 100,
    },
    {
      img: "./neckband/Neckband4.jpg",
      title: "Neckband",
      review: "(100)",
      price: 100,
    },

    {
      img: "./gaming/gaming4.jpg",
      title: "Gaming",
      review: "(100)",
      price: 100,
    },
    //other

    {
      img: "./over/Over4.jpg",
      title: "Over Headphones",
      review: "(100)",
      price: 100,
    },
    {
      img: "./gaming/gaming3.jpg",
      title: "Gaming",
      review: "(100)",
      price: 100,
    },
    {
      img: "./wired/wired2.jpg",
      title: "Wired",
      review: "(100)",
      price: 100,
    },

    {
      img: "./sports/sports4.jpg",
      title: "Sports",
      review: "(100)",
      price: 100,
    },
    {
      img: "./gaming/gaming6.jpg",
      title: "Gaming",
      review: "(100)",
      price: 100,
    },
    //Sports

    {
      img: "./sports/sports3.jpg",
      title: "Sports",
      review: "(100)",
      price: 100,
    },
    {
      img: "./wired/wired.jpg",
      title: "Wired",
      review: "(100)",
      price: 100,
    },

    //Wired

    {
      img: "./wired/wired3.jpg",
      title: "Wired",
      review: "(100)",
      price: 100,
    },
    {
      img: "./gaming/gaming2.jpg",
      title: "Gaming",
      review: "(100)",
      price: 100,
    },
    {
      img: "./wired/wired4.jpg",
      title: "Wired",
      review: "(100)",
      price: 100,
    },
    {
      img: "./wired/wired5.jpg",
      title: "Wired",
      review: "(100)",
      price: 100,
    },
  ];
  let ProductContainer = document.querySelector(".All-Products");
  let cluster = "";
  AvailableProducts.forEach((product) => {
    cluster += `<div class="card">
          <div class="card-image">
            <img src=${product.img} alt="" />
          </div>
          <div class="card-contents">
            <p class="title">${product.title}</p>
             <p class="product-price">Rs: ${product.price}</p>
             
            <p>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <span>${product.review}</span>
            </p>
           
            
          </div>
        </div>`;

    ProductContainer.innerHTML = cluster;
  });
}
AllProducts();

function CartIcon() {
  let Addbtn = document.querySelectorAll(".AddToCart");
  let CartCount = document.querySelector(".Cart-count");
  let count = 0;
  Addbtn.forEach((button) => {
    button.addEventListener("click", function () {
      count = count + 1;
      CartCount.innerHTML = count;
    });
  });
}
CartIcon();

//Show and Hide cart

function ShowCartItems() {
  let cartBtn = document.querySelector(".cart-btn");
  let CartItems = document.querySelector(".CartItems");
  cartBtn.addEventListener("click", function () {
    if (CartItems.style.display == "none") {
      CartItems.style.display = "flex";
    } else {
      CartItems.style.display = "none";
    }
  });
}
ShowCartItems();

function ProductDetail() {
  let SelectedItem = document.querySelectorAll(".All-Products .card");
  SelectedItem.forEach((card) => {
    let ProdInfo = document.querySelector(".product-info");
    card.addEventListener("click", function () {
      ProdInfo.style.display = "flex";
    });
    let Close = document.querySelector(".Close");
    Close.addEventListener("click", function () {
      ProdInfo.style.display = "none";
    });
  });
}
ProductDetail();
