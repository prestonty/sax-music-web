import React, { useEffect, useState } from "react";

export default function Landing() {
    return (
        <div className="flex h-screen bg-maroon">
            {/* Left Column */}
            <div className="flex h-full max-h-screen flex-grow slide-left-right1">
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%", // Set height to 100% to fill the parent
                        maxWidth: "102.55rem",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/images/LandingPortrait.png"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover", // Maintain the aspect ratio
                        }}
                        alt="Chantelle Tom-Ying Portrait"
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(12, 12, 12, 0.05)",
                        }}
                    />
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col w-full h-full">
                {/* Top Brown Rectangle */}
                <div
                    className={`bg-brown text-cream h-[32rem] flex items-center justify-center slide-right-left1`}
                    // ${
                    //     isVisible ? "visible slide-right-left1" : "hidden"
                    // }
                >
                    <div className="font-bold">
                        <h1 className="text-xl xs:text-3xl s:text-4xl md:text-6xl lg:text-8xl xl:text-10xl xs:mb-2 s:mb-6 m:mb-5 lg:mb-8">
                            Chantelle
                        </h1>
                        <h1 className="text-xl xs:text-3xl s:text-4xl md:text-6xl lg:text-8xl xl:text-10xl ml-4 xs:ml-8 s:ml-10 m:ml-14 lg:ml-20 xl:ml-28">
                            Tom-Ying
                        </h1>
                    </div>
                </div>

                {/* Chocolate Rectangle */}
                <div
                    className={`bg-chocolate text-cream flex-grow flex flex-col items-center justify-center text-sm xs:text-sm s:text-md md:text-lg lg:text-2xl xl:text-4xl slide-right-left1`}
                    // ${
                    //     isVisible ? "visible slide-right-left2" : "hidden"
                    // }
                >
                    <div className="flex flex-col items-center justify-center">
                        <p className="mb-4 text-center">
                            University of Toronto Classical Saxophonist
                        </p>
                        <p className="mb-4 text-center">
                            Royal Conservatory of Music Trained Pianist
                        </p>
                        <p className="mb-12 text-center">
                            Educator and Performer
                        </p>
                        <button className="btn btn-outline text-cream border-cream text-center px-12 hover:bg-cream hover:text-brown">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
