
var sortByTitle = document.getElementById('sort-by-title'),
    sortByAuthor = document.getElementById('sort-by-author'),
    sortByRating = document.getElementById('sort-by-rating'),
    sortBydate = document.getElementById('sort-by-date'),
    multiAuthor = document.getElementById('multi-author'),
    search = document.getElementById('search-button'),
    doc = document.getElementById('books');


const books = data;

function displayBooks(books){
    doc.innerHTML = "";
    if(books.length > 0){
        for(var i = 0; i < books.length; i++){
            if(books[i].rating == ''){
                books[i].rating = "No rating yet";
            }
            var html =
            "<div class='book-block'>\
                <p><img src='" + books[i].image + "'></p>\
                <div class='details'>\
                    <h3>" + books[i].title + "</h3>\
                    <p>Book by: " + books[i].author + "</p>\
                    <p>Rating: " + books[i].rating + "</p>\
                    <p>Published: " + books[i].releaseDate + "</p>\
                </div>\
            </div>";

            doc.innerHTML += html;
        }
    } else {
        doc.innerHTML = "No matches!";
    }
}


sortByTitle.addEventListener('click', function(){
    var sortedData = books.sort((a, b) => a.title > b.title ?  1 : -1);
    displayBooks(sortedData);
});

sortByAuthor.addEventListener('click', function(){
    var sortedData = books.sort((a, b) => a.author > b.author ?  1 : -1);
    displayBooks(sortedData);
});

sortByRating.addEventListener('click', function(){
    var sortedData = books.sort((a, b) => a.rating < b.rating ?  1 : -1);
    displayBooks(sortedData);
});

sortBydate.addEventListener('click', function(){
    var sortedData = books.sort((a, b) => a.releaseDate > b.releaseDate ?  1 : -1);
    displayBooks(sortedData);
});

multiAuthor.addEventListener('click', function(){
    var sortedData = books.filter(a => a.author.indexOf(',') != -1);
    displayBooks(sortedData);
});

search.addEventListener('click', function(){
    var keyword = document.getElementById('search-input').value.toLowerCase();

    if(keyword){
        var sortedData = books.filter(a => Object.values(a).filter(b => b.toString().toLowerCase().indexOf(keyword) != -1).length > 0);
        displayBooks(sortedData);
     } else {
        alert('Please input a keyword');
     }
});

displayBooks(books);