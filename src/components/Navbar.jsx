import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav className="bg-maroon p-4 py-[2rem] font-sans font-medium sticky top-0 z-10">
                <ul className="flex justify-between xl:text-4xl lg:text-4xl sm:text-xl xs:text-md w-full">
                    <li className="lg:ml-[4rem] sm:ml-[0.5rem]">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-cream hover:text-brown"
                        >
                            Chantelle Tom-Ying
                        </button>
                    </li>
                    <div className="flex xl:space-x-[10rem] lg:space-x-[6rem] md:space-x-[5rem] sm:space-x-[2rem] xs:space-x-[0.5rem] xs:mr-[0.4rem] lg:mr-[4rem] sm:sm:ml-[0.5rem]">
                        <li>
                            <button
                                onClick={() => scrollToSection("about")}
                                className="text-cream hover:text-brown"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection("lessons")}
                                className="text-cream hover:text-brown"
                            >
                                Lessons
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="text-cream hover:text-brown"
                            >
                                Contact
                            </button>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
