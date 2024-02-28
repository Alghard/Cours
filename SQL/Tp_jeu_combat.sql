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
    id_carnet_amis INT UNIQUE
)  ENGINE=INNODB;

INSERT INTO joueur (pseudo_joueur, mdp_joueur,mail_joueur, id_carnet_amis)
	VALUE ("Dark Schneider", "12345", "dark.s@gmail.com",1),("Perceval","Kaamelott31","alexast@sfr.fr",2),("Guts","berserker#666","ceska@orange.fr",3),("Broly","cacarot974","guillaume@gmail.com",4),("Suskiki666","NarutoIsTheBest","hinatainlove@sfr.fr",5);

CREATE TABLE personnage (
    id_personnage INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_personnage VARCHAR(50) NOT NULL UNIQUE,
    id_type_personnage INT,
    id_joueurs INT
)  ENGINE=INNODB;

INSERT INTO personnage (nom_personnage, id_joueurs, id_type_personnage)
	VALUE ("Power Killer",1,1),("Mordred",2,3),("Griffith",3,3),("Vegeta",4,2),("Kakashi",5,2),("Bohort",2,1),("Lars",1,3);
    
CREATE TABLE combats(
	id_combat INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date_combat DATETIME,
    id_arene INT,
    id_vaincu INT,
    id_vainqueur INT
)ENGINE=innodb;

INSERT INTO combats (date_combat,id_arene,id_vainqueur,id_vaincu)
	VALUE ("2022-06-23",1,1,2),("2022-06-23",2,3,2),("2022-07-01",3,6,5),("2022-07-13",1,5,7),("2022-07-15",1,4,1),("2022-07-17",1,4,1);

CREATE TABLE obtenir (
	id_personnage INT,
    id_item INT,
    equipe BOOLEAN
)ENGINE = InnoDB;

INSERT INTO obtenir (id_item, id_personnage, equipe)
	VALUE (6,1,false),(6,2,false),(6,3,false),(6,4,false),(6,5,false),(6,6,true),(6,7,true),(1,1,true),(2,1,false),(3,2,true),(4,3,true),(5,4,true),(1,5,true),(3,3,false),(4,1,false);

CREATE TABLE carnet_ami (
    id_carnet_ami INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_carnet VARCHAR(50)
)  ENGINE=INNODB;

INSERT INTO carnet_ami(nom_carnet)
	VALUE ("Ma Liste"),("Mes Amis"), ("Super Friends"), ("The Crew"), ("Famille de Coeur");
    
CREATE TABLE contenir (
    id_carnet_amis INT,
    id_joueurs INT
)  ENGINE=INNODB;

INSERT INTO contenir (id_carnet_amis, id_joueurs)
	VALUE (3,1),(1,3),(3,2),(2,3),(1,4),(4,1),(4,5),(5,4),(5,2),(2,5),(5,3),(3,5);

CREATE TABLE messages (
    id_message INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    date_message DATETIME,
    sujet VARCHAR(255),
    message TEXT,
    id_auteur INT,
    id_destinataire INT
)  ENGINE=INNODB;

INSERT INTO messages(id_auteur, id_destinataire, date_message, sujet, message)
	VALUE (1,3, "2022-06-21","Hey","Salut bro ! Comment tu vas ?"),
    (3,1, "2022-06-21", "Re:Hey","Salut poto ! Ca va super. C'est l'éclate ce jeu. :D"),
    (1,3, "2022-06-22", "ReRe:Hey","Ha ha, t'as vu, je te l'avais dis. Heureusement que je t'ai bassiné avec pendant des plombes. ;)"),
    (3,1, "2022-06-22", "ReReRe:Hey","J'avoue XD Au passage, je viens de me payer la tenue de Jeane D'Arc. Tu sais, la version Fate Apocryphe"),
    (1,2, "2022-06-23", "Salut","Coucou toi. Je savais que t'étais sur le jeu. Comment tu vas"),
    (2,3, "2022-06-23", "Dis, t'aurais pas gaffé","Hé toi, par hasard, t'aurai pas dit à ton pote que j'étais sur le jeu. Non parce que ce relou vient de m'envoyer un message.");

ALTER TABLE contenir ADD CONSTRAINT FOREIGN KEY (id_joueurs) REFERENCES joueur (id_joueurs);
ALTER TABLE contenir ADD CONSTRAINT FOREIGN KEY (id_carnet_amis) REFERENCES carnet_ami (id_carnet_ami);
ALTER TABLE messages ADD CONSTRAINT FOREIGN KEY (id_auteur) REFERENCES joueur (id_joueurs);
ALTER TABLE messages ADD CONSTRAINT FOREIGN KEY (id_destinataire) REFERENCES joueur (id_joueurs);
ALTER TABLE joueur ADD CONSTRAINT FOREIGN KEY (id_carnet_amis) REFERENCES carnet_ami (id_carnet_ami);
ALTER TABLE obtenir ADD CONSTRAINT FOREIGN KEY (id_personnage) REFERENCES personnage (id_personnage);
ALTER TABLE obtenir ADD CONSTRAINT FOREIGN KEY (id_item) REFERENCES item (id_item);
ALTER TABLE personnage ADD CONSTRAINT FOREIGN KEY (id_type_personnage) REFERENCES type_personnage (id_type_personnage);
ALTER TABLE personnage ADD CONSTRAINT FOREIGN KEY (id_joueurs) REFERENCES joueur (id_joueurs);
ALTER TABLE combats ADD CONSTRAINT FOREIGN KEY (id_arene) REFERENCES arene (id_arene),
					ADD CONSTRAINT FOREIGN KEY (id_vaincu) REFERENCES personnage (id_personnage),
					ADD CONSTRAINT FOREIGN KEY (id_vainqueur) REFERENCES personnage (id_personnage);
                    
ALTER TABLE costume ADD COLUMN prix decimal(10,2);

-- Update du nom de Allo qui a comme id unique 3 par SousRace !! NE FONCTIONNE QUE POUR UN SEUL ET MEME ENREGISTREMENT !!
UPDATE `costume` SET `prix` = 20.00 WHERE nom_costume = "La Faucheuse";
UPDATE `costume` SET `prix` = 35.00 WHERE nom_costume = "Le Lapin de Pâque";
UPDATE `costume` SET `prix` = 35.00 WHERE nom_costume = "Phénix";
UPDATE `costume` SET `prix` = 15.50 WHERE nom_costume = "La Banshee";
UPDATE `costume` SET `prix` = 29.50 WHERE nom_costume = "Jeanne d'Arc";

CREATE TABLE achat (
    id_achat INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date_achat DATETIME,
    id_personnage INT,
    id_costume INT,
    id_joueurs INT
)  ENGINE=INNODB;

ALTER TABLE achat ADD CONSTRAINT FOREIGN KEY (id_personnage) REFERENCES personnage (id_personnage),
	ADD CONSTRAINT FOREIGN KEY (id_costume) REFERENCES costume (id_costume),
	ADD CONSTRAINT FOREIGN KEY (id_joueurs) REFERENCES joueur (id_joueurs);
    

INSERT INTO achat (date_achat, id_joueurs,id_costume,id_personnage)
	VALUE ("2022-05-10",1,1,1),("2022-06-01",1,2,7),("2022-06-21",3,4,3),("2022-06-21",1,3,1),("2022-06-23",3,5,3),("2022-07-03",5,1,5);
    
    
SELECT pseudo_joueur FROM joueur;
SELECT pseudo_joueur, mail_joueur FROM joueur WHERE id_joueurs = 3;



















