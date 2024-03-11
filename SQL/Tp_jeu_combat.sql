CREATE DATABASE jeucombat;
USE jeucombat;
CREATE TABLE type_personnage (
    Id_type_personnage INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    type_personnage VARCHAR(50) UNIQUE NOT NULL,
    attaque INT,
    point_de_vie INT,
    defense INT
)  ENGINE=InnoDB;

INSERT INTO type_personnage (type_personnage, attaque, point_de_vie, defense)
	VALUES ("Barbare", 125,5,15),("Guerrier", 100,10,10),("Chevalier", 75,15,5);

CREATE TABLE arene (
    Id_arene INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_arene VARCHAR(50) UNIQUE NOT NULL
)  ENGINE=INNODB;

INSERT INTO arene (nom_arene)
	VALUES ("Colisée"), ("Muraille"), ("Armurerie");
    
CREATE TABLE item (
    Id_item INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_item VARCHAR(50) UNIQUE NOT NULL,
    bonus_point_de_vie INT,
    bonus_defense INT,
    bonus_attaque INT
)  ENGINE=INNODB;

INSERT INTO item (nom_item, bonus_point_de_vie, bonus_defense, bonus_attaque)
	VALUES	("Arme de base", 0, 0, 0),("Bouclier de la Méduse", 25,15,10),("Marteau de Thor",25,5,20), ("Excalibur", 20,10,20),("Egide", 20,30,0), ("Sainte Lance", 10,10,30);
    
CREATE TABLE costume (
    Id_costume INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_costume VARCHAR(50) UNIQUE NOT NULL
)  ENGINE=INNODB;

INSERT INTO costume (nom_costume)
	VALUES ("La Faucheuse"),("Le Lapin de Pâque"),("La Banshee"),("Jeanne d'Arc"), ("Phénix");
    
CREATE TABLE joueurs (
    Id_joueurs INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    pseudo_joueur VARCHAR(50) UNIQUE NOT NULL,
    mdp_joueur VARCHAR(150) NOT NULL,
    mail_joueur VARCHAR(100) UNIQUE NOT NULL,
    Id_carnet_amis INT UNIQUE
)  ENGINE=INNODB;

INSERT INTO joueurs (pseudo_joueur, mdp_joueur,mail_joueur, Id_carnet_amis)
	VALUE ("Dark Schneider", "12345", "dark.s@gmail.com",1),("Perceval","Kaamelott31","alexast@sfr.fr",2),("Guts","berserker#666","ceska@orange.fr",3),("Broly","cacarot974","guillaume@gmail.com",4),("Suskiki666","NarutoIsTheBest","hinatainlove@sfr.fr",5);

CREATE TABLE personnage (
    Id_personnage INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_personnage VARCHAR(50) NOT NULL UNIQUE,
    Id_type_personnage INT,
    Id_joueurs INT
)  ENGINE=INNODB;

INSERT INTO personnage (nom_personnage, Id_joueurs, Id_type_personnage)
	VALUE ("Power Killer",1,1),("Mordred",2,3),("Griffith",3,3),("Vegeta",4,2),("Kakashi",5,2),("Bohort",2,1),("Lars",1,3);
    
CREATE TABLE combats(
	Id_combat INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date_combat DATETIME,
    Id_arene INT,
    Id_vaincu INT,
    Id_vainqueur INT
)ENGINE=innodb;

INSERT INTO combats (date_combat,Id_arene,Id_vainqueur,Id_vaincu)
	VALUE ("2022-06-23",1,1,2),("2022-06-23",2,3,2),("2022-07-01",3,6,5),("2022-07-13",1,5,7),("2022-07-15",1,4,1),("2022-07-17",1,4,1);

CREATE TABLE obtenir (
	Id_personnage INT,
    Id_item INT,
    equipe BOOLEAN
)ENGINE = InnoDB;

INSERT INTO obtenir (Id_item, Id_personnage, equipe)
	VALUE (6,1,false),(6,2,false),(6,3,false),(6,4,false),(6,5,false),(6,6,true),(6,7,true),(1,1,true),(2,1,false),(3,2,true),(4,3,true),(5,4,true),(1,5,true),(3,3,false),(4,1,false);

CREATE TABLE carnet_amis (
    Id_carnet_amis INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom_carnet VARCHAR(50)
)  ENGINE=INNODB;

INSERT INTO carnet_amis(nom_carnet)
	VALUE ("Ma Liste"),("Mes Amis"), ("Super Friends"), ("The Crew"), ("Famille de Coeur");
    
CREATE TABLE contenir (
    Id_carnet_amis INT,
    Id_joueurs INT
)  ENGINE=INNODB;

INSERT INTO contenir (Id_carnet_amis, Id_joueurs)
	VALUE (3,1),(1,3),(3,2),(2,3),(1,4),(4,1),(4,5),(5,4),(5,2),(2,5),(5,3),(3,5);

CREATE TABLE messages (
    Id_message INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
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

ALTER TABLE contenir ADD CONSTRAINT FOREIGN KEY (Id_joueurs) REFERENCES joueurs (Id_joueurs);
ALTER TABLE contenir ADD CONSTRAINT FOREIGN KEY (Id_carnet_amis) REFERENCES carnet_amis (Id_carnet_amis);
ALTER TABLE messages ADD CONSTRAINT FOREIGN KEY (Id_auteur) REFERENCES joueurs (Id_joueurs);
ALTER TABLE messages ADD CONSTRAINT FOREIGN KEY (Id_destinataire) REFERENCES joueurs (Id_joueurs);
ALTER TABLE joueurs ADD CONSTRAINT FOREIGN KEY (Id_carnet_amis) REFERENCES carnet_amis (Id_carnet_amis);
ALTER TABLE obtenir ADD CONSTRAINT FOREIGN KEY (Id_personnage) REFERENCES personnage (Id_personnage);
ALTER TABLE obtenir ADD CONSTRAINT FOREIGN KEY (Id_item) REFERENCES item (Id_item);
ALTER TABLE personnage ADD CONSTRAINT FOREIGN KEY (Id_type_personnage) REFERENCES type_personnage (Id_type_personnage);
ALTER TABLE personnage ADD CONSTRAINT FOREIGN KEY (Id_joueurs) REFERENCES joueurs (Id_joueurs);
ALTER TABLE combats ADD CONSTRAINT FOREIGN KEY (Id_arene) REFERENCES arene (Id_arene),
					ADD CONSTRAINT FOREIGN KEY (id_vaincu) REFERENCES personnage (Id_personnage),
					ADD CONSTRAINT FOREIGN KEY (id_vainqueur) REFERENCES personnage (Id_personnage);
                    
ALTER TABLE costume ADD COLUMN prix decimal(10,2);

-- Update du nom de Allo qui a comme id unique 3 par SousRace !! NE FONCTIONNE QUE POUR UN SEUL ET MEME ENREGISTREMENT !!
UPDATE `costume` SET `prix` = 20.00 WHERE nom_costume = "La Faucheuse";
UPDATE `costume` SET `prix` = 35.00 WHERE nom_costume = "Le Lapin de Pâque";
UPDATE `costume` SET `prix` = 35.00 WHERE nom_costume = "Phénix";
UPDATE `costume` SET `prix` = 15.50 WHERE nom_costume = "La Banshee";
UPDATE `costume` SET `prix` = 29.50 WHERE nom_costume = "Jeanne d'Arc";

CREATE TABLE achat (
    Id_achat INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date_achat DATETIME,
    Id_personnage INT,
    Id_costume INT,
    Id_joueurs INT
)  ENGINE=INNODB;

ALTER TABLE achat ADD CONSTRAINT FOREIGN KEY (Id_personnage) REFERENCES personnage (Id_personnage),
	ADD CONSTRAINT FOREIGN KEY (Id_costume) REFERENCES costume (Id_costume),
	ADD CONSTRAINT FOREIGN KEY (Id_joueurs) REFERENCES joueurs (Id_joueurs);
    

INSERT INTO achat (date_achat, Id_joueurs,Id_costume,Id_personnage)
	VALUE ("2022-05-10",1,1,1),("2022-06-01",1,2,7),("2022-06-21",3,4,3),("2022-06-21",1,3,1),("2022-06-23",3,5,3),("2022-07-03",5,1,5);
    
-- 1) Toute la liste des joueurs inscrit -> Afficher la liste des joueurs (uniquement leur pseudo)    
SELECT pseudo_joueur FROM joueurs;

-- 2) Page profil d'un joueur -> Afficher le pseudo et le mail du troisième joueur inscrit
SELECT pseudo_joueur, mail_joueur FROM joueurs WHERE Id_joueurs = 3;

-- 3) Liste des personnages -> Afficher le pseudo du premier joueur et sa liste de personnage
SELECT 
    joueurs.pseudo_joueur, personnage.nom_personnage
FROM
    joueurs
        INNER JOIN
    personnage ON joueurs.Id_joueurs = personnage.Id_joueurs
WHERE
    joueurs.Id_joueurs = 1;

-- 4) Liste des costumes -> Afficher le pseudo du premier joueur et la liste des costumes achetés pour chacun de ses personnages (afficher aussi les personnages du coup)
SELECT 
    joueurs.pseudo_joueur,
    costume.nom_costume,
    personnage.nom_personnage
FROM
    achat
        JOIN
    personnage ON achat.Id_personnage = personnage.Id_personnage
        JOIN
    joueurs ON achat.Id_joueurs = joueurs.Id_joueurs
        JOIN
    costume ON costume.Id_costume = achat.Id_costume
WHERE
    joueurs.Id_joueurs = 1;
    
-- 5) Afficher le montant total dépensé par chaque joueur, classé par ordre décroissant (vous utiliserez la fonction d’agrégation sum() )

SELECT 
    SUM(costume.prix), joueurs.pseudo_joueur
FROM
    achat
        JOIN
    personnage ON achat.Id_personnage = personnage.Id_personnage
        JOIN
    joueurs ON achat.Id_joueurs = joueurs.Id_joueurs
        JOIN
    costume ON costume.Id_costume = achat.Id_costume
GROUP BY
	joueurs.pseudo_joueur;

-- 6) Liste d'ami -> Afficher le pseudo du troisième joueur et la liste de ses amis

SELECT DISTINCTROW
    (SELECT 
            joueurs.pseudo_joueur
        FROM
            joueurs
        WHERE
            joueurs.Id_joueurs = 3) AS 'Joueur',
    joueurs.pseudo_joueur AS 'Amis'
FROM
    contenir
        JOIN
    joueurs ON contenir.Id_joueurs = joueurs.Id_joueurs
WHERE
    contenir.Id_carnet_amis = (SELECT 
            joueurs.Id_carnet_amis
        FROM
            joueurs
                JOIN
            carnet_amis ON joueurs.Id_carnet_amis = carnet_amis.Id_carnet_amis
        WHERE
            joueurs.Id_joueurs = 3);
            
-- 7) Messagerie -> Afficher le pseudo du troisième joueur, la liste des messages qu’il a envoyés, puis afficher la liste des messages qu’il a reçus

SELECT DISTINCTROW
    (SELECT 
            joueurs.pseudo_joueur
        FROM
            joueurs
        WHERE
            joueurs.Id_joueurs = 3) AS 'Joueur 3',
    messages.message AS 'Messages envoyés'
FROM
    messages
        JOIN
    joueurs ON joueurs.Id_joueurs = messages.id_auteur
WHERE
    joueurs.Id_joueurs = 3;
SELECT DISTINCTROW
    (SELECT 
            joueurs.pseudo_joueur
        FROM
            joueurs
        WHERE
            joueurs.Id_joueurs = 3) AS 'Joueur 3',
    messages.message AS 'Messages Reçus'
FROM
    messages
        JOIN
    joueurs ON joueurs.Id_joueurs = messages.id_destinataire
WHERE
    joueurs.Id_joueurs = 3;
        
-- 8) Afficher le journal de combat du premier joueur. On doit voir apparaître la date de chaque combat, le nom de l’arène, le nom du vainqueur et le nom du vaincu

/*SELECT DISTINCTROW
    (SELECT 
            joueurs.pseudo_joueur
        FROM
            joueurs
        WHERE
            joueurs.Id_joueurs = 1) AS 'Joueur 1', combats.date_combat AS 'Date du combat', arene.nom_arene AS 'Nom arène', personnage.nom_personnage AS 'Vainqueur', personnage.nom_personnage AS 'Vaincu'
	FROM combats
    JOIN arene ON combats.Id_arene = arene.Id_arene
    JOIN personnage ON combats.id_vaincu = personnage.Id_personnage OR combats.id_vainqueur = personnage.Id_personnage
    WHERE personnage.Id_joueurs = 1;
*/

-- 9) Stat des personnages -> Afficher les caractéristiques des personnages du premier joueur. Chaque caractéristique (Point de vie, Attaque, Defense) doit apparaitre ajustée par l'item équipé (Point de vie = Point de vie du type de perso + Bonus de Point de vie de l'item). Afficher aussi l'item équipé par ces personnages.
-- 10) Le premier joueur n'a plus envie de joueur son premier personnage, et décide de le supprimer. Le supprimer de la Base de Donnée.