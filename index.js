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

// PUT
app.put('/produits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let produit = produits.find(produits => produits.id === id);

    if (!produit) {
        return res.status(404).json({ message: "Produit non trouvé" });
    }

    // Mise à jour des propriétés si elles sont fournies dans la requête
    if (req.body.nom) produit.nom = req.body.nom;
    if (req.body.prix) produit.prix = req.body.prix;
    if (req.body.quantite) produit.quantite = req.body.quantite;

    res.status(200).json(produits);
});

app.delete('/produits/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let produit = produits.find(produits => produits.id === id)
    produits.splice(produits.indexOf(produit),1)
    res.status(200).json(produits)})

// Démarrage du serveur
app.listen(port, () =>{
    console.log(`Le serveur est démarré suur https://localhost:${port}`);
});


