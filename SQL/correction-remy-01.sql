CREATE DATABASE remy;
USE remy;

CREATE TABLE roles (
	id_role INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_role VARCHAR(50) UNIQUE NOT NULL
)ENGINE=innoDB;

CREATE TABLE utilisateur (
	id_utilisateur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    mot_de_passe_utilisateur VARCHAR(150) NOT NULL,
    nom_utilisateur VARCHAR(50),
    prenom_utilisateur VARCHAR(50),
    mail_utilisateur VARCHAR(150) UNIQUE NOT NULL,
    id_role INT,
    FOREIGN KEY (id_role) REFERENCES roles(id_role)
)ENGINE=innoDB;

CREATE TABLE panier (
	id_panier INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    date_derniere_modification DATE,
    id_utilisateur INT,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
)ENGINE=innoDB;

CREATE TABLE categorie (
	id_categorie INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_categorie VARCHAR(100) UNIQUE NOT NULL
)ENGINE=innoDB;

CREATE TABLE produit (
	id_produit INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_produit VARCHAR(50) UNIQUE NOT NULL,
    prix_produit DECIMAL(15,2) NOT NULL,
    description_produit VARCHAR(250),
    image_produit VARCHAR(250),
    id_categorie INT,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie)
)ENGINE=innoDB;

CREATE TABLE contenir (
	id_panier INT,
	id_produit INT,
    quantite_produit_panier INT NOT NULL,
    PRIMARY KEY (id_panier,id_produit),
    FOREIGN KEY (id_panier) REFERENCES panier(id_panier),
    FOREIGN KEY (id_produit) REFERENCES produit(id_produit)
)ENGINE=innoDB;