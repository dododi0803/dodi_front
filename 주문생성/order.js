let cart = [];
let total = 0;

function addItem(name, price) {
    cart.push({ name, price });
    total += price;
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    cart.forEach(item => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerText = `${item.name} - ${item.price.toLocaleString()}원`;
        cartList.appendChild(div);
    });

    document.getElementById("totalPrice").innerText =
        `총 금액: ${total.toLocaleString()}원`;
}

// 주문하기 → 결제 화면으로
function goToPayment() {
    if(cart.length === 0){
        alert("메뉴를 선택해주세요!");
        return;
    }

    document.getElementById("menuScreen").style.display = "none";
    document.getElementById("paymentScreen").style.display = "block";
    document.getElementById("payAmount").innerText = total.toLocaleString();
}

// 결제 완료
function completePayment() {
    const orderNo = "A-" + Math.floor(Math.random() * 1000);
    document.getElementById("orderNumber").innerText =
        `주문번호 ${orderNo} / 결제 완료`;

    // 초기화
    cart = [];
    total = 0;
    renderCart();

    // 결제 화면 → 메뉴 화면으로
    document.getElementById("paymentScreen").style.display = "none";
    document.getElementById("menuScreen").style.display = "block";
}