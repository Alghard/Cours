-- Afficher mes infos de compte
SELECT utilisateur.nom_utilisateur, utilisateur.prenom_utilisateur, utilisateur.mail_utilisateur FROM utilisateur
	WHERE utilisateur.mail_utilisateur = "yoyo@gmail.com";
    -- WHERE utilisateur.id_utilisateur = 1

-- Afficher mon panier : je suis sur mon compte, donc le système connait mon id
SELECT produit.nom_produit, produit.prix_produit, contenir.quantite_produit_panier FROM produit
	JOIN contenir ON produit.id_produit = contenir.id_produit
    JOIN panier ON contenir.id_panier = panier.id_panier
    WHERE panier.id_utilisateur = 1;
    
-- Afficher les catégories qui sont dans mon panier
SELECT DISTINCT categorie.nom_categorie FROM produit
	JOIN contenir ON produit.id_produit = contenir.id_produit
    JOIN panier ON contenir.id_panier = panier.id_panier
    JOIN categorie ON produit.id_categorie = categorie.id_categorie
    WHERE panier.id_utilisateur = 1;