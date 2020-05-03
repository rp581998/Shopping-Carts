let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: 'Red Tshirt',
        tag: 'redtshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Yellow Tshirt',
        tag: 'yellowtshirt',
        price: 20,
        inCart: 0
    },
    {
        name: 'Brown Tshirt',
        tag: 'browntshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Red Shirt',
        tag: 'redshirt',
        price: 20,
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', cartNumbers)
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    

    productNumbers = parseInt(productNumbers);
    
    
    if (productNumbers) {
       localStorage.setItem('productNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('productNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}
