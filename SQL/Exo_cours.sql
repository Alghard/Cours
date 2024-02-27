CREATE DATABASE Ticket;
USE ticket;
CREATE TABLE `article` (
    id_article INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom_produit VARCHAR(200) UNIQUE NOT NULL,
    prix_article DECIMAL(15.2)
)  ENGINE=INNODB;

CREATE TABLE `ticket` (
    id_ticket INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    date_ticket DATETIME NOT NULL,
    id_vendeur INT
)  ENGINE=INNODB;

CREATE TABLE `vendeur` (
    id_vendeur INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom_vendeur VARCHAR(200) NOT NULL,
    prenom_vendeur VARCHAR(200) NOT NULL
)  ENGINE=INNODB;

CREATE TABLE `apparaitre` (
    id_article INT,
    id_ticket INT,
    quantite INT
)  ENGINE=INNODB;


-- 1) Reprendre l'exercice précédent, et ajouter les Clé Etrangère
ALTER TABLE apparaitre ADD CONSTRAINT FOREIGN KEY (id_article) REFERENCES article (id_article);
ALTER TABLE apparaitre ADD CONSTRAINT FOREIGN KEY (id_ticket) REFERENCES ticket (id_ticket);
ALTER TABLE ticket ADD CONSTRAINT FOREIGN KEY (id_vendeur) REFERENCES vendeur (id_vendeur);

-- 2) Dans la table apparaître, créer un champ id_apparaitre
-- 3) Ajouter à la table apparaitre une clé primaire
ALTER TABLE apparaitre ADD COLUMN  id_apparaitre INT PRIMARY KEY NOT NULL AUTO_INCREMENT;

-- 4) Ajouter une colone Age dans Vendeur
ALTER TABLE vendeur ADD COLUMN age INT;


-- 5) Ajouter une nouvelle table utilisateurs, avec ne champ : l'id_user, le login et le mot de passe.
CREATE TABLE `utilisateurs`(
	id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50) NOT NULL,
    pwd VARCHAR(150) NOT NULL
)ENGINE = InnoDB;

ALTER TABLE utilisateurs MODIFY COLUMN login VARCHAR(50) NOT NULL UNIQUE;

-- 6) Ajouter une table role, avec comme champ : id_role et le role
CREATE TABLE `role`(
	id_role INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(20) NOT NULL
)ENGINE = InnoDB;

-- 7) Ajouter à la table utilisateur le champ id_role
ALTER TABLE utilisateurs ADD COLUMN id_role INT;

-- 8) transformer le champ id_role en clé étrangère relié à la table role
ALTER TABLE utilisateurs ADD CONSTRAINT FOREIGN KEY (id_role) REFERENCES role (id_role);

-- Possibilité d'utilisé ALTER TABLE comme ceci : (tant que l'on veut modifier des champs de la meme table)
ALTER TABLE apparaitre 
	ADD CONSTRAINT FOREIGN KEY (id_article) REFERENCES article (id_article),
	ADD CONSTRAINT FOREIGN KEY (id_ticket) REFERENCES ticket (id_ticket);