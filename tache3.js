var fs=require("fs");
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier:', err);
    } else {
      console.log('Contenu du fichier:', data);
    }
  });