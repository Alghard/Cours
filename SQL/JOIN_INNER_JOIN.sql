/* A partir de ticket
Recuperer le nom des vendeurs et dates des tickets qu'ils ont vendu
1) Identifier mes données : nom_vendeur dans la table vendeur, date_ticket dans la table ticket
-> SELECT vendeur.nom_vendeur, ticket.date_ticket

2) Identifier les tables ou se trouvent nos données : ici c'est dans ticket et vendeur
3) Je choisi un point de départ, par exemple, la table vendeur
-> SELECT vendeur.nom_vendeur, ticket.date_ticket FROM vendeur

4) Je fais ma jointure avec ma table adjacente (celle qui lié par une clé étrangère)
-> SELECT vendeur.nom_vendeur, ticket.date_ticket FROM vendeur INNER JOIN ticket

5) J'écris sa condition de jointure : je fais coorespondre la clé étrangère à la clé primaire
*/
SELECT 
    vendeur.nom_vendeur, ticket.date_ticket
FROM
    vendeur
        INNER JOIN
    ticket ON vendeur.id_vendeur = ticket.id_vendeur;

-- Un peu plus complexe : Je veux afficher la liste des produits vendus sur chaque ticket
-- -> Mes tables article et ticket ne sont pas directement liées, elles sont séparés par la table apparaitre
-- -> Je vais donc avoir besoin de faire une jointure multiple en intégrant la table apparaitre
-- -> DONC je vais devoir joindre ma table article avec apparaitre et ensuite joindre apparaitre avec ticket

SELECT 
    article.nom_produit, ticket.id_ticket, ticket.date_ticket -- -> je choisis les données que je veux voir
FROM														  -- -> je me choisis un point de départ
    article
        JOIN
    apparaitre ON article.id_article = apparaitre.id_article  -- -> je joins mon point de départ à sa table adjacente
        JOIN
    ticket ON apparaitre.id_ticket = ticket.id_ticket;		  -- -> je joins la table adjacente à sa table adjacente et ainsi de suite si on veut
