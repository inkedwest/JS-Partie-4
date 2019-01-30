/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.slice(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
  if (typeof texte === 'string' || texte instanceof String){
    var texteboolean = true;
  }
  return texteboolean;
}
var AfficherExtensionString = function (texte) {
    re = /(?:\.([^.]+))?$/;
    return re.exec(texte)[1];;
}
var NombreEspaceString = function (texte) {
    nbesp = texte.split(' ').length - 1;
    return nbesp;
}
var InverseString = function (texte) {
    String.prototype.reverse        =       function (){
        var n   =  '';
        for( var i=this.length-1; i >= 0; i--)
                n       +=     this.charAt(i);
        return n;
    }
    return texte.reverse();
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    for(var i=0; i<array.length; i++){
      var arraynumber = Math.abs(array[i]);
      array[i] = arraynumber;
    }
    return array;
}
var sufaceCercle = function (rayon) {
    function CircleArea(r) {
      return Math.PI * (r * r);
    }
    var test = CircleArea(rayon);
    return Math.round(test);
}
var hypothenuse = function (ab, ac) {
    return Math.sqrt(ab*ab + ac*ac);
}
var calculIMC = function (poids, taille) {
  var stringIMC = (poids/(taille*taille)).toFixed(2);
  return parseFloat(stringIMC);
}
