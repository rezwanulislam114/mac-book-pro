// product selection cost calculation
function variantSelection(costTitle, cost) {
    const memoryCost = document.getElementById(costTitle);
    memoryCost.innerText = cost;
    totalPrice();
}

// total price calculation
function totalPrice() {
    const deliveryCost = document.getElementById('delivery-cost');
    const storageCost = document.getElementById('storage-cost');
    const memoryCost = document.getElementById('memory-cost');
    const basePrice = document.getElementById('base-price');
    const totalPrice = document.getElementById('total-price');

    totalPrice.innerText = parseInt(basePrice.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
}

// 8gb memory
document.getElementById('memory-8gb').addEventListener('click', function () {
    variantSelection('memory-cost', 0);
})

// 16gb memory
document.getElementById('memory-16gb').addEventListener('click', function () {
    variantSelection('memory-cost', 180);
})

// 256gb ssd
document.getElementById('storage-256gb').addEventListener('click', function () {
    variantSelection('storage-cost', 0)
})

// 512gb ssd
document.getElementById('storage-512gb').addEventListener('click', function () {
    variantSelection('storage-cost', 100)
})

// 1tb ssd
document.getElementById('storage-1tb').addEventListener('click', function () {
    variantSelection('storage-cost', 180)
})

// free delivary
document.getElementById('free-delivery').addEventListener('click', function () {
    variantSelection('delivery-cost', 0)
})

// fast delivary
document.getElementById('fast-delivery').addEventListener('click', function () {
    variantSelection('delivery-cost', 20)
})




// total price calculation
function totalPrice() {
    const deliveryCost = document.getElementById('delivery-cost');
    const storageCost = document.getElementById('storage-cost');
    const memoryCost = document.getElementById('memory-cost');
    const basePrice = document.getElementById('base-price');
    const totalPrice = document.getElementById('total-price');

    totalPrice.innerText = parseInt(basePrice.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
}