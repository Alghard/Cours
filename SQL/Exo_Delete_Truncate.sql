use ticket;

/*1) Supprimer le dernier enregistrement dans la table apparaitre (celui d'id = 3)
2) Supprimer le ticket dont l'id est égale à 2
3) Supprimer le vendeur qui s'appelle Dupond Jean
4) Supprimer l'entièreté de la table article */

DELETE FROM apparaitre WHERE id_apparaitre = 3;

DELETE FROM ticket WHERE id_ticket = 2;

ALTER TABLE ticket DROP CONSTRAINT ticket_ibfk_1;
DELETE FROM vendeur WHERE nom_vendeur = "Dupont" AND prenom_vendeur = "Jean";

ALTER TABLE apparaitre DROP CONSTRAINT apparaitre_ibfk_1;
TRUNCATE article;
DROP TABLE article;