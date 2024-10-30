import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

    return (
        <div className="font-sans font-medium">
            {/* Landing title page */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "90%", // 54.688rem
                }}
            >
                <img
                    src="/images/PianoPic.jpg"
                    className="fade-in1"
                    style={{
                        width: "100%",
                        height: "100%", // 54.688rem
                    }}
                    alt="Piano Portrait"
                />

                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(12, 12, 12, 0.44)", // 44% opacity with #0C0C0C
                    }}
                >
                    <h1 className="text-cream text-10xl lg:text-12xl sm:text-7xl mt-16 lg:mt-[30rem] md:mt-[20rem] sm:mt-[12rem] ml-16 lg:ml-24 sm:ml-8 slide-left-right1">
                        About
                    </h1>
                </div>
            </div>

            {/* Content Starts here */}
            {/* Content Section */}
            <div className="bg-maroon py-16">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="w-[80%] md:w-[60%] bg-cream p-8 rounded-lg shadow-lg">
                        <p className="text-maroon mb-4 xl:text-lg text-lg leading-6">
                            Previously, Chantelle had the opportunity to study
                            with internationally acclaimed soloists from various
                            countries, including Vincent David, Timothy
                            McAllister, Claude Delangle, Steven Banks, Arno
                            Bornkamp, Simon Diricq, and many more.
                        </p>

                        <p className="text-maroon mb-4 xl:text-lg text-lg leading-6">
                            This summer, Chantelle was grateful to receive a
                            $10,000 France-Canada grant from the University of
                            Toronto Faculty of Music to travel to France and
                            participate in the Université de Gap Saxophone music
                            academy. There she studied and performed with
                            professors from the Paris Conservatoire, Claude
                            Delange and Nicolas Arsenijevic, as well as
                            professors Mariano Garcia, Sandro Compagnon,
                            Christian Wirth, Joonatan Rautiola, and Philippe
                            Braquart, along with renowned pianists Fumi Ito and
                            Cyril Lehn.
                        </p>

                        <p className="text-maroon mb-4 xl:text-lg text-lg leading-6">
                            Chantelle also had the fortune of participating in
                            the Orford summer academy in Quebec, studying under
                            Timothy McAllister with the support of a
                            scholarship. In January, she will have the
                            opportunity to perform a concerto in Professor
                            Kenneth Tse’s saxophone masterclass.
                        </p>

                        <div className="flex flex-col items-center">
                            <button
                                className="btn btn-outline text-chocolate border-chocolate hover:bg-brown hover:text-cream transition-all duration-300 py-2 px-4 rounded-lg"
                                onClick={() => navigate("/")}
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
