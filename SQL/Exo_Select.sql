/*Exercice : SELECT 
Sur la base de la BDD Ticket
1) Remplir à nouveau avec les valeurs des précédents exercices
2) effectuer une requête SELECT pour récupérer les vendeurs dont le prénom est compris entre a et d.
3) écrire une requête qui récupère tous les articles dont le nom de l'article commence par oe
4) ecrire une requête pour récupérer les ventes d'articles qui ont été vendu à plus de 5 exemplaires sur un ticket
5) Récupérer les tickets dont la date se situe entre le 1er Janvier 2020 et le 1er Août 2021
6) Récupérer les articles dont le prix correspond à l'une de ces valeurs : 0.5, 0.9, 1.9, 3.8 ;
7) Récupérer les vendeurs dont l'id est supérieur à 2 mais inférieur à 5
*/

use ticket;
SELECT * FROM vendeur WHERE prenom_vendeur BETWEEN "a" AND "d";
SELECT * FROM article WHERE nom_produit LIKE "oe%";
SELECT * FROM apparaitre WHERE quantite > 5;
SELECT * FROM ticket WHERE date_ticket BETWEEN "2020/01/01" AND "2021/08/01";
SELECT * FROM article WHERE prix_article IN (0.5,0.9,1.9,3.8);
SELECT * FROM vendeur WHERE id_vendeur BETWEEN 2 AND 5;
