var nodemailer=require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ayaassas13@gmail.com', // Remplacez par votre adresse email
      pass: '***', // Remplacez par votre mot de passe
    },
  });
  
  // Détails de l'email
  const mailOptions = {
    from: 'ayaassas13@gmail.com', // L'expéditeur (vous-même)
    to: '.......@yahoo.fr', // L'adresse email du destinataire
    subject: 'Hello depuis Nodemailer', // Sujet de l'email
    text: 'Ceci est un email envoyé via Node.js et Nodemailer.', 
   
  };
  // Envoyer l'email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Erreur lors de l\'envoi de l\'email:', err);
    } else {
      console.log('Email envoyé avec succès:', info.response);
    }
  });