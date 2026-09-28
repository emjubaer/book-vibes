import React from 'react';
import BookCard from '../components/shared/BookCard';


const getBooks = async () => {
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = await res.json();
    return data;
}

const page = async () => {
    const books = await getBooks();
    return (

        <section className="container mx-auto px-4 my-16">
            {/* Centered Heading Section */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h1 className="text-3xl md:text-4xl font-bold font-serif text-[#131313] mb-4">
                    Explore Our All Books
                </h1>
                <p className="text-gray-600 text-base md:text-sm">
                    Discover amazing stories, timeless classics, and inspiring books from talented authors.
                </p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book: IBook) => (
                    <BookCard key={book.bookId} book={book} />
                ))}
            </div>
        </section>
    );
};

export default page;