

DROP TABLE IF EXISTS document ;
DROP TABLE IF EXISTS services;

-- 1. Création de la table services
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    nom_service VARCHAR(100) NOT NULL
);

-- 2. Insertion des services
INSERT INTO services (nom_service) VALUES 
('Passeport'),
('Passeport pour les mineurs'),
('Autorisation de port d''arme'),
('Renouvellement de l''autorisation de port d''arme'),
('Associations'),
('Certificat de résidence'),
('Certificat administratif de résidence'),
('Certificat de décès'),
('Certificat de profession'),
('Certificat de naissance'),
('service militaire obligatoire');

-- 3. Création de la table document
CREATE TABLE document (
    id SERIAL PRIMARY KEY,
    service_id INT REFERENCES services(id) ON DELETE CASCADE,
    document VARCHAR(255) NOT NULL
);

-- 4. Insertion des documents
INSERT INTO document (service_id, document) VALUES
(1, 'Copie de la carte Nationale'),
(1, 'Quatre photos'),
(1, 'Ancien passeport (si disponible)'),
(1, 'Timbre de 500 DH'),
(1, 'Timbre de 800 DH'),



(2, 'Autorisation parentale accompagnée d''une copie de la CNI du père et de la mère'),
(2, 'Quatre photos'),
(2, 'Ancien passeport (si disponible)'),
(2, 'Timbre de 500 DH'),

(3, 'Demande écrite à la wilaya pour prendre le permis'),
(3, 'Casier judiciaire et de tribunal'),
(3, 'Certificat médical'),
(3, 'Timbre de 600 + Timbre de 300 + Timbre de 200'),

(4, 'Demande de renouvellement'),
(4, 'Copie de la Carte Nationale et de l''ancien permis'),
(4, 'Casier judiciaire'),
(4, 'Assurance'),
(4, 'Carte de l''Université Fédérale'),
(4, 'Attestation sur l''honneur'), 
(4, 'Timbre de 600 + Timbre de 300 + Timbre de 200'),
(4, 'Deux photos d''identité récentes'),

(5, 'Dépôt du dossier 48 heures avant l''envoi'),
(5, 'Copie de la CNI'),
(5, 'Certificat de résidence délivré par le Cheikh avec copie de la CNI'),
(5, 'Six copies légalisées des statuts de l''association'),
(5, 'Six copies légalisées'),
(5, 'Six copies légalisées du Procès-verbal de l''assemblée générale'),
(5, 'Six copies légalisées de la liste des membres de l''association'),
(5, 'Copie de la CNI de chaque membre'),
(5, 'Contrat de location'),

(6, 'Acte de naissance'),
(6, 'Copie de la carte nationale d''identité'),
(6, 'Deux photos d''identité'),

(7, 'Copie du passeport'),
(7, 'Copie de la carte de séjour'),
(7, 'Deux photos'),
(7, 'Acte de naissance'),
(7, 'Copie de la carte nationale d''identité'),

(8, '12 témoins'),
(8, 'La copie de la carte nationale de chaque témoin'),
(8, 'La copie de la carte nationale d''un déclarant'),

(9, 'La copie de la carte nationale'),
(9, 'Déclaration sur l''honneur'),
(9, 'Préciser le service destinataire'),

(10, 'Déclaration des parents avec acte de mariage'),
(10, 'La copie de la carte nationale des parents'),
(10, 'Deux témoins'),
(10, 'La copie de la carte nationale de chaque témoin'),
(10, 'Déclaration de la sage-femme'),
(11,'https://maroc.ma/fr/actualites/loperation-de-recensement-relative-au-service-militaire');
SELECT * FROM services;
SELECT * FROM document;