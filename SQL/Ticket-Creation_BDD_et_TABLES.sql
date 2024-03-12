CREATE DATABASE ticket4;

-- Utiliser notre BDD
USE ticket4;

-- Créer nos tables
-- Table Article
CREATE TABLE article(
	id_article INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_produit VARCHAR(200) UNIQUE NOT NULL DEFAULT "Article",
    prix_article DECIMAL(15,2) 
)ENGINE=innoDB;


-- TABLE APPARAITRE
CREATE TABLE apparaitre (
	id_article INT,
    id_ticket INT,
    quantite INT
)ENGINE=innoDB;

-- TABLE TICKET
CREATE TABLE ticket(
	id_ticket INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    date_ticket DATETIME NOT NULL,
    id_vendeur INT
)ENGINE=innoDB;

-- TABLE VENDEUR
CREATE TABLE vendeur(
	id_vendeur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_vendeur VARCHAR(200) NOT NULL,
    prenom_vendeur VARCHAR(200) NOT NULL
)ENGINE=innoDB;