const products = require('./products');

function getProducts(request, response) {
  return response.json(products);
}

function getProduct(request, response) {
  const product_id = +request.params.id;
  return response.json(products.filter(product => product.prod_id === product_id));
}

function addProduct(request, response) {
  const product = request.body;
  products.push(product);
  return response.json(products);
}

function updateProduct(request, response) {
  const product_id = +request.params.id;
  const payload = request.body;
  const product = products.filter(product => product.prod_id === product_id)[0];
  Object.keys(payload).forEach(key => {
    if (key in product) {
      product[key] = payload[key];
    }
  });
  return response.json(products);
}

function deleteProduct(request, response) {
  const product_id = +request.params.id;
  const index = products.findIndex(product => product.prod_id === product_id);
  products.splice(index, 1);
  return response.json(products);
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
};
