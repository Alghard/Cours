/*Exercice : SELECT 
Sur la base de la BDD Ticket
1) Remplir à nouveau avec les valeurs des précédents exercices : ⁠sql⁠ */
INSERT INTO article (nom_produit, prix_article)
	VALUES ("tomate", 1.50),("pain", 0.90),("boite de conserve", 1.90);

UPDATE article SET prix_article = 2.10 WHERE id_article = 1;
UPDATE article SET prix_article = 0.50 WHERE id_article = 2;
UPDATE article SET prix_article = 3.80 WHERE id_article = 3;

INSERT INTO article (nom_produit, prix_article)
	VALUES ("oeuf",1.20), ("pâte",1.30);
    
INSERT INTO vendeur (nom_vendeur,prenom_vendeur) 
	VALUES ("Dupond", "Jean");
    
INSERT INTO ticket (date_ticket, id_vendeur)
	VALUES ("2021-06-24", 4),("2020-11-28", 1),("2021-03-27", 3);

INSERT INTO apparaitre (id_article, id_ticket, quantite)
	VALUES (1, 1, 10), (2, 3, 9), (3, 3, 4);

INSERT INTO apparaitre (id_article, id_ticket, quantite)
	VALUES (3, 7, 10), (4,8, 9), (5, 9, 4);


/*
2) effectuer une requête SELECT pour récupérer les vendeurs dont le prénom est compris entre a et p.*/
SELECT vendeur.id_vendeur, vendeur.nom_vendeur, vendeur.prenom_vendeur FROM vendeur
	WHERE vendeur.prenom_vendeur BETWEEN "a" AND "p";


/*
3) écrire une requête qui récupère tous les articles dont le nom de l'article commence par oe*/
SELECT article.nom_produit, article.prix_article FROM article
	WHERE article.nom_produit LIKE "oe%";

/*
4) ecrire une requête pour récupérer les ventes d'articles qui ont été vendu à plus de 5 exemplaires sur un ticket*/
SELECT apparaitre.id_article, apparaitre.id_ticket, apparaitre.quantite FROM apparaitre
	WHERE apparaitre.quantite > 5;

/*
5) Récupérer les tickets dont la date se situe entre le 1er Janvier 2020 et le 1er Août 2021*/
SELECT ticket.id_ticket, ticket.date_ticket, ticket.id_vendeur FROM ticket
	WHERE ticket.date_ticket BETWEEN "2020-01-01" AND "2021-08-01";


/*
6) Récupérer les articles dont le prix correspond à l'une de ces valeurs : 0.5, 0.9, 1.9, 3.8 ;*/
SELECT article.nom_produit, article.prix_article FROM article
	WHERE article.prix_article IN (0.5, 0.9, 1.9, 3.8);
    -- WHERE article.prix_article = 0.5 OR article.prix_article = 0.9 OR article.prix_article = 1.9 OR article.prix_article = 3.8;
    -- Le WHERE du dessus ,'est pas faux, mais est moins optimal que IN

/*
7) Récupérer les vendeurs dont l'id est supérieur à 2 mais inférieur à 5*/
SELECT vendeur.nom_vendeur, vendeur.prenom_vendeur FROM vendeur
	-- WHERE vendeur.id_vendeur > 2 AND vendeur.id_vendeur < 5;
    WHERE vendeur.id_vendeur BETWEEN 3 AND 4;