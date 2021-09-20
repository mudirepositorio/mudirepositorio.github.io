//Función que borra todos los elementos de una clase (usar para par1)
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

//Función que crea elementos <p> ANALIZAR Y ADAPTAR
function addNode() {
    var newP = document.createElement("p"); 
    var textNode = document.createTextNode("This is a new text node"); 
    newP.appendChild(textNode);
    document.getElementById("firstP").appendChild(newP); 
} 

function Inicio() {
    document.getElementById("demo").innerHTML = "Hello World";
}

//define y "appenda" matriz inicio, que contiene en cada índice un párrafo de la página inicio
let iniciotxt = ['<b>Sebastián Pozzi Azzaro</b> (Buenos Aires, 1980) es licenciado en Composición y Dirección Orquestal (Universidad Católica Argentina, Diploma de Honor 2008).']
let newLength = inicio.push('Estudió con Marta Lambertini, Julio Viera, Marcelo Delgado, Juan Ortiz de Zárate, Marcelo Katz y Federico Wiman.')
let newLength = inicio.push('Obras suyas han sido interpretadas en  Teatro Colón, Centro Cultural Kirchner, Ciclo de Música Contemporánea del Teatro General San Martín, Maison de l\'Argentine (París), Consulado Argentino (Nueva York), Embajada Argentina (Madrid), Teatro Margarita Xirgu, Museo Isaac Fernández Blanco, Teatro Payró, Teatro Machado, Festival Guitarras del Mundo, Conservatorio Alberto Ginastera (Morón), Conservatorio Manuel de Falla, Espacio Cultural Fundación Osde, Auditorio del DAMus (Universidad Nacional de las Artes), Auditorio de la Biblioteca Nacional Argentina, Biblioteca Nacional (Montevideo), Sala Alberto Ginastera (UCA), Casa de la Cultura del Fondo Nacional de las Artes, Sala Otto de Greiff (Bogotá), Auditorio de la Escuela de Música Juan Pedro Esnaola, Auditorio del Centro Cultural de la Memoria Haroldo Conti, Centro Cultural Dardo Rocha (La Plata), Espacio Cultural Nuestros Hijos, Besares Club de Cultura, Teatro La Factoria (Bogotá), Auditorio de la Facultad de Derecho (Universidad de Buenos Aires) y Facultad de Artes ASAB (Bogotá), entre otros.')
let newLength = inicio.push('Algunxs intérpretes de su música han sido Haydée Schwartz, Elías Gurevich, Compañía Oblicua, Orquesta del Casal de Catalunya, Cuarteto Argentino, Mei Duo, Marcelo González, La Monstructora Colectivo de Compositores, Inés Sabatini, Federico Figueroa, Nuntempe Ensamble, Nonsense Ensamble, Periferia Vocal, Saratoga Trío, Ensamble de Percusión del DAMus (UNA) y Música Inaudita.')
let newLength = inicio.push('Obtuvo la Beca Nacional del Fondo Nacional de las Artes (2014) para la realización de la obra “No velar las voces” sobre textos de novelas argentinas, con la participación de Horacio González como lector. Fue seleccionado o premiado en Nuevas Músicas por la Memoria (2014), Manos a las Obras (2013), 9º Certamen Internacional de Coros (Trelew, 2009) y Convocatoria Nanópera (2016).')
let newLength = inicio.push('Ha escrito y traducido textos sobre música para varias editoriales y revistas de Buenos Aires.')
let newLength = inicio.push('Se desempeña desde hace más de una década como docente a nivel universitario, escolar y en forma particular.')

//define y "appenda" matriz verescuchar, que contiene en cada índice un párrafo de la página verescuchar
let verescuchar = ['Una obra para ver o escuchar']
let newLength = verescuchar.push('Una segunda obra para ver o escuchar')
let newLength = verescuchar.push('Yet another obra para ver o escuchar')

//alert("I am an alert box!") 
//document.addEventListener('DOMContentLoaded', function() {
//    document.querySelectorAll('button').forEach(function(button) {
//        button.onclick = addNode();
//    }
//}
//document.querySelector("#hello").style.color = button.dataset.color;

// *** desde script borra todo par1 y crea nuevos par1 cada vez:

//1 how to create a paragraph in javascript dynamically HECHO
//https://www.codegrepper.com/code-examples/javascript/how+to+create+a+paragraph+in+javascript+dynamically

//2 how to delete all elements with a class name HECHO
//https://www.codegrepper.com/code-examples/javascript/how+to+delete+all+elements+with+a+class+name


//NOT SURE:
//Esto?  https://stackoverflow.com/questions/60870871/iterate-through-array-of-paragraphs-and-add-content-from-another-array-in-javasc