import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ book }) => {
    if (!book) return null;

    const {
        bookId,
        bookName,
        author,
        image,
        rating,
        category,
        tags
    } = book;

    return (

        <Link href={`/books/${bookId}`} className="block h-full">
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col justify-between h-full bg-white hover:shadow-lg transition-all duration-300">

                {/* Book Cover Image */}
                <div className="bg-[#F3F3F3] rounded-2xl py-8 px-4 flex justify-center items-center h-[230px]">
                    <div className="relative w-full h-full max-h-[166px]">
                        <Image
                            src={image}
                            alt={bookName}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain drop-shadow-sm"                            
                        />
                    </div>
                </div>

                {/* Content Details */}
                <div className="mt-6 flex-grow flex flex-col justify-between">
                    <div>
                        {/* Dynamic Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-[#23BE0A]/10 text-[#23BE0A] text-sm font-semibold px-4 py-1.5 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title & Author */}
                        <h2 className="text-2xl font-bold text-[#131313] font-serif mb-2 line-clamp-1">
                            {bookName}
                        </h2>
                        <p className="text-gray-600 font-medium text-sm mb-4">
                            By : {author}
                        </p>
                    </div>

                    {/* Dashed Border Separator */}
                    <div className="border-t-2 border-dashed border-gray-200 my-4"></div>

                    {/* Category & Rating */}
                    <div className="flex justify-between items-center text-gray-600 font-medium text-sm">
                        <span>{category}</span>
                        <div className="flex items-center gap-1.5 text-gray-700">
                            <span>{Number(rating).toFixed(2)}</span>
                            {/* Star Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="w-5 h-5 text-gray-600"
                                strokeWidth="1.8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.116.486-.425.878-.852.622l-4.773-2.862a.563.563 0 00-.586 0l-4.773 2.862c-.427.256-.968-.136-.852-.622l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.32-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default BookCard;