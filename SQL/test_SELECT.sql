-- REQUETE DE CONSULTATION POUR LIRE DES DONNEES : SELECT
-- Bonne pratique d'écriture : préfixé chaque champ qui m'intéresse
-- par le nom de la table où elle se trouve et séparer les deux par un symbole .
SELECT users.login, users.name_user, users.first_name_user FROM users;

SELECT * FROM users; -- -> l'utilisation de * est sous-optimal

-- Ajoutons 4 articles simialires
INSERT INTO articles (title, id_user) VALUES 
	("Mon premier Article",11),
	("Mon premier Article",11),
    ("Mon premier Article",11),
    ("Mon premier Article",11);
-- Un SELECT qui va afficher les 4 articles, même s'ils sont similaires
SELECT title, id_user FROM articles;

-- Avec DISTINCT, les articles ne vont apparaître qu'une seule fois car ils sont similaires
SELECT DISTINCT title, id_user FROM articles; 

-- Utilisation des alias avec AS :
SELECT DISTINCT title AS titre, id_user AS numero_auteur FROM articles;

-- Démo avec WHERE :
-- SELECT les users dont le login possède les lettres Sas :
SELECT users.login, users.name_user, users.first_name_user FROM users
	WHERE login -- LIKE "%Sas"; -- -> les login qui se termine par sas
			   -- LIKE "Sas%"; -- -> les login qui commence par sas
                LIKE "%Sas%"; -- -> les login qui contienne sas n'importe où
                
-- SELECT avec le IN : va retourner les users dont le login est un de ceux listé par le IN
SELECT users.login, users.name_user, users.first_name_user FROM users
	WHERE login IN ("DarkSasuke","Kylli","Chopper","Arthuria");
    
-- SELECT avec BETWEEN..AND :
SELECT users.login, users.name_user, users.first_name_user FROM users
	WHERE id_user BETWEEN 11 AND 15;
    
-- Est-ce que BETWEEN..AND fonctionne avec des valeurs alphabétiques ? OUI !
SELECT users.login, users.name_user, users.first_name_user FROM users
	WHERE login BETWEEN "Arborescence" AND "zz";

-- ORDER BY : Trier les données par ordre croissant ou décroissant selon une ou plusieurs colonnes
SELECT * FROM test.fdps ORDER BY rank_fdps DESC, nom_fdp ASC;

-- ORDER BY + WHERE : ordre de la syntaxe ORDER BY apres WHERE
SELECT * FROM test.fdps 
	WHERE rank_fdps > 5000
    ORDER BY rank_fdps DESC;
