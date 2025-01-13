

# Nuit des Musées au MusBA

## C'est quoi ?

Une expérience interactive sur l'écran tactile du MusBA qui a eu lieu lors de la **Nuit Européenne des Musées le samedi 17 mai 2025.**
Réalisé par la promotion 2025 du MMI Bordeaux.



## Simulation de l'écran tactile du MusBA

Vous n'avez peut-être pas d'écran 4k de 1m50 x 1m.
Vous pouvez simuler cette qualité sur chrome en ouvrant l'inspecteur d'élément et en définissant une taille d'écran personnalisée : 3840 x 2160 pixels
Tuto vidéo : [tuto-custom-screen.mp4](https://drive.google.com/file/d/13nn7Nf9MTph6T_OHQdIMjQydiNKbts94/view?usp=sharing)

## Développement

```bash
# 1. Installer pnpm si vous ne l'avez pas, un meilleur package manager que npm
npm i -g pnpm

# 2. Installer les dépendances (à faire régulièrement car les packages peuvent êtres mis à jour)
pnpm

# 3. Cloner le projet 
git clone https://github.com/ccadran/MUSBA.git

# 4. Ouvrir le projet et installer les dépendances
pnpm i

# 5. Lancer le serveur de dev
pnpm dev
```

## Comment travailler

1. Créez une branche depuis `develop`
2. Faites des commits de l'avancement de votre projet sur cette branche
3. Une fois la feature ou le fix finis faites une pull request dans `develop` (n'oubliez pas de la passer en base de la PR)
4. Essayer de checker régulièrement si des PR sont ouvertes pour les valider et lancer le merge vers `develop`

### Review une pull request

- Pour review une PR, vous avez juste à cliquer sur une d'entre elle, regarder le code ajouté ou supprimer et laisser des commentaires si besoin (oubli, erreur...)
- Si rien ne vous semble problématique, vous pouvez lancer le merge vers develop
- Si vous avez laissé des commentaires, c'est à l'auteur de la PR de les corriger 

### Corriger une pull request
- Vous avez reçu des commentaires sur votre PR, si ils sont pertinents, corriger votre code et faites un nouveau commit sur la branche concernée
- Si vous avez une remarque à apporter, laisser une réponse dans la conversation 


## Les branches

### Nommage


[g-"numéro du groupe"]/`feature/*` (fonctionnalité) ou `fix/*` (correction de bug)/ expliquatif 

exemple : g-1/feature/dragAndDrop

### créer une branche depuis VsCode

- assurez-vous d'être dans `develop`
- lancer un `git pull`pour être sûr d'avoir la dernière version
- git checkout -b nom_de_la_branche

exemple : git checkout -b g1/feature/dragAndDrop

vous pouvez vérifier que vous êtes bien sur la bonne branch en regardant en bas à gauche de VsCode ou en faisant un `git branch`




### Pourquoi travailler sur develop puis merger sur main ?

- on a une branche de travail et de test (`develop`), et une branche de production (`main`)
- à chaque commit sur `main` un build se lance pour déployer le nouveau bundle et le nouveau site, c'est bien de ne pas lancer un build à chaque commit

## Architecture des dossiers

### À la racine `/src/`

C'est le hub qui amène aux expériences (accessible sur http://localhost:5173/).

### Dans `/src/experiences`

Les expériences, chacune dans son dossier. Vous pouvez gérer ce qu'il y a dedans comme vous le souhaitez.
**Pensez à ajouter vos fichiers index.html dans la config `vite.config.js` pour qu'ils soient dans le build**
**Pensez également à ajouter le fichier style.scss dans vos fichiers html**

### Dans `/public`

Les fichiers qui ne sont pas traités par vite (donc autre que js et css en gros)
Exemple : image, fichier 3D

Chaque groupe à son dossier, libre à vous de créer des sous dossiers `/public/1-hub/images`

### À la racine `/`

Les fichiers de config


### Protocoles de tests (pas encore à jour)



- [Tests d'affichage](https://docs.google.com/document/d/1sBZ3sFOpRg8fPJS0sMHI_C1JK4XoqwRLattG3UdXTCM/edit?usp=drive_link)
