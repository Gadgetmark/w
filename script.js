document.getElementById('danish-btn').addEventListener('click', () => {
    document.documentElement.lang = 'da';
    // Translate the content to Danish
});

document.getElementById('english-btn').addEventListener('click', () => {
    document.documentElement.lang = 'en';
    // Translate the content to English
});

const addToCartButtons = document.querySelectorAll('.product button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
