CREATE TABLE Animal(
   id_animal VARCHAR(50) ,
   nom_animal VARCHAR(50) ,
   PRIMARY KEY(id_animal)
);

CREATE TABLE Type_article(
   id_type INT,
   nom_type VARCHAR(50) ,
   PRIMARY KEY(id_type)
);

CREATE TABLE Recette(
   id_recette INT,
   nom_recette VARCHAR(50) ,
   description_recette VARCHAR(50) ,
   img_recette VARCHAR(50) ,
   PRIMARY KEY(id_recette)
);

CREATE TABLE Taxe(
   id_taxe INT,
   taux_tva INT,
   debut_tva DATE,
   fin_tva DATE,
   PRIMARY KEY(id_taxe)
);

CREATE TABLE Livraison(
   id_livraison INT,
   status_livraison VARCHAR(50) ,
   date_livraison DATE,
   PRIMARY KEY(id_livraison)
);

CREATE TABLE Roles(
   id_role VARCHAR(50) ,
   nom_role VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_role),
   UNIQUE(nom_role)
);

CREATE TABLE Ville(
   Id_Ville INT AUTO_INCREMENT,
   nom_ville VARCHAR(50) ,
   PRIMARY KEY(Id_Ville)
);

CREATE TABLE Code_Postal(
   Id_Code_Postal INT AUTO_INCREMENT,
   code_postal INT,
   PRIMARY KEY(Id_Code_Postal)
);

CREATE TABLE Carte_bleu(
   Id_Carte_bleu INT AUTO_INCREMENT,
   numero_cb INT,
   nom_titulaire VARCHAR(50) ,
   date_validité VARCHAR(50) ,
   PRIMARY KEY(Id_Carte_bleu)
);

CREATE TABLE Paypal(
   Id_Paypal INT AUTO_INCREMENT,
   mail_paypal VARCHAR(50) ,
   numero_compte INT,
   PRIMARY KEY(Id_Paypal),
   UNIQUE(numero_compte)
);

CREATE TABLE Utilisateur(
   id_utilisateur BIGINT,
   pwd_utilisateur VARCHAR(50) ,
   nom_utilisateur VARCHAR(50) ,
   prenom_utilisateur VARCHAR(50) ,
   mail_utilisateur VARCHAR(50) ,
   tel_utilisateur VARCHAR(50) ,
   id_role VARCHAR(50) ,
   PRIMARY KEY(id_utilisateur),
   UNIQUE(mail_utilisateur),
   UNIQUE(tel_utilisateur),
   FOREIGN KEY(id_role) REFERENCES Roles(id_role)
);

CREATE TABLE Article(
   id_article BIGINT,
   nom_article VARCHAR(50) ,
   prix_unit_article DECIMAL(19,4),
   description_article VARCHAR(50) ,
   img_article VARCHAR(50) ,
   id_type INT,
   id_animal VARCHAR(50) ,
   PRIMARY KEY(id_article),
   FOREIGN KEY(id_type) REFERENCES Type_article(id_type),
   FOREIGN KEY(id_animal) REFERENCES Animal(id_animal)
);

CREATE TABLE Avis(
   id_avis VARCHAR(50) ,
   description_avis VARCHAR(50) ,
   date_avis DATE,
   nb_etoiles_avis INT,
   id_article BIGINT,
   id_utilisateur BIGINT,
   PRIMARY KEY(id_avis),
   FOREIGN KEY(id_article) REFERENCES Article(id_article),
   FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur)
);

CREATE TABLE Adresse(
   id_adresse INT,
   numero_rue_adresse VARCHAR(50) ,
   Id_Code_Postal INT,
   Id_Ville INT,
   id_utilisateur BIGINT,
   PRIMARY KEY(id_adresse),
   FOREIGN KEY(Id_Code_Postal) REFERENCES Code_Postal(Id_Code_Postal),
   FOREIGN KEY(Id_Ville) REFERENCES Ville(Id_Ville),
   FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur)
);

CREATE TABLE Commande(
   id_commande INT,
   status_commande VARCHAR(50) ,
   date_creation_commande DATE,
   Id_Carte_bleu INT NOT NULL,
   Id_Paypal INT NOT NULL,
   id_livraison INT,
   id_utilisateur BIGINT,
   PRIMARY KEY(id_commande),
   FOREIGN KEY(Id_Carte_bleu) REFERENCES Carte_bleu(Id_Carte_bleu),
   FOREIGN KEY(Id_Paypal) REFERENCES Paypal(Id_Paypal),
   FOREIGN KEY(id_livraison) REFERENCES Livraison(id_livraison),
   FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur)
);

CREATE TABLE facture(
   id_facture INT,
   date_facture DATE,
   id_commande INT,
   PRIMARY KEY(id_facture),
   FOREIGN KEY(id_commande) REFERENCES Commande(id_commande)
);

CREATE TABLE Compose(
   id_article BIGINT,
   id_commande INT,
   quantité INT,
   PRIMARY KEY(id_article, id_commande),
   FOREIGN KEY(id_article) REFERENCES Article(id_article),
   FOREIGN KEY(id_commande) REFERENCES Commande(id_commande)
);

CREATE TABLE Referer(
   id_article BIGINT,
   id_recette INT,
   PRIMARY KEY(id_article, id_recette),
   FOREIGN KEY(id_article) REFERENCES Article(id_article),
   FOREIGN KEY(id_recette) REFERENCES Recette(id_recette)
);

CREATE TABLE Appliqué(
   id_article BIGINT,
   id_taxe INT,
   PRIMARY KEY(id_article, id_taxe),
   FOREIGN KEY(id_article) REFERENCES Article(id_article),
   FOREIGN KEY(id_taxe) REFERENCES Taxe(id_taxe)
);

CREATE TABLE Aime(
   id_utilisateur BIGINT,
   id_article BIGINT,
   id_favori VARCHAR(50) ,
   PRIMARY KEY(id_utilisateur, id_article),
   FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
   FOREIGN KEY(id_article) REFERENCES Article(id_article)
);

CREATE TABLE est_associé(
   id_adresse INT,
   id_commande INT,
   PRIMARY KEY(id_adresse, id_commande),
   FOREIGN KEY(id_adresse) REFERENCES Adresse(id_adresse),
   FOREIGN KEY(id_commande) REFERENCES Commande(id_commande)
);

CREATE TABLE Correspondre(
   id_adresse INT,
   id_facture INT,
   PRIMARY KEY(id_adresse, id_facture),
   FOREIGN KEY(id_adresse) REFERENCES Adresse(id_adresse),
   FOREIGN KEY(id_facture) REFERENCES facture(id_facture)
);

CREATE TABLE Possède(
   id_utilisateur BIGINT,
   Id_Carte_bleu INT,
   PRIMARY KEY(id_utilisateur, Id_Carte_bleu),
   FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
   FOREIGN KEY(Id_Carte_bleu) REFERENCES Carte_bleu(Id_Carte_bleu)
);

CREATE TABLE Avoir(
   id_utilisateur BIGINT,
   Id_Paypal INT,
   PRIMARY KEY(id_utilisateur, Id_Paypal),
   FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
   FOREIGN KEY(Id_Paypal) REFERENCES Paypal(Id_Paypal)
);
