const products = [
    { name: 'iPhone 14', price: '$700', image: 'ip14.jpeg' },
    { name: 'Samsung Galaxy S22', price: '$390', image: 'ss22.jpeg' },
    { name: 'MacBook Pro', price: '$650', image: 'mbpro.jpeg' },
    { name: 'Sony Headphones', price: '$150', image: 'shp.jpeg' },
    { name: 'Dell XPS 13', price: '$550', image: 'dxp3.jpeg' },
    { name: 'iPad Pro', price: '$500', image: 'ipad.jpeg' },
    { name: 'iPhone 7', price: '$100', image: 'ip7.jpeg' },
    { name: 'iPhone 6s', price: '$90', image: 'ip6s.jpeg' },
    { name: 'Redmi 14c', price: '$160', image: 'r14c.jpeg' },
    { name: 'iPhone 16', price: '$1500', image: 'ip16.jpeg' },
    { name: 'iPhone Xr (faceId)', price: '$200', image: 'ipxr.jpeg' },
    { name: 'iPhone 7+', price: '$150', image: 'ip7+.jpeg' },
    { name: 'iPhone 12', price: '$500', image: 'ip12.jpeg' },
    { name: 'iPhone 13', price: '$570', image: 'ip13.jpeg' },
    { name: 'iPhone 15', price: '$600', image: 'ip15.jpeg' },
    { name: 'Acer Laptop', price: '$450', image: 'acer.jpeg' },
    { name: 'Dell Laptop', price: '$300', image: 'dlp.jpeg' },
    { name: 'Samsung Tv', price: '$800', image: 'stv.jpeg' },
    { name: 'Hisense Tv', price: '$650', image: 'hitv.jpeg' },
    { name: 'Hp Laptop', price: '$400', image: 'hp.jpeg' },
    { name: 'Infinix Hot50i', price: '$190', image: 'ihot501.jpeg' },
    { name: 'Lenovo Laptop', price: '$500', image: 'lp.jpeg' },
    { name: 'LG Tv', price: '$499', image: 'lgtv.jpeg' },
    { name: 'LG Speaker', price: '$299', image: 'lgspkr.jpeg' },
    { name: 'Realme c75', price: '$220', image: 'realme.jpeg' }
  ];

  const cart = [];

  function displayProducts(filteredProducts = products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    filteredProducts.forEach((product, index) => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      `;
      productList.appendChild(productDiv);
    });
  }

  function addToCart(index) {
    const item = products[index];
    cart.push(item);
    alert(`${item.name} has been added to your cart.`);
    updateCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }

  function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `${item.name} - ${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
      cartList.appendChild(li);
    });
  }

  document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filtered = products.filter(product => product.name.toLowerCase().startsWith(searchTerm));
    displayProducts(filtered);
  });

  displayProducts();