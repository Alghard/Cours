-- Dans la BDD ticket
-- Dans la table ticket :
-- Voir combien de fois un vendeur a vendu un ticket (en bref, combien de fois il est lié à un ticket)
SELECT id_vendeur, count(id_vendeur) FROM ticket
	GROUP BY id_vendeur;
    
-- Dans la table article : 
-- Voir combien de produit ont le même prix :
SELECT prix_article, count(prix_article) FROM article
	GROUP BY prix_article;
    
-- Récupérer l'article le plus cher
SELECT nom_produit, prix_article FROM article
	GROUP BY nom_produit 
    HAVING max(prix_article) < 15 -- Having sert de condition WHERE pour les fonctions d'aggrégation
    ORDER BY prix_article DESC 
    LIMIT 3; 
    
