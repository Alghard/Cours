INSERT INTO roles (nom_role) VALUES ("administrateur"),("client");

INSERT INTO utilisateur (nom_utilisateur, prenom_utilisateur, mail_utilisateur, mot_de_passe_utilisateur, id_role) VALUES
	("Depriester","Yoann","yoyo@gmail.com","12345",2),
    ("Ruffat","Rémy","rere@gmail.com","12345",1);

INSERT INTO categorie (nom_categorie) VALUES ("T-shirt"),("Jean");

INSERT INTO produit (nom_produit, prix_produit, description_produit,id_categorie) VALUES ("T-shirt Naruto Uzumaki", 25.90, "Razengan",1),
	("Jean taille basse",300, "Designé by Gucci",2),
    ("T-shirt Blanc",30.90,"Blanc, le beau blanc", 1);
    
INSERT INTO panier (date_derniere_modification, id_utilisateur) VALUES ("2024-03-10",1),("2024-03-11",2);

INSERT INTO contenir(id_panier, id_produit,quantite_produit_panier) VALUES (1,1,2),(1,3,7),(2,2,1),(2,3,2);