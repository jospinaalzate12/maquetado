let fotos=[
    '01','02','03','04','05','06','07','08'
];
let titulo=['Complete fiction','Chronicles of Conan','Children of Húrin','Silmarillion','Dune','Michel Crichton','the complete tales and poens of','Complete Worjs']
let vinculos=['img01.html','img02.html','img03.html','img04.html','img05.html','img06.html','img07.html','img08.html']
let contenedornovedades=document.querySelector('.contenedornovedades')
let cantidadfotos=fotos.length
contenido=""
for (let index = 0; index < cantidadfotos; index++) {
    contenido=contenido+'<article><img src="img/'+fotos[index]+'.jpg">'+
    '                    <h2>'+ titulo[index] +'</h2>' +
    '                    <a class="ar" href="'+vinculos[index]+'">Ver mas</a>' +
    '                </article>';


   
}
contenedornovedades.innerHTML=contenido