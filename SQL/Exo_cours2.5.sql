use test;

-- Requete pour Enregistrer un fdp(ou un pd ou autre)
INSERT INTO fdps VALUES (1, 9999, 1);

-- Ajout colonne et update de ma ligne
ALTER TABLE fdps ADD COLUMN nom_fdp VARCHAR(50);
UPDATE `test`.`fdps` SET `rank_fdps` = 10000 WHERE (`id_fdps` = '1');

-- Autre façon d'INSERT INTO beaucoup plus courante
INSERT INTO fdps(rank_fdps, nom_fdp) VALUES(7899, "Allo");

-- Enregistrement de plusieurs fdps en meme temps
INSERT INTO fdps(rank_fdps, nom_fdp) 
	VALUES(10, "Ursula"),
			(987, "Patibule78");
            
-- Update du nom de Allo qui a comme id unique 3 par SousRace !! NE FONCTIONNE QUE POUR UN SEUL ET MEME ENREGISTREMENT !!
UPDATE `fdps` SET `nom_fdp` = "SousRace", `rank_fdps` = 78987787879798 WHERE id_fdps = 3;

-- Que se passe-t-il si on oublie la condition WHERE 
UPDATE fdps SET `rank_fdps` = 9999;
