import React from 'react';
import BookCard from '../shared/BookCard';

const getBooks = async () => {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/booksData.json`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
}

const Books = async () => {
    const books: IBook[] = await getBooks();

    return (
        <section className="container mx-auto px-4 my-16">
            {/* Centered Heading Section */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-[#23BE0A] font-semibold text-sm uppercase tracking-widest bg-[#23BE0A]/10 px-4 py-1.5 rounded-full inline-block mb-3">
                    Our Collection
                </span>
                <h1 className="text-3xl md:text-4xl font-bold font-serif text-[#131313] mb-4">
                    Explore Our Popular Books
                </h1>
                <p className="text-gray-600 text-base md:text-sm">
                    Discover amazing stories, timeless classics, and inspiring books from talented authors.
                </p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.slice(0, 6).map((book: IBook) => (
                    <BookCard key={book.bookId} book={book} />
                ))}
            </div>
        </section>
    );
};

export default Books;