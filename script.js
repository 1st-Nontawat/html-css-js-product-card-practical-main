const productImg = document.getElementById('productImg');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const blueColor = document.getElementById('blueColor');
const redColor = document.getElementById('redColor');
const greenColor = document.getElementById('greenColor');
const productBrand = document.getElementById('productBrand');
const limited = document.getElementById('limited');


blueColor.addEventListener('click', () => {
    productImg.src = 'img/nike-blue.png';
    productName.textContent = 'Blue Nike Dunk High By You';
    productPrice.innerHTML = '<strong>$162.00</strong>';
    productBrand.style.backgroundColor = 'blue';
    limited.style.display = 'none';
})

redColor.addEventListener('click', () => {
    productImg.src = 'img/nike-red.png';
    productName.textContent = 'Red Nike Dunk High By You';
    productPrice.innerHTML = '<strong>$162.00</strong>';
    productBrand.style.backgroundColor = 'red';
    limited.style.display = 'none';
})

greenColor.addEventListener('click', () => {
    productImg.src = 'img/nike-green.png';
    productName.textContent = 'Green Nike Dunk High By You';
    productPrice.innerHTML = '<strong>$168.00</strong>';
    productBrand.style.backgroundColor = 'green';
    limited.style.display = 'block';
})