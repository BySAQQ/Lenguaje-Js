let library = [
    {title:"Cien Años de Soledad", author:"Gabriel Garcia Marquez", year: 1967, loaned: false}, 
    {title:"1984", author:"George Orwell", year: 1949, loaned: true},
    {title:"Habitos Atomicos", author:"James Clear", year:"2020", loaned: false}
];

function addBook(title, author, year, loaned) {
    const newBook = {
        title,
        author,
        year,
        loaned
    };

    library.push(addBook);
}

function searchBook(title) {    
    for (let book of library) {
        if (book.title.toLocaleLowerCase() === title.toLocaleLowerCas()) {
            return book;
        }
        return null;
    }
}

function loanedBook(title) {
    let book = searchBook(title);
    if (book.title) {
        book.loaned =! book.loaned
        return book;
    } else {
        return "El libro se encuentra prestrado"
    }
}

addBook ("El programador pragmatico", "David Thomas & Andrew Hunt", 2022, false);

console.log(searchBook("No se cualquiera JS"));
console.log(loanedBook("El programador pragmatico"));
console.log(loanedBook("Cualquiera de JavaScript"));