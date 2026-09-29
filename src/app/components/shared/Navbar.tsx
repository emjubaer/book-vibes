'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from "@/assets/book.ico";

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Books', href: '/books' },
        { name: 'Listed Books', href: '/listed-books' },
        { name: 'Read Books', href: '/read-books' },
    ];

    return (
        <div className="bg-[#F3F3F3] shadow-sm sticky top-0 z-50">
            <div className="navbar bg-base-100 container mx-auto py-2 px-2">

                {/* Left */}
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden pr-2"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#f8f1f1] rounded-box z-[100] mt-3 w-52 p-2 shadow-lg gap-2"
                        >
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;

                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={
                                                isActive
                                                    ? 'bg-[#23BE0A] text-white font-semibold rounded-md'
                                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-md'
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={30}
                            height={30}
                            className="mr-2"
                        />

                        <Link
                            href="/"
                            className="text-2xl font-semibold md:font-bold text-black tracking-tight"
                        >
                            Book Vibe
                        </Link>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 text-base font-medium items-center">

                        {navItems.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={
                                            isActive
                                                ? 'bg-[#23BE0A] text-white font-semibold px-4 py-2 rounded-lg'
                                                : 'text-gray-600 hover:text-black hover:bg-gray-100 px-4 py-2 rounded-lg'
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}

                    </ul>
                </div>

                {/* Buttons */}
                <div className="navbar-end gap-3">
                    <button className="btn bg-[#23BE0A] hover:bg-[#1fa609] text-white font-semibold border-none px-6 rounded-lg normal-case min-h-0 h-11">
                        Sign In
                    </button>

                    <button className="btn bg-[#59C6D2] hover:bg-[#4bb5c1] text-white font-semibold border-none px-4 md:px-6 rounded-lg normal-case min-h-0 h-11">
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;