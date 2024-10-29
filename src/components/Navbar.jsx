import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="bg-maroon p-4 py-[2rem] font-sans font-medium">
                <ul className="flex justify-between xl:text-4xl lg:text-4xl sm:text-xl xs:text-md w-full">
                    <li className="lg:ml-[4rem] sm:ml-[0.5rem]">
                        <Link to="/" className="text-cream hover:text-brown">
                            Chantelle Tom-Ying
                        </Link>
                    </li>
                    <div className="flex xl:space-x-[10rem] lg:space-x-[6rem] md:space-x-[5rem] sm:space-x-[2rem] xs:space-x-[0.5rem] xs:mr-[0.4rem] lg:mr-[4rem] sm:sm:ml-[0.5rem]">
                        <li>
                            <Link
                                to="/about"
                                className="text-cream hover:text-brown"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/lessons"
                                className="text-cream hover:text-brown"
                            >
                                Lessons
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="text-cream hover:text-brown"
                            >
                                Contact
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Navbar;
