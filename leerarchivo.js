var arrayData = [];
var archivoTxt= new XMLHttpRequest();
var fileRuta = './index.txt';
var dataSum= 0;
var interme = 0;
archivoTxt.open("GET",fileRuta,false);
archivoTxt.send(null);
var txt = archivoTxt.responseText;
console.log("soy arraydata : " + arrayData);
console.log("soy txt : " + txt);

for (var i = 0; i < txt.length; i++) {
    interme = txt[i];
    arrayData.push(interme);
}
console.log("soy arraydata : " + arrayData);
arrayData.forEach(myFunction);

function myFunction(item){
    dataSum+=parseInt(item);
}

if(dataSum==0){
    console.log('Insert datos en index.txt');
}else {
    console.log('La suma es : ' + dataSum);
}
