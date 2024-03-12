/*Exercice 2 :
1) Reprendre l'exercice précédent, et ajouter les Clé Etrangère*/

ALTER TABLE apparaitre ADD CONSTRAINT FOREIGN KEY (id_article) REFERENCES article(id_article);
ALTER TABLE apparaitre ADD CONSTRAINT FOREIGN KEY (id_ticket) REFERENCES ticket(id_ticket);
ALTER TABLE ticket ADD CONSTRAINT FOREIGN KEY (id_vendeur) REFERENCES vendeur(id_vendeur);


/*
2) Dans la table apparaître, créer un champ id_apparaitre
*/

ALTER TABLE apparaitre ADD COLUMN id_apparaitre INT NOT NULL;


/*
3) Ajouter à la table apparaitre une clé primaire
*/
ALTER TABLE apparaitre ADD PRIMARY KEY (id_apparaitre);
ALTER TABLE apparaitre MODIFY COLUMN id_apparaitre INT NOT NULL AUTO_INCREMENT;


/*
4) Ajouter une colone Age dans Vendeur
*/
ALTER TABLE vendeur ADD COLUMN age INT;


/*
5) Ajouter une nouvelle table utilisateurs, avec ne champ : l'id_user, le login et le mot de passe.*/

CREATE TABLE utilisateurs(
	id_user INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    login VARCHAR(50) NOT NULL UNIQUE,
    password_user VARCHAR(150) NOT NULL
)ENGINE=innoDB;

/*
6) Ajouter une table role, avec comme champ : id_role et le role*/
CREATE TABLE roles(
	id_role INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    role VARCHAR(50) NOT NULL UNIQUE
)ENGINE=innoDB;


/*
7) Ajouter à la table utilisateur le champ id_role*/
ALTER TABLE utilisateurs ADD COLUMN id_role INT;

/*
8) transformer le champ id_role en clé étrangère relié à la table role*/
ALTER TABLE utilisateurs ADD CONSTRAINT cle_role_user FOREIGN KEY (id_role) REFERENCES roles(id_role);