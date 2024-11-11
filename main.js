const products = [
    {
      title: "Mars rug",
      img: "img/image 10 (1).png",
      coin: 100,
      count: 24,
    },
    {
      title: "Keyboard sticker",
      img: "img/image 22 (1).png",
      coin: 49,
      count: 11,
    },
    {
      title: "Smart watch",
      img: "img/image 23 (1).png",
      coin: 899,
      count: 12,
    },
    {
      title: "Wireless keyboard",
      img: "img/image 24 (1).png",
      coin: 350,
      count: 0,
    },
    {
      title: "Mouse",
      img: "img/image 25 (1).png",
      coin: 256,
      count: 2,
    },
    {
      title: "AirPods",
      img: "img/image 26 (1).png",
      coin: 600,
      count: 5,
    },
    {
      title: "Powerbank",
      img: "img/image 27 (1).png",
      coin: 899,
      count: 5,
    },
    {
      title: "USB flash drive",
      img: "img/image 28 (1).png",
      coin: 350,
      count: 21,
    },
    {
      title: "Smartphone",
      img: "img/image 29 (1).png",
      coin: 3699,
      count: 2,
    },
    {
      title: "Playstation 5",
      img: "img/image 30 (1).png",
      coin: 7449,
      count: 1,
    },
    {
      title: "Yandex Station",
      img: "img/image 31 (1).png",
      coin: 1999,
      count: 0,
    },
    {
      title: "Planshet Samsung",
      img: "img/image 32 (1).png",
      coin: 4999,
      count: 24,
    },
  ];
  
  const searchInput = document.querySelector("#searchInput");
  let cards = document.querySelector(".cards");

  function displayProducts(productsArray) {
    cards.innerHTML = "";
  
    productsArray.forEach((item) => {
      let box = document.createElement("div");
      box.classList.add("box1");
  
      let img = document.createElement("img");
      img.src = item.img;
  
      let span = document.createElement("span");
      span.classList.add("span");
  
      let coinIMG = document.createElement("img");
      coinIMG.src = "./images/Coin 1.png";
  
      let text = document.createElement("p");
      text.textContent = item.title;
  
      let span1 = document.createElement("span");
      span1.textContent = `${item.count} dona mavjud`;
      span1.classList.add("span1");
  
      span.append(coinIMG);
      box.append(img, text, span, span1);
  
      cards.append(box);
    });
  }
  
  displayProducts(products);
  
  searchInput.addEventListener("input", (e) => {
    let inputValue = e.target.value.toLowerCase();
  
    let filteredProducts = products.filter((item) =>
      item.title.toLowerCase().includes(inputValue)
    );
  
    displayProducts(filteredProducts);
  });
  