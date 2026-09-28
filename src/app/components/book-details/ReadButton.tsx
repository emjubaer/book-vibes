'use client';
import BooksContext from '@/app/context/BooksContext';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify/unstyled';

interface ReadButtonProps {
    book: IBook;
}

const ReadButton = ({ book }: ReadButtonProps) => {
    const { readBooks, setReadBooks } = useContext(BooksContext);

    const handleReadClick = () => {

        console.log('Book marked as read:', book);
        setReadBooks([...readBooks, book]);
        // alert(`Book marked as read: ${book.bookName}`);
        toast.success('Book marked as read', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <button onClick={handleReadClick} className="btn bg-white hover:bg-gray-100 text-black border-2 border-gray-300 font-semibold px-7 rounded-xl min-h-0 h-12 normal-case">
            Read
        </button>
    );
};

export default ReadButton;