create database boost_remy;
use boost_remy;
/* Exercice :
A partir du MCD*MLD de Rémy :
1) Créer les tables Rôle, Utilisateur, Panier, Contenir, Produit et Catégorie 
2) Remplissez avec une poigné de données (n'oubliez pas, il s'agit de vêtement)
*/

CREATE TABLE role_utilisateur (
    Id_role INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nom_role VARCHAR(50)
)  ENGINE=INNODB;

CREATE TABLE utilisateur (
    id_utilisateur INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    mdp_utilisateur VARCHAR(150) NOT NULL,
    nom_utilisateur VARCHAR(50),
    prenom_utilisateur VARCHAR(50),
    mail_utilisateur VARCHAR(50) UNIQUE,
    username_utilisateur VARCHAR(50) UNIQUE,
    Id_role INT
)  ENGINE=INNODB;

CREATE TABLE panier (
    id_panier INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    quantite_produit_panier INT,
    date_derniere_modification DATETIME,
    id_utilisateur INT
)  ENGINE=INNODB;

CREATE TABLE categorie (
    id_categorie INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom_categorie VARCHAR(50),
    description_categorie VARCHAR(255)
)  ENGINE=INNODB;

CREATE TABLE produit (
    id_produit INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom_produit VARCHAR(50) NOT NULL UNIQUE,
    prix_produit DECIMAL(15 , 2 ),
    description_produit VARCHAR(255),
    image_produit VARCHAR(255),
    id_categorie INT
)  ENGINE=INNODB;

CREATE TABLE contenir (
    id_produit INT,
    id_panier INT
)  ENGINE=INNODB;

ALTER TABLE utilisateur ADD CONSTRAINT FOREIGN KEY (Id_role) REFERENCES role_utilisateur (Id_role);
ALTER TABLE panier ADD CONSTRAINT FOREIGN KEY (id_utilisateur) REFERENCES utilisateur (id_utilisateur);
ALTER TABLE contenir ADD CONSTRAINT FOREIGN KEY (id_panier) REFERENCES panier (id_panier);
ALTER TABLE contenir ADD CONSTRAINT FOREIGN KEY (id_produit) REFERENCES produit (id_produit);
ALTER TABLE produit ADD CONSTRAINT FOREIGN KEY (id_categorie) REFERENCES categorie (id_categorie);

insert into produit (nom_produit, prix_produit, description_produit)
	values ("Pull de Noel", 25.00, "Joli pull pour embelir vos soirées de NOWEL"),("Slip en or", 100.00, "Slip de luxe idéal petit zizi");

insert into role_utilisateur (nom_role)
	values("admin"),("client");
    
insert into utilisateur (nom_utilisateur,prenom_utilisateur, mail_utilisateur,mdp_utilisateur)
	values("Dutronc","Mourice", "d.moumou@gmail.com", "Azerty77"),("Tic","Tac","tactic@disney.fr","picsoulepd");
    
insert into categorie(nom_categorie,description_categorie)
	values("Haut", "LES VETEMENT DU HAUT DU CORPS LA EHOH"),("Sous-vetements", "LES VETEMENT DU DESSOUS DES VETEMENTS LA EHOH");

insert into panier(id_utilisateur, quantite_produit_panier, date_derniere_modification)
	values(1,2,"2024-03-07"),(2,18,"2024-03-11");

insert into contenir(id_produit, id_panier)
	values(3,1),(4,1),(4,2);
    
/*Pour les rapides :
 On veut créer des affichages côté utilisateur :
Affichage de son compte
Affichage de son panier
Affichage des catégories présent dans son panier

3) Ecrire les requêtes nécessaires
*/
SELECT utilisateur.nom_utilisateur as "Nom", utilisateur.prenom_utilisateur as "Prenom", utilisateur.mail_utilisateur as "Email", role_utilisateur.nom_role as "Role"
	FROM utilisateur
    JOIn role_utilisateur on utilisateur.Id_role = role_utilisateur.Id_role;
    
SELECT panier.quantite_produit_panier as "Nb Produits", panier.date_derniere_modification as "Date Panier", produit.nom_produit as "Produits", categorie.nom_categorie as "Categorie produit"
	FROM contenir
    join panier on contenir.id_panier = panier.id_panier
    join produit on contenir.id_produit = produit.id_produit
    join categorie on produit.id_categorie = categorie.id_categorie
    where panier.id_utilisateur = 2;


    

