"use client";
import React, { createContext, useState } from 'react';

interface BooksContextType {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishList: IBook[];
    setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
}
// export const BooksContext = createContext({})
export const BooksContext = createContext<BooksContextType>({
    readBooks: [],
    setReadBooks: () => {},
    wishList: [],
    setWishList: () => {},
});

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishList, setWishList] = useState<IBook[]>([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishList,
    };

    return (
        <BooksContext.Provider value={sharedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksContext;