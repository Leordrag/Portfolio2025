# Ajout d'une nouvelle page de projet sur mon site React

## Step 1

### Import de la nouvelle page dans App tout en haut
import Project(n) from "./pages_projets/project(n)"; 

### Ajout du lien de l'image  dans App
 const projectImages = [
...
  ];

### Ajout de la route tout en bas de App
<Route path="/project(n)" element={<Project(n) />} />

## Step 2

### Création de la page project(n).tsx dans le dossier pages_projets

## Garder exactement la même config de fichier en changeant juste la partie en dessous de contenu principal

## Et aussi changer le texte dans "const translations"