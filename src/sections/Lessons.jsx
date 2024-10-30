import React from "react";

export default function Lessons() {
    return (
        <div className="bg-maroon py-16">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <h3 className="text-5xl lg:text-6xl text-cream mb-8 font-semibold">
                    Lessons
                </h3>

                <div className="bg-brown p-8 rounded-lg shadow-lg w-[80%] md:w-[60%]">
                    <p className="text-cream text-lg leading-6 mb-4">
                        Offering Piano and Saxophone Lessons!!
                    </p>

                    <p className="text-cream text-lg leading-6 mb-4">
                        Lessons may take place online or in-person. Rates are
                        determined by the nature of the lesson. Please feel free
                        to reach out for more information {":)"}
                    </p>
                </div>
            </div>
        </div>
    );
}
