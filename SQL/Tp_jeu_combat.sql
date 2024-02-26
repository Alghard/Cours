CREATE DATABASE jeucombat;
USE jeucombat;
CREATE TABLE type_personnage (
    id_type_personnage INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    type_personnage VARCHAR(50) UNIQUE NOT NULL,
    attaque INT,
    point_de_vie INT,
    defense INT
)  ENGINE=InnoDB;

INSERT INTO type_personnage (type_personnage, attaque, point_de_vie, defense)
	VALUES ("Barbare", 125,5,15),("Guerrier", 100,10,10),("Chevalier", 75,15,5);

CREATE TABLE arene (
    id_arene INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_arene VARCHAR(50) UNIQUE NOT NULL
)  ENGINE=INNODB;

INSERT INTO arene (nom_arene)
	VALUES ("Colisée"), ("Muraille"), ("Armurerie");
    
CREATE TABLE item (
    id_item INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_item VARCHAR(50) UNIQUE NOT NULL,
    bonus_point_de_vie INT,
    bonus_defense INT,
    bonus_attaque INT
)  ENGINE=INNODB;

INSERT INTO item (nom_item, bonus_point_de_vie, bonus_defense, bonus_attaque)
	VALUES	("Arme de base", 0, 0, 0),("Bouclier de la Méduse", 25,15,10),("Marteau de Thor",25,5,20), ("Excalibur", 20,10,20),("Egide", 20,30,0), ("Sainte Lance", 10,10,30);
    
CREATE TABLE costume (
    id_costume INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_costume VARCHAR(50) UNIQUE NOT NULL
)  ENGINE=INNODB;

INSERT INTO costume (nom_costume)
	VALUES ("La Faucheuse"),("Le Lapin de Pâque"),("La Banshee"),("Jeanne d'Arc"), ("Phénix");
    
CREATE TABLE joueur (
    id_joueurs INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    pseudo_joueur VARCHAR(50) UNIQUE NOT NULL,
    mdp_joueur VARCHAR(150) NOT NULL,
    mail_joueur VARCHAR(100) UNIQUE NOT NULL,
    id_carnet_amis INT
)  ENGINE=INNODB;

INSERT INTO joueur (pseudo_joueur, mdp_joueur,mail_joueur, id_carnet_amis)
	value ("Dark Schneider", "12345", "dark.s@gmail.com",1),("Perceval","Kaamelott31","alexast@sfr.fr",2),("Guts","berserker#666","ceska@orange.fr",3),("Broly","cacarot974","guillaume@gmail.com",4),("Suskiki666","NarutoIsTheBest","hinatainlove@sfr.fr",5);
