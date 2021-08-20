const smallMemory = document.getElementById('small-memory');
const bigMemory = document.getElementById('big-memory');

const memoryPrice = document.getElementById('memory-price');


// total price
const totalPrice = document.getElementById('total-price');
// total
const total = document.getElementById('total');



smallMemory.addEventListener('click', function () {
    memoryPrice.innerText = '5';
    // console.log(memoryPrice);
    return updatePrice();
});
bigMemory.addEventListener('click', function () {
    memoryPrice.innerText = '100';
    // console.log(memoryPrice);
    return updatePrice();
});

// update memory price
function updatePrice() {
    const smallExtraMemory = parseInt(memoryPrice.innerText);
    const productPrice = parseInt(totalPrice.innerText);
    // console.log(smallExtraMemory.innerText, bigExtraMemory.innerText);
    const grandTotal = smallExtraMemory + productPrice;
    total.innerText = grandTotal;
    updateSsd();
};

// get SSD storage part
const smallStorage = document.getElementById('small-storage');
const bigStorage = document.getElementById('big-storage');
const biggerStorage = document.getElementById('bigger-storage');

const ssdPrice = document.getElementById('ssd-price');




// get SSD storage part listner
smallStorage.addEventListener('click', function () {
    ssdPrice.innerText = '10';
    return updateSsd();
});
bigStorage.addEventListener('click', function () {
    ssdPrice.innerText = '50';
    return updateSsd();
});
biggerStorage.addEventListener('click', function () {
    ssdPrice.innerText = '80';
    return updateSsd();
});




// update SSD price
function updateSsd() {
    const extraSsd = parseInt(ssdPrice.innerText);
    const extraSsdPrice = parseInt(totalPrice.innerText);
    const ssdGrandTotal = extraSsd + extraSsdPrice;
    total.innerText = ssdGrandTotal;

};
updatePrice();

