Jeu de la Vie (Game of Life ou Poowum Adüna)

Ce projet implémente le célèbre automate cellulaire "Jeu de la Vie". Le "Jeu de la Vie" est un modèle mathématique qui évolue dans le temps en fonction de règles simples, créant des motifs complexes et intéressants à partir d'un état initial.

======>Fonctionnalités:

Interface utilisateur simple : Le jeu dispose d'une interface utilisateur minimaliste pour configurer les paramètres du jeu.
Personnalisation : Les utilisateurs peuvent spécifier le nombre de colonnes, de lignes et la vitesse du jeu.
Interaction utilisateur : Avant le démarrage du jeu, l'utilisateur peut cliquer sur les cellules pour les faire naître ou mourir.
Contrôle du jeu : Les boutons permettent de démarrer, arrêter, mettre en pause, réinitialiser et remplir aléatoirement la grille.
Affichage des générations : Le nombre actuel de générations est affiché en temps réel.

======>Comment utiliser?:

Ouvrez le fichier GOL.html dans un navigateur web.
Personnalisez les paramètres du jeu (nombre de colonnes, nombre de lignes, vitesse).
Cliquez sur les cellules pour les éditer avant de démarrer le jeu.
Utilisez les boutons pour démarrer, arrêter, mettre en pause, réinitialiser ou remplir aléatoirement la grille.
Règles du Jeu de la Vie

=======>Les règles du "Jeu de la Vie" sont les suivantes :

Une cellule morte avec exactement 3 voisins vivants devient une cellule vivante.
Une cellule vivante avec moins de 2 voisins vivants meurt (sous-population).
Une cellule vivante avec 2 ou 3 voisins vivants survit.
Une cellule vivante avec plus de 3 voisins vivants meurt (surpopulation).

=====>Technologies utilisées

JavaScript
p5.js (bibliothèque de traitement graphique pour JavaScript)

=====>Explications du code:

Voici une explication détaillée du code, en décomposant les différentes parties :

Variables globales :

gameStarted: Indique si le jeu est en cours.
resolution: La résolution des cellules dans le canevas.
generation: Le numéro de la génération actuelle.
speed: La vitesse de mise à jour du jeu.
lastUpdateTime: Stocke le temps de la dernière mise à jour.
grid: Une matrice qui représente l'état des cellules.
cols et rows: Le nombre de colonnes et de lignes dans la grille.

Fonction setup() :
Initialise les paramètres du jeu au chargement de la page.
Crée un canevas avec la bibliothèque p5.js.
Initialise la grille et dessine la première génération.

Fonction make2DArray(cols, rows) :
Crée une matrice 2D avec le nombre de colonnes et de lignes spécifié.

Fonction updateConfiguration() :
Met à jour la configuration du jeu en fonction des paramètres de l'utilisateur.
Redimensionne le canevas et réinitialise la grille.

Écouteurs d'événements :

Attache des écouteurs d'événements pour détecter les changements dans les paramètres (nombre de colonnes, nombre de lignes, vitesse).

Fonction initializeGrid() :
Initialise toutes les cellules de la grille à zéro (mortes).

Fonction drawFirstGeneration() :
Dessine la première génération sur le canevas.
Les cellules vivantes sont représentées par des rectangles colorés.

Fonction drawNextGenerations() :
Calcule la prochaine génération en appliquant les règles du "Jeu de la vie".
Met à jour la grille et incrémente le compteur de génération.

Fonction draw() :
Fonction principale de p5.js pour dessiner continuellement.
Met à jour le jeu à intervalles réguliers.

Fonction countNeighbors(grid, x, y) :
Compte le nombre de voisins vivants d'une cellule à la position (x, y).

Fonction mouseClicked(event) :
Gère le clic de la souris pour changer l'état d'une cellule lorsqu'on édite la grille (avant le démarrage du jeu).

Fonction tanduus() :
Remplit la grille de manière aléatoire avec des cellules vivantes ou mortes.
Écouteurs d'événements pour les boutons :

tambali, jeexal, agaleii, tambaliwat, tanduus : Gèrent le démarrage, l'arrêt, la pause, la réinitialisation et le remplissage aléatoire de la grille.


Auteur
Modou mbacke
"Just a boy from Tüuba"

