const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("🚀 Welcome to Harish's Kubernetes Backend!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        application: "ecommerce-backend"
    });
});

app.get("/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Laptop",
            price: 50000
        },
        {
            id: 2,
            name: "Phone",
            price: 20000
        },
        {
            id: 3,
            name: "Headphones",
            price: 3000
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
