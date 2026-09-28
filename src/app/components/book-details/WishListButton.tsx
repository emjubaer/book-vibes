'use client';
import BooksContext from '@/app/context/BooksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import ReadButton from './ReadButton';

interface WishListButtonProps {
    book: IBook;
}

const WishListButton = ({ book }: WishListButtonProps) => {
    const { setWishList } = useContext(BooksContext);

    const handleWishListClick = () => {

        console.log('Book marked as wishlisted:', book);
        setWishList((currentBooks) => [...currentBooks, book]);
        // alert(`Book marked as read: ${book.bookName}`);
        toast.success('Book marked as wishlisted');
    }

    return (
        <button onClick={handleWishListClick} className="btn bg-[#59C6D2] hover:bg-[#4bb5c1] text-white font-semibold border-none px-7 rounded-xl min-h-0 h-12 normal-case">
            Wishlist
        </button>
    );
};

export default WishListButton;