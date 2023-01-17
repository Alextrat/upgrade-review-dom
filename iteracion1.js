
// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const lista$$ = document.createElement("ul");
//console.log(lista$$)

for (const country of countries) {
    const li$$ = document.createElement("li");
    li$$.innerText = country
    lista$$.appendChild(li$$)
}
document.body.appendChild(lista$$);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminarElemento = document.querySelector(".fn-remove-me")
eliminarElemento.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const lista2$$ = document.createElement('ul');
const printHere$$ = document.querySelector('[data-function="printHere"]'); // ojo con la sintaxis cuando recogemos un "data-function"
for (const car of cars) {
    const li2$$ = document.createElement('li');
    li2$$.innerText = car;
    lista2$$.appendChild(li2$$);
    printHere$$.appendChild(lista2$$);
    
}
document.body.appendChild(printHere$$);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const lista3$$ = document.createElement('div'); // creo mi div de divs
for (const countrie of countries2) { // creo un for para iterar el array de paises
    const div$$ = document.createElement('div'); // creo un div en cada iteración
    const h4$$ = document.createElement('h4'); // creo un H4 en cada iteración
    h4$$.innerText = countrie.title // le doy al H4 el valor de title que contiene esta iteración
    const image$$ = document.createElement('img'); // creo una img en cada...
    image$$.setAttribute('src', countrie.imgUrl) // le digo que el atributo src sea el valor de imgURL en cada iteración
    div$$.appendChild(h4$$) // meto en el div de cada vuelta el h4 creado
    div$$.appendChild(image$$) // meto en el div también la img
    lista3$$.appendChild(div$$) // meto a la lista el div cada vuelta ya con su h4 y su img dentro
}
document.body.appendChild(lista3$$) // finalmente y fuera del bucle meto la lista de divs con todo lo creado al body

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

const boton$$ = document.createElement('button')
boton$$.innerText= "Borrar última foto"
document.body.appendChild(boton$$)


boton$$.addEventListener('click', function(){
    const liBorrar$$ = document.querySelectorAll('div')
    console.log(liBorrar$$)


    liBorrar$$[liBorrar$$.length-1].remove()  
});

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

const div2$$ = document.createElement('div');


const remove= (elemento) => {  // creo esta función y le paso por parámetro el div que quiero eliminar
    elemento.remove()
}
for (const country of countries2) { // en cada iteración me crea un div, un h3 y una imagen,
    //que esta a su vez recibe la url de la propiedad de la posicion del array en el momento
    // de la iteración, un botón con su eventListener que llama a su función que tenemos 
    // arriba, y le pasamos el div(div3$$) con todo lo anterior de cada iteración
    // Hago appendChild de todo a mi div "tarjeta" en cada iteración y finalmente fuera
    // del bucle dicho div con appenChild a document.body
    const div3$$ = document.createElement('div');
    const h3$$ = document.createElement('h3');
    h3$$.innerText = country.title
    
    const image2$$ = document.createElement('img');
    image2$$.setAttribute('src', country.imgUrl)
    
    const boton2$$ = document.createElement('button');
    boton2$$.innerText = 'Elimina esta foto';
    div3$$.appendChild(h3$$)
    div3$$.appendChild(image2$$)
    div3$$.appendChild(boton2$$)
    div2$$.appendChild(div3$$)

    boton2$$.addEventListener('click', ()=> remove(div3$$))  
}
document.body.appendChild(div2$$)