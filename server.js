const express = require('express');
const app = express();
const hbs = require('hbs');

const puerto = process.env.PORT || 3000;

//activar la carpeta public o a la que queremos apuntar el home
app.use(express.static(__dirname + '/public'));

//---PARTIALS----
//registrar bloques de codigo html para reutilizarlos despues
hbs.registerPartials(__dirname + '/views/partials');

//paquete npm HBS para paginas diámicas, renderea automaticamente paginas con handlebars.js ( {{como_estas_etiquetas}})
app.set('view engine', 'hbs');
//sirve para meter contenido dinámico en elementos HTML a traves de los {{}} que se intertan en el codigo HTML de la pagina HBS

//-------HELPERS--------

//Utilizar funciones dentro del codigo HTML
hbs.registerHelper('getAno', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('mayus', (texto) => {
    let palabras = texto.split(' ');
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i]
        palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }
    return palabras.join(' ');


});


//renderea el HOME o /
app.get('/', (req, res) => {

    // se crea un objeto que se envia como parámetro de la funcion, el objeto debe tener todos los labes que se escriben en la pagina HBS
    res.render('index', {
        nombre: 'Juan Camiol',
        otroAtributo: 25
    });


});

//renderea el About / se debe crear un path por cada página.card-header-tabs

app.get('/about', (req, res) => {

    // se crea un objeto que se envia como parámetro de la funcion, el objeto debe tener todos los labes que se escriben en la pagina HBS
    res.render('about', {
        nombre: 'Juan Camilo',
        year: new Date().getFullYear()
    });


});

/** 

//activar un direcctorio en especifico
app.get('/home', (req, res) => {

    res.send('./public/index.html');

});
*/

app.listen(puerto, () => {
    console.log(`Escuchando peticiones en el puerto ${puerto}`);
});