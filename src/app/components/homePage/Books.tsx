import React from 'react';
import BookCard from '../shared/BookCard';

const getBooks = async () => {  
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = await res.json();
    return data;
}

const Books = async () => {
    const books = await getBooks();
    return (
        
        <section className="container mx-auto px-4 my-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {books.map((book, index) => (
                <BookCard key={index} book={book} />
            ))}
            
        </section>
    );
};

export default Books;