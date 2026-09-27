import React from 'react';

const BookDetailsCard = ({ book }: { book: IBook | undefined }) => {
    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div>
            
        </div>
    );
};

export default BookDetailsCard;