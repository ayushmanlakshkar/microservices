const express = require('express');
const app = express();
const port = 3000;

app.get('/products', (req, res) => {
    // Your logic to fetch products from the database
    const products = [{ id: 1, name: 'Product A' }, { id: 2, name: 'Product B' }];
    res.json(products);
});

app.listen(port, () => {
    console.log(`Product Service listening at http://localhost:${port}`);
});
