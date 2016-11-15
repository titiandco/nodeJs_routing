var express = require('express');
// definition des parametres du serveur
var hostname = 'localhost';
var port = 3000;

var app = express();
 
 // demarrer le serveur
 app.listen(port, hostname, function(){
 		console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n");

 }); 