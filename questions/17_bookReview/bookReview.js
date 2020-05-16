class BookReview {
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.notes = [];
        this.rating = 0;

    }

    addNotes(page, note){
        if (this.notes[page]) {
            this.notes[page] += ' ' + note;
        } else {
            this.notes[page] = note;
        }
        console.log(this.notes[15]);
    }

    addRating(rating){
        if (rating > 5) {
            throw '';
        }
        this.rating = rating;
    }
}
module.exports = { BookReview };
