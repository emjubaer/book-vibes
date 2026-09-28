import React from 'react';
import Image from 'next/image';
import ReadButton from '@/app/components/book-details/ReadButton';

interface IBook {
    bookId: number;
    bookName: string;
    author: string;
    image: string;
    review: string;
    totalPages: number;
    rating: number;
    category: string;
    tags: string[];
    publisher: string;
    yearOfPublishing: number;
}

interface BookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getBooks = async (): Promise<IBook[]> => {
    const res = await fetch('http://localhost:3000/booksData.json', {
        cache: 'no-store'
    });
    const data = await res.json();
    return data;
};

const BookDetailsPage = async ({ params }: BookDetailsPageProps) => {
    const { id } = await params;
    const books: IBook[] = await getBooks();
    const book = books.find((b: IBook) => b.bookId === Number(id));

    if (!book) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Book Not Found</h2>
                <p className="text-gray-500 mt-2">Could not find details for book ID: {id}</p>
            </div>
        );
    }

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
    } = book;

    return (
        <section className="container mx-auto px-4 py-8 lg:py-12">
            {/* Single Grid Container with Same Height Stretch */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                
                {/* Left Side: Book Cover Container  */}
                <div className="bg-[#1313130d] rounded-2xl p-8 lg:p-12 flex justify-center items-center h-full min-h-[450px]">
                    <div className="relative w-full h-full max-w-[300px] min-h-[380px]">
                        <Image
                            src={image}
                            alt={bookName || "Book Cover"}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-contain drop-shadow-xl"                           
                        />
                    </div>
                </div>

                {/* Right Side: Book Details Information */}
                <div className="flex flex-col justify-between py-2 space-y-4">
                    <div>
                        {/* Title */}
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-[#131313] mb-3">
                            {bookName}
                        </h1>

                        {/* Author */}
                        <p className="text-gray-600 font-medium text-lg">
                            By : {author}
                        </p>

                        {/* Category */}
                        <div className="border-y border-gray-200 py-3 my-4">
                            <span className="text-gray-700 font-medium text-lg">
                                {category}
                            </span>
                        </div>

                        {/* Review */}
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base my-4">
                            <strong className="text-black font-bold">Review : </strong>
                            {review}
                        </p>

                        {/* Tags */}
                        <div className="flex items-center gap-3 py-2">
                            <span className="font-bold text-black text-sm">Tag</span>
                            <div className="flex flex-wrap gap-2">
                                {tags?.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className="bg-[#23BE0A]/10 text-[#23BE0A] font-semibold text-sm px-4 py-1.5 rounded-full"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-gray-200 my-4"></div>

                        {/* Metadata Specs */}
                        <div className="space-y-3 text-sm md:text-base max-w-md">
                            <div className="grid grid-cols-2">
                                <span className="text-gray-500">Number of Pages:</span>
                                <span className="font-bold text-black">{totalPages}</span>
                            </div>
                            <div className="grid grid-cols-2">
                                <span className="text-gray-500">Publisher:</span>
                                <span className="font-bold text-black">{publisher}</span>
                            </div>
                            <div className="grid grid-cols-2">
                                <span className="text-gray-500">Year of Publishing:</span>
                                <span className="font-bold text-black">{yearOfPublishing}</span>
                            </div>
                            <div className="grid grid-cols-2">
                                <span className="text-gray-500">Rating:</span>
                                <span className="font-bold text-black">{rating}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pt-4">
                        <ReadButton  book={book} />

                        <button className="btn bg-[#59C6D2] hover:bg-[#4bb5c1] text-white font-semibold border-none px-7 rounded-xl min-h-0 h-12 normal-case">
                            Wishlist
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BookDetailsPage;