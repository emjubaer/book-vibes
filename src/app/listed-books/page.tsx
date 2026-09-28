'use client';
import React, { useContext, useState } from 'react';
import { BooksContext } from '../context/BooksContext';
import ListedBookCard from '../components/shared/ListedBookCard';

const ListedBooks = () => {
    const { readBooks, wishList } = useContext(BooksContext);
    const [activeTab, setActiveTab] = useState<'read' | 'wishlist'>('read');
    const [sortBy, setSortBy] = useState<string>('');

    // Dynamic Sort Helper
    const sortBooks = (booksList: any[]) => {
        if (!booksList) return [];
        const books = [...booksList];
        if (sortBy === 'rating') {
            return books.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'pages') {
            return books.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortBy === 'year') {
            return books.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        return books;
    };

    const currentBooks = activeTab === 'read' ? sortBooks(readBooks) : sortBooks(wishList);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Main Header Banner */}
            <div className="bg-[#1313130d] rounded-2xl py-8 text-center mb-8">
                <h1 className="text-3xl font-bold font-serif text-[#131313]">Books</h1>
            </div>

            {/* Sort Dropdown Button */}
            <div className="flex justify-end-safe mb-10">
                <div className="dropdown dropdown-bottom">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn bg-[#23BE0A] hover:bg-[#1fa609] text-white font-semibold border-none px-6 rounded-xl normal-case"
                    >
                        Sort By
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
                    >
                        <li className='hover:bg-gray-100 hover:text-gray-700 rounded-md'><a onClick={() => setSortBy('rating')}>Rating</a></li>
                        <li className='hover:bg-gray-100 hover:text-gray-700 rounded-md'><a onClick={() => setSortBy('pages')}>Number of pages</a></li>
                        <li className='hover:bg-gray-100 hover:text-gray-700 rounded-md'><a onClick={() => setSortBy('year')}>Publisher year</a></li>
                    </ul>
                </div>
            </div>

            {/* Tabs Header */}
            <div className="flex border-b border-gray-200 mb-8">
                <button
                    onClick={() => setActiveTab('read')}
                    className={`py-3 px-6 text-md font-medium border-b-2 transition-colors ${
                        activeTab === 'read'
                            ? 'border-[#23BE0A] text-[#131313] font-bold border-t border-x rounded-t-lg border-b-white bg-white'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                >
                   Read Books ({readBooks.length})
                </button>
                <button
                    onClick={() => setActiveTab('wishlist')}
                    className={`py-3 px-6 text-md font-medium border-b-2 transition-colors ${
                        activeTab === 'wishlist'
                            ? 'border-[#23BE0A] text-[#131313] font-bold border-t border-x rounded-t-lg border-b-white bg-white'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Wishlist Books ({wishList.length})
                </button>
            </div>

            {/* Book Cards Content Area */}
            <div>
                {currentBooks && currentBooks.length > 0 ? (
                    currentBooks.map((book) => (
                        <ListedBookCard key={book.bookId} book={book} />
                    ))
                ) : (
                    <div className="text-center py-12 text-gray-500 text-lg">
                        No books found in this list.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListedBooks;