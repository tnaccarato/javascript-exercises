const getTheTitles = function(books) {
    // Declares an empty array for storing the books
    titles = []
    // Adds each book to the titles array
    for(book of books){
        titles.push(book.title)
    }
    // Returns the titles array
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
