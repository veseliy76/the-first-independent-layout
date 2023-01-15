"use strict";

let productsShopBlock = document.querySelector(".products__shop");
let cardBtnEl = document.querySelectorAll(".products__shop__card-btn");
let basketEl = document.querySelector(".basket");
let basketItemEl = document.querySelector(".basket__item");
// let counterOfItem;
// let counter = 1;
let itemCounter = 0;

productsShopBlock.addEventListener("click", (e) => {
    if (!e.target.closest(".products__shop__card-btn")) {
        return;
    } else {
        //if (!e.target.parentElement.classList.contains("added")) {
        //counter = 1;
        let productsShopCardEl = e.target.closest(".products__shop__card");
        //e.target.parentElement.classList.add("added");
        basketEl.style.display = "block";
        let imageItemEl = productsShopCardEl.firstElementChild.firstElementChild.cloneNode();
        let nameItemEl = productsShopCardEl.firstElementChild.nextElementSibling.cloneNode();
        nameItemEl.textContent = productsShopCardEl.firstElementChild.nextElementSibling.textContent;
        let priceItemEl = productsShopCardEl.lastElementChild.previousElementSibling.cloneNode();
        priceItemEl.textContent = productsShopCardEl.lastElementChild.previousElementSibling.textContent;

        let shoppingItemEl = document.createElement("div");
        shoppingItemEl.classList.add("included");
        shoppingItemEl.style.border = "1px solid black";
        shoppingItemEl.style.position = "relative";
        let closeBtn = document.createElement("button");
        closeBtn.classList.add("closed-button");
        closeBtn.style.type = "button";
        closeBtn.style.border = "none";
        closeBtn.style.backgroundColor = "transparent";
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "10px";
        closeBtn.style.right = "10px";
        let closeCrossImg = document.createElement("img");
        closeCrossImg.src = "img/close_cross.png";
        closeCrossImg.setAttribute("alt", "close-cross");
        closeBtn.prepend(closeCrossImg);
        shoppingItemEl.appendChild(closeBtn);
        shoppingItemEl.appendChild(imageItemEl);
        shoppingItemEl.appendChild(nameItemEl);
        shoppingItemEl.appendChild(priceItemEl);
        basketItemEl.appendChild(shoppingItemEl);
        itemCounter++;

        //  let quantityOfGoods = document.createElement("p");
        //  quantityOfGoods.textContent = "Товара в корзине: ";
        //  quantityOfGoods.style.marginTop = "10px";
        //  counterOfItem = document.createElement("span");
        //  counterOfItem.textContent = counter;
        //  quantityOfGoods.appendChild(counterOfItem);
        //  shoppingItemEl.appendChild(quantityOfGoods);
        //} else {
        //  counterOfItem.textContent = ++counter;     не смог придумать, как привязать счетчик
        // /*++counterOfItem.textContent;*/            кол-ва товаров к конкретному блоку.
        closeBtn.addEventListener("click", (e) => {
            e.target.closest(".included").style.display = "none";
            --itemCounter;
            if (itemCounter == 0) {
                basketEl.style.display = "none";
            }
        });
    };
});






