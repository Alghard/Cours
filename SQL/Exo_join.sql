/* Sur la base de la BDD Ticket :
1) Afficher la liste de produit que chaque vendeur a vendu
*/
use ticket4;
SELECT DISTINCT
    vendeur.nom_vendeur, article.nom_produit
FROM
    vendeur
        JOIN
    ticket ON vendeur.id_vendeur = ticket.id_vendeur
        JOIN
    apparaitre ON ticket.id_ticket = apparaitre.id_ticket
        JOIN
    article ON apparaitre.id_article = article.id_article;