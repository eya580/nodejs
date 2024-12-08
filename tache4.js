var generatepassword=require("generate-password");
const password=generatepassword.generate({
    lenght:12 ,
    number:true ,
    symbols:true ,
    lowcase:true,
    upcase:true
});
console.log('Mot de passe généré:', password);