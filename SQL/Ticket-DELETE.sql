/*Reprendre l'exercice précédent (Ticket) :

1) Supprimer le dernier enregistrement dans la table apparaitre (celui d'id = 3)*/
DELETE FROM apparaitre WHERE id_apparaitre = 3;

/*
2) Supprimer le ticket dont l'id est égale à 2*/
DELETE FROM ticket WHERE id_ticket = 2;


/*
3) Supprimer le vendeur qui s'appelle Dupond Jean*/
-- D'abord on supprimer la contrainte de clé étrangère avec ticket (ici elle s'appelle ticket_ibfk_1)
ALTER TABLE ticket DROP FOREIGN KEY ticket_ibfk_1;
-- Maintenant je peux supprimer mon vendeur
DELETE FROM vendeur WHERE nom_vendeur = "Dupond" AND prenom_vendeur = "Jean";

-- Ensuite si je veux, je peux recréer ma contrainte de clé étrangère (mais uniquement si l'id du vendeur que je viens de supprimer n'apparait plus dans ma table ticket)
UPDATE ticket SET id_vendeur = 1 WHERE id_ticket = 1;
ALTER TABLE ticket ADD CONSTRAINT FOREIGN KEY (id_vendeur) REFERENCES vendeur(id_vendeur);

/*
4) Supprimer l'entièreté de la table article*/
TRUNCATE article; -- -> ne fonctionne pas, car ma table article est lié à ma table apparaitre par une contrainte de clé étrangère
DELETE FROM article; -- -> ne fonctionne pas, car certains articles que je veux supprimer apparaissent dans la table apparaître via la clé étrangère

-- Pour faire la suppression, soit je romps la contrainte (pour utiliser TRUNCATE), soit j'efface les données des id_article de la table apparaitre (pour utiliser DELETE)
UPDATE apparaitre SET id_article = null;
DELETE FROM article;

-- ENSUITE pour le plaisir, supprimons Article Mwahahaha !
DROP TABLE article; -- -> pas possible parce qu'il existe toujours la contrainte de clé étrangère
