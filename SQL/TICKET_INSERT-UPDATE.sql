/*Exercice INSERT et UPDATE :
Sur la base de Ticket

Ajouter  dans les tables :
3 vendeurs : 1(votre nom, votre prenom), 2(Dupond, Jean), 3(Durand, Marie)
3 articles : 1(tomates, 1.50), 2(pain, 0.90), 3(boite de conserve, 1.90)
3 tickets : 1(2021-06-24, 2), 2 (2020-11-28, 1), 3(2021-03-27, 3)
3 apparaitre : 1(1, 1, 10), 2(2, 3, 9), 3(3, 3, 4) */

INSERT INTO vendeur (nom_vendeur,prenom_vendeur) 
	VALUES ("Depriester","Yoann"),("Dupond", "Jean"),("Durand", "Marie");
    
INSERT INTO article (nom_produit, prix_article)
	VALUES ("tomate", 1.50),("pain", 0.90),("boite de conserve", 1.90);
    
INSERT INTO ticket (date_ticket, id_vendeur)
	VALUES ("2021-06-24", 2),("2020-11-28", 1),("2021-03-27", 3);
    
INSERT INTO apparaitre (id_article, id_ticket, quantite)
	VALUES (1, 1, 10), (2, 3, 9), (3, 3, 4);

/*
.
Mettre à jour le prix des articles : (prix_article) 
1(2.10),
2(0.50), 
3(3.80)*/

UPDATE article SET prix_article = 2.10 WHERE id_article = 1;
UPDATE article SET prix_article = 0.50 WHERE id_article = 2;
UPDATE article SET prix_article = 3.80 WHERE id_article = 3;

/*
.
ajouter des articles dans la table article :
(oeuf, 1.20),
(pâte , 1.30)*/

INSERT INTO article (nom_produit, prix_article)
	VALUES ("oeuf",1.20), ("pâte",1.30);

