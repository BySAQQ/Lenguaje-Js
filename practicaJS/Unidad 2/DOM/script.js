//Manipulacion del DOM 

// Acceder a un elemento por su ID
let varId = document.getElementById('title'); // La funcion getElementById captura lo que exista en el ID llamado 'title'

// Acceder a un elemento por su Class
let varClass = document.getElementsByClassName('content'); // Pasara lo mismo que en lo anterior pero ahora lo realizara con la clase

//Modifcar los elementos

//cambiar el contenido del ID
varId.textContent = 'Hola Mundo JS!'; //con la propiedad textContent puedo cambiar el contenido del ID

//cambiar el estilo del ID
varId.style.color   = 'blue';

//Agrear una nueva clase al element
varId.classList.add('big-title');