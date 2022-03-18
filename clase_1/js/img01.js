let articulo=document.querySelector('#articulo');
let fotos=[
    '01','02','03','04','05','06','07','08'
];
let titulos = [
    'Complete fiction','Chronicles of Conan','Children of Húrin','Silmarillion','Dune','Michel Crichton','the complete tales and poens of','Complete Worjs'
];
let links = [
    'img01.html','img02.html','img03.html','img04.html','img05.html','img06.html','img07.html','img08.html'
];
let numerofotos=fotos.length;
contenido="";


for (let index = 0; index < numerofotos; index++){
   contenido = contenido +'<article>' +
                            '<img src="img/'+fotos[index]+'.jpg" alt="">' +
       '                    <h2>'+ titulos[index] +'</h2>' +
       '                    <a class="ar" href="'+links[index]+'">Ver mas</a>' +
       '                </article>';

}
articulo.innerHTML=contenido;
