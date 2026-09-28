import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assets/book.ico"

const Navbar = () => {
    return (
        <div className="bg-[#F3F3F3] shadow-sm sticky top-0 z-50">
            <div className="navbar bg-base-100 container mx-auto py-2 px-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pr-2">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg gap-2">
                            <li>
                                <Link href="/" className="border border-[#23BE0A] text-[#23BE0A] font-semibold">
                                    Home
                                </Link>
                            </li>
                            <li><Link href="/books" className="text-gray-600">Books</Link></li>
                            <li><Link href="/listed-books" className="text-gray-600">Listed Books</Link></li>
                            <li><Link href="/pages-to-read" className="text-gray-600">Pages to Read</Link></li>
                        </ul>
                    </div>

                    {/* Brand Name */}
                    <div className="flex items-center gap-2">
                        <Image src={logo} alt="Logo" width={30} height={30} className="mr-2" />
                        <Link href="/" className="text-2xl font-bold text-black tracking-tight">
                            Book Vibe
                        </Link>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 text-base font-medium items-center">
                        <li>
                            <Link href="/" className="border border-[#23BE0A] text-[#23BE0A] font-semibold px-4 py-2 rounded-lg hover:bg-transparent hover:border-[#23BE0A]">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/books" className="text-gray-600 hover:text-black hover:bg-transparent">
                                 Books
                            </Link>
                        </li>
                        <li>
                            <Link href="/listed-books" className="text-gray-600 hover:text-black hover:bg-transparent">
                                Listed Books
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages-to-read" className="text-gray-600 hover:text-black hover:bg-transparent">
                                Pages to Read
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="navbar-end gap-3">
                    <button className="btn bg-[#23BE0A] hover:bg-[#1fa609] text-white font-semibold border-none px-6 rounded-lg normal-case min-h-0 h-11">
                        Sign In
                    </button>
                    <button className="btn bg-[#59C6D2] hover:bg-[#4bb5c1] text-white font-semibold border-none px-6 rounded-lg normal-case min-h-0 h-11">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Navbar;