import React from "react";

export default function About() {
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
                        // objectFit: "cover", // You can use cover or contain as needed
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
            <div className="bg-cream">
                {/* <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div> */}

                <div className="flex flex-col items-center border-2 border-red-500">
                    <div className="w-[50%] py-48 border-2 border-blue-500">
                        <p className="text-maroon mb-14 xl:text-xl">
                            Previously Chantelle had the opportunity to study
                            with internationally acclaimed soloists from a
                            number of countries, namely Vincent David, Timothy
                            McAllister, Claude Delangle, Steven Banks, Arno
                            Bornkamp, Simon Diricq, and many more.
                        </p>

                        <p className="text-maroon mb-14 xl:text-xl">
                            This summer, Chantelle was grateful to receive a
                            $10,000 France-Canada grant from the University of
                            Toronto Faculty of Music to travel to France and
                            participate in the Université de Gap Saxophone music
                            academy. There she studied and performed with
                            professors of the Paris Conservatoire, Claude
                            Delange and Nicolas Arsenijevic, as well as
                            professors Mariano Garcia, Sandro Compagnon,
                            Christian Wirth, Joonatan Rautiola, and Philippe
                            Braquart, and renowned pianists Fumi Ito and Cyril
                            Lehn.
                        </p>

                        <p className="text-maroon mb-14 xl:text-xl">
                            Chantelle also had the fortune of participating in
                            the Orford summer academy in Quebec studying under
                            Timothy McAllister with the support of a
                            scholarship. In January she will have the
                            opportunity to perform a concerto in Professor
                            Kenneth Tse’s saxophone masterclass.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
