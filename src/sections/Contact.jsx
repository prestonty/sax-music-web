import React from "react";

export default function Contact() {
    return (
        <div className="bg-maroon py-16">
            <div className="w-[80%] max-w-3xl mx-auto flex flex-col items-center text-center space-y-8">
                <div className="border-t-2 border-gray-200 w-full mb-6"></div>

                <h3 className="text-3xl md:text-4xl font-semibold text-cream">
                    Feel free to reach out!
                </h3>

                <div className="flex space-x-6 text-lg md:text-xl text-cream">
                    <a
                        href="https://www.facebook.com/share/xqzpxiaTyuD413Mx/?mibextid=LQQJ4d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue transition-colors"
                    >
                        Facebook
                    </a>
                    {/* Add more links here if needed */}
                </div>

                <p className="text-lg md:text-xl text-cream">
                    Have an inquiry? Write to me at:
                </p>

                <div className="text-2xl md:text-3xl font-medium text-cream hover:text-blue transition-colors">
                    <a href="mailto:chantelle.tying@gmail.com">
                        chantelle.tying@gmail.com
                    </a>
                </div>

                <p className="text-sm md:text-sm mt-2 font-semibold text-cream">
                    Developed by Preston Tom-Ying {":)"}
                </p>

                <div className="border-t-2 border-cream w-full mt-8"></div>
            </div>
        </div>
    );
}
