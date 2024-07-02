document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const products = [
        'Apple iPhone',
        'Samsung Galaxy',
        'Sony Headphones',
        'Dell Laptop',
        'Apple MacBook',
        'Google Pixel',
        'Amazon Echo',
        'Microsoft Surface'
    ];

    const filteredProducts = products.filter(product => product.toLowerCase().includes(query));

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.textContent = product;
            resultsContainer.appendChild(productElement);
        });
    } else {
        resultsContainer.textContent = 'No results found';
    }
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    slides.forEach((slide, i) => {
        slide.style.opacity = i === currentIndex ? '1' : '0';
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
