let products = []; // 만두 상품
let cart = JSON.parse(localStorage.getItem("cart")) || []; // 장바구니

async function loadProducts() {
  const res = await fetch("./mock.json");
  products = await res.json();
  renderProducts(products);
}

function renderProducts(products) {
  const ul = document.querySelector("ul");

  ul.innerHTML = products
    .map(
      (item) => `
      <li>
        <h3>${item.productName}</h3>
        <img src="./imgs/${item.productImgFileName}" alt="${item.productName}" width="200" />
        <span>${item.productPrice}</span>
        <button id="${item.id}" class="addCart">add cart</button>
      </li>
    `
    ).join("");
}

document.querySelector("ul").addEventListener("click", (e) => {
  if (!e.target.classList.contains("addCart")) return;

  const id = Number(e.target.id);
  const product = products.find((item) => item.id === id);

  // 장바구니 상품 중복 체크
  const checkCart = cart.find((item) => item.id === id);

  if (checkCart) {
    checkCart.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
});

// remove all cart 버튼
const removeAllCartBtn = document.querySelector(".clearCart");

removeAllCartBtn.addEventListener("click", () => {
  localStorage.removeItem("cart");
  cart = [];
});

// 모달 생성
function showModal() {
  let todayModal = sessionStorage.getItem("todayModal");

  if(!todayModal) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modalInner">
        <span>만두샵에 오신 것을 환영합니다.</span>
        <button class="closeModal">오늘 그만보기</button>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = document.querySelector(".closeModal");

    closeBtn.addEventListener("click", () => {
      sessionStorage.setItem("todayModal", "true");
      modal.remove();
    });
  }
}

loadProducts();
showModal();
