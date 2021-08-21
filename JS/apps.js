const smallMemory = document.getElementById('small-memory');
const bigMemory = document.getElementById('big-memory');

const memoryPrice = document.getElementById('memory-price');


// total price
const totalPrice = document.getElementById('total-price');
// total
const total = document.getElementById('total');



smallMemory.addEventListener('click', function () {
    memoryPrice.innerText = '0';
    return updatePrice();
});
bigMemory.addEventListener('click', function () {
    memoryPrice.innerText = '180';
    return updatePrice();
});

// update memory price
// function updatePrice() {
//     // const smallExtraMemory = parseInt(memoryPrice.innerText);
//     const productPrice = parseInt(totalPrice.innerText);
//     const grandTotal = smallExtraMemory + productPrice;
//     total.innerText = grandTotal;

// };

// get SSD storage part
const smallStorage = document.getElementById('small-storage');
const bigStorage = document.getElementById('big-storage');
const biggerStorage = document.getElementById('bigger-storage');

const ssdPrice = document.getElementById('ssd-price');




// get SSD storage part listner
smallStorage.addEventListener('click', function () {
    ssdPrice.innerText = '0';
    return updatePrice();
});
bigStorage.addEventListener('click', function () {
    ssdPrice.innerText = '100';
    return updatePrice();
});
biggerStorage.addEventListener('click', function () {
    ssdPrice.innerText = '180';
    return updatePrice();
});

// get delivery Id
const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');

const deliveryCost = document.getElementById('delivery-cost');

// get delivery event part
freeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '5';
    return updatePrice();
});
paidDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '20';
    return updatePrice();
});

// Promo code Id
const promoInputCode = document.getElementById('promo-code');

// Promo Button 
const promoButton = document.getElementById('promo-btn');
// discount price
const discountPrice = document.getElementById('discount-price');

// function for promotion
function addPromoCode() {

}


function calculatePromo() {
    const promo = promoInputCode.value;
    if (promo == 'stevekaku') {
        const promoTotalPrice = total.innerText;
        const tax = parseInt(promoTotalPrice) / 100 * 20;
        discountPrice.innerText = promoTotalPrice - tax;
    }
    else {
        alert('Please enter valid promo');
    }
    promoInputCode.value = '';
}

promoButton.addEventListener('click', function () {
    calculatePromo();
})


// update SSD price
function updatePrice() {
    const extraSsd = parseInt(ssdPrice.innerText);
    const smallExtraMemory = parseInt(memoryPrice.innerText);
    const deliveryAmount = parseInt(deliveryCost.innerText);
    const productPrice = parseInt(totalPrice.innerText);
    const grandTotal = extraSsd + productPrice + smallExtraMemory + deliveryAmount;
    total.innerText = grandTotal;
    discountPrice.innerText = total.innerText;
};


