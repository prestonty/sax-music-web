import React from "react";

export default function AboutMe() {
    return (
        <div className="grid grid-cols-2 h-screen">
            {/* Left Column */}
            <div className="flex flex-col h-full items-center">
                <div className="relative w-full h-full bg-cream py-5 flex justify-center">
                    {/* Centered Card */}
                    <div className="card bg-maroon w-[90%] shadow-xl">
                        <figure className="p-4 h-full flex items-center justify-center">
                            <img
                                src="/images/ProfessionalEnsemblePic.JPG"
                                alt="Saxophone Ensemble 1"
                                className="rounded-xl"
                            />
                        </figure>
                    </div>
                </div>

                <div className="relative w-full h-full bg-cream py-5 flex justify-center">
                    {/* Centered Card */}
                    <div className="card bg-maroon w-[90%] shadow-xl">
                        <figure className="p-4 h-full flex items-center justify-center">
                            <img
                                src="/images/OnStagePic.JPG"
                                alt="Saxophone Ensemble 2"
                                className="rounded-xl"
                            />
                        </figure>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col h-full bg-brown text-cream">
                <div className="flex flex-col items-center justify-center px-4 xl:px-16 py-16 h-full">
                    <h2 className="my-20 xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl">
                        About Me
                    </h2>

                    <p className="mb-14 mx-2 lg:mx-10 xl:mx-16 xl:text-3xl">
                        Chantelle Tom-Ying is a third-year Classical Saxophone
                        Performance and Life Sciences student at the University
                        of Toronto pursuing double degrees in music performance
                        and science, as well as a Health Applications in Music
                        Certificate. Prior to studying saxophone, Chantelle
                        obtained her grade 10 Royal Conservatory of Music
                        certifications in piano, music history, and theory. She
                        has played with notable ensembles including the Toronto
                        Saxophone Collective, University of Toronto Wind
                        Ensemble, University of Western Symphonic Band, and the
                        Toronto Youth Wind Orchestra. Notably this year, her
                        quartet, where she plays soprano saxophone, performed at
                        the Thursday’s at Noon concert series and Music Oasis
                        series. She currently studies under Professor Wallace
                        Halladay.
                    </p>

                    <button className="btn btn-outline text-cream border-cream text-center hover:bg-cream hover:text-brown">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}
