const express = require("express");
const app = express();
const port = 3000;

// Middleware d'analyse du JSON les requêtes
app.use(express.json());

let produits = [
    { id: 1, nom: "thé Vert Matcha", prix: 12.99, quantite: 10 },
    { id: 2, nom: "Café Arabica", prix: 8.99, quantite: 20 },
];


// Routes
// GET /produits
// Liste des produits
app.get("/produits", (req,res) => {
    res.json(produits);
})

// POST
app.post('/produits', (req, res) => {
    produits.push(req.body);
    res.status(201).json(produits);
});


// Démarrage du serveur
app.listen(port, () =>{
    console.log(`Le serveur est démarré suur https://localhost:${port}`);
});


