// product selection cost calculation
function variantSelection(costTitle, cost) {
    const memoryCost = document.getElementById(costTitle);
    memoryCost.innerText = cost;
    totalPrice();
}


// variant selection button handler
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
    const promoTotal = document.getElementById('promo-total');
    totalPrice.innerText = parseInt(basePrice.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
    promoTotal.innerText = totalPrice.innerText;
}




// promo button (promo code implement and discount)
document.getElementById('promo-button').addEventListener('click', function () {
    const totalPrice = document.getElementById('total-price');
    const promoInput = document.getElementById('promo-input');
    const total = document.getElementById('promo-total');
    if (promoInput.value == 'stevekaku') {
        total.innerText = parseInt(totalPrice.innerText) - (20 * parseInt(totalPrice.innerText)) / 100;
        console.log(total.innerText);
    }
})

// promo button (button disable / enable and color changes)
document.getElementById('promo-input').addEventListener('keyup', function (event) {
    const promoButton = document.getElementById('promo-button');
    if (event.target.value == 'stevekaku') {
        promoButton.removeAttribute('disabled');
        promoButton.classList.remove('btn-danger');
        promoButton.classList.add('btn-success');
    }
    else {
        promoButton.setAttribute('disabled', true);
        promoButton.classList.remove('btn-success');
        promoButton.classList.add('btn-danger');
    }
})