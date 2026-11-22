
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const APP_NAME = process.env.APP_NAME || 'My Application';

app.use(express.json());

app.use(express.static(__dirname));

let cart = [];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/app-info", (req, res) => {
    res.json({
        appName: APP_NAME,
        port: PORT
    });
});

app.post("/add-to-cart", (req, res) => {
    const product = req.body;

    cart.push(product);

    res.json({
        message: "Product added successfully!",
        cartCount: cart.length
    });
});


app.get("/cart", (req, res) => {
    res.json(cart);
});


app.listen(PORT, () => {
    console.log(`ShoeZone server running at http://localhost:${PORT}`);
});
