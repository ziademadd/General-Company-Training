class Product {
    constructor(id, name, description, price, quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }

    updateProduct(name, description, price, quantity) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}

class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    updateProduct(productId, name, description, price, quantity) {
        const product = this.products.find(product => product.id === productId);
        if (product) {
            product.updateProduct(name, description, price, quantity);
        } else {
            console.log(`Product with ID ${productId} not found.`);
        }
    }

    removeProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
    }

    displayInventory() {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';
        this.products.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `<span>ID: ${product.id}, Name: ${product.name}, Description: ${product.description}, Price: ${product.price}, Quantity: ${product.quantity}</span>`;
            productList.appendChild(li);
        });
    }
}

// Create an inventory and add products
const inventory = new Inventory();

// Handle the form submission
document.getElementById('add-product-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const productId = document.getElementById('product-id').value;
    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productPrice = parseFloat(document.getElementById('product-price').value);
    const productQuantity = parseInt(document.getElementById('product-quantity').value);

    if (!productId || !productName || !productDescription || isNaN(productPrice) || isNaN(productQuantity)) {
        alert("Please fill in all fields with valid data.");
        return;
    }

    const product = new Product(productId, productName, productDescription, productPrice, productQuantity);
    inventory.addProduct(product);
    inventory.displayInventory();

    // Clear input fields
    document.getElementById('product-id').value = '';
    document.getElementById('product-name').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-quantity').value = '';
});
