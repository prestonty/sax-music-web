import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
    const navigate = useNavigate();

    return (
        <div className="py-16 bg-maroon">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
                {/* Left Column */}
                <div className="flex flex-col items-center space-y-5 p-4">
                    <div className="relative w-full bg-maroon flex justify-center fade-in2">
                        {/* Centered Card */}
                        <div className="bg-maroon w-[90%] shadow-lg rounded-lg overflow-hidden">
                            <figure className="h-full flex items-center justify-center">
                                <img
                                    src="/images/ProfessionalEnsemblePic.JPG"
                                    alt="Saxophone Ensemble 1"
                                    className="w-full h-auto rounded-t-lg"
                                />
                            </figure>
                        </div>
                    </div>

                    <div className="relative w-full bg-maroon flex justify-center fade-in2">
                        {/* Centered Card */}
                        <div className="bg-maroon w-[90%] shadow-lg rounded-lg overflow-hidden">
                            <figure className="h-full flex items-center justify-center">
                                <img
                                    src="/images/OnStagePic.JPG"
                                    alt="Saxophone Ensemble 2"
                                    className="w-full h-auto rounded-t-lg"
                                />
                            </figure>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col bg-brown text-cream p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            About Me
                        </h2>

                        <p className="text-lg md:text-xl text-cream text-center">
                            Chantelle Tom-Ying is a third-year Classical
                            Saxophone Performance and Life Sciences student at
                            the University of Toronto pursuing double degrees in
                            music performance and science, as well as a Health
                            Applications in Music Certificate. Prior to studying
                            saxophone, Chantelle obtained her grade 10 Royal
                            Conservatory of Music certifications in piano, music
                            history, and theory. She has played with notable
                            ensembles including the Toronto Saxophone
                            Collective, University of Toronto Wind Ensemble,
                            University of Western Symphonic Band, and the
                            Toronto Youth Wind Orchestra. Notably this year, her
                            quartet, where she plays soprano saxophone,
                            performed at the Thursday’s at Noon concert series
                            and Music Oasis series. She currently studies under
                            Professor Wallace Halladay.
                        </p>

                        <button
                            className="btn btn-outline text-cream border-cream hover:bg-cream hover:text-brown transition-all duration-300 py-2 px-4 rounded-lg"
                            onClick={() => navigate("/about")}
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
