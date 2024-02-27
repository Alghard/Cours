use ticket;

-- Ajout de 3 vendeurs
INSERT INTO vendeur(nom_vendeur, prenom_vendeur) 
	VALUES("Dupont", "Jean"),
			("Durand", "Marie");

-- Ajout de 3 articles
INSERT INTO article(nom_produit, prix_article) 
	VALUES("tomates", 1.50),
    ("pain", 0.90),
    ("boite de conserve", 1.90);

-- Ajout de 3 tickets		
INSERT INTO ticket(date_ticket, id_vendeur)
	VALUES ("2021-06-24", 2),
		("2020-11-28", 1),
        ("2021-03-27", 3);

-- Ajout de 3 apparaitre
INSERT INTO apparaitre(id_article, id_ticket, quantite)
	VALUES(1,1,10),
		(2,3,9),
        (3,3,4);

-- MaJ des prix des articles
UPDATE article SET `prix_article` = 2.10 WHERE `id_article` = 1;
UPDATE article SET `prix_article` = 0.50 WHERE `id_article` = 2;
UPDATE article SET `prix_article` = 3.80 WHERE `id_article` = 3;

-- Ajout de nouveaux articles
INSERT INTO article(nom_produit, prix_article) 
	VALUES("oeuf", 1.20),
    ("pâte", 1.30);