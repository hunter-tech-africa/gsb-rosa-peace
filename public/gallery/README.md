# Galerie / Gallery

Ce dossier est destiné à stocker les photos et vidéos de l'école.
This folder is for storing school photos and videos.

## Structure / Structure

```
gallery/
├── photos/     # Placez vos photos ici / Place your photos here
└── videos/     # Placez vos vidéos ici / Place your videos here
```

## Instructions

### Pour ajouter des photos / To add photos:

1. Placez vos fichiers image (JPG, PNG) dans le dossier `photos/`
2. Les formats recommandés sont: JPG, PNG
3. Taille recommandée: max 2MB par photo

### Pour ajouter des vidéos / To add videos:

1. Placez vos fichiers vidéo dans le dossier `videos/`
2. Les formats recommandés sont: MP4, WEBM
3. Taille recommandée: max 50MB par vidéo

### Mise à jour du code / Updating the code:

Pour afficher vos médias, modifiez le fichier:
To display your media, edit the file:

`app/components/Gallery.tsx`

Remplacez les placeholders par les chemins réels de vos fichiers:
Replace the placeholders with the actual paths to your files:

```typescript
const photos = [
  { id: 1, title: 'Titre', category: 'Catégorie', src: '/gallery/photos/photo1.jpg' },
  // Ajoutez vos photos ici / Add your photos here
];
```

## Contact

Pour toute question, contactez:
For any questions, contact:

Email: contact@gsbrosepeace.com
Téléphone: (+237) 687849295
