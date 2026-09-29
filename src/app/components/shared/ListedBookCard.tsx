import Image from 'next/image';
import Link from 'next/link';

const ListedBookCard = ({ book }: { book: IBook }) => {
    const {
        bookId,
        bookName,
        author,
        image,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
    } = book;

    return (
        <div className="border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center bg-white mb-6">
            {/* Left Side Image Container */}
            <div className="bg-[#1313130d] rounded-2xl p-6 flex justify-center items-center w-full md:w-[230px] h-[230px] shrink-0">
                <div className="relative w-full h-full max-w-[130px] max-h-[172px]">
                    <Image
                        src={image}
                        alt={bookName}
                        fill
                        priority
                        className="object-contain drop-shadow-md"                    
                    />
                </div>
            </div>

            {/* Right Side Content Container */}
            <div className="flex-1 w-full flex flex-col justify-between">
                <div>
                    {/* Title */}
                    <h2 className="text-2xl font-bold font-serif text-[#131313] mb-2">
                        {bookName}
                    </h2>

                    {/* Author */}
                    <p className="text-gray-600 font-medium text-sm mb-4">
                        By : {author}
                    </p>

                    {/* Tags and Year of Publishing */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
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

                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Year of Publishing: {yearOfPublishing}</span>
                        </div>
                    </div>

                    {/* Publisher and Pages */}
                    <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span>Publisher: {publisher}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Page {totalPages}</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 my-3"></div>

                {/* Bottom Badges and Action Button */}
                <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-[#328EFF]/15 text-[#328EFF] font-medium text-sm px-5 py-2.5 rounded-full">
                        Category: {category}
                    </span>
                    <span className="bg-[#FFAC33]/15 text-[#FFAC33] font-medium text-sm px-5 py-2.5 rounded-full">
                        Rating: {rating}
                    </span>
                    <Link
                        href={`/books/${bookId}`}
                        className="bg-[#23BE0A] hover:bg-[#1fa609] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors ml-auto"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBookCard;