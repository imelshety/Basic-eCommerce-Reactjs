import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <header className="bg-white border-b-2 shadow-sm ">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <a className="block text-teal-600" href="/">
                                <img
                                    className="h-8"
                                    src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg"
                                />
                            </a>
                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <Link
                                            className="text-black transition hover:text-gray-500/75"
                                            to="/about"
                                        >
                                            About
                                        </Link>
                                    </li>

                                    <li>
                                        <a
                                            className="text-black transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Careers
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-black transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            History
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-black transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Services
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-black transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Projects
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-black transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <div className="flex items-center gap-4">
                                <div className="block md:hidden">
                                    <button
                                        className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

        </>
    );
}

export default Header;