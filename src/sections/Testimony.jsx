import React from "react";

export default function Testimony() {
    return (
        <div className="bg-maroon py-16">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <h3 className="text-5xl lg:text-6xl text-cream mb-8 font-semibold">
                    Testimony
                </h3>

                <div className="bg-cream p-8 rounded-lg shadow-lg w-[80%] md:w-[60%]">
                    <div className="mb-6">
                        <div className="chat chat-start">
                            <div className="chat-bubble bg-brown text-cream rounded-lg p-4 text-lg font-medium">
                                “Chantelle is an incredible saxophone teacher.
                                Her passion and clear guidance make learning
                                enjoyable and easy. She is able to bring out the
                                potential she sees in others and I’ve improved
                                so much thanks to her patience and expertise. I
                                could not have asked for a better teacher!”
                            </div>
                        </div>
                        <div className="chat chat-start mt-2">
                            <div className="chat-bubble bg-brown text-cream rounded-lg p-4 text-lg font-medium">
                                ^^^ Tristan L, grade 11 student; first alto
                                saxophone chair Toronto Youth Wind Orchestra;
                                principal saxophonist Ontario Provincial Honours
                                Band
                            </div>
                        </div>
                    </div>

                    <div className="chat chat-end mb-2">
                        <div className="chat-bubble bg-brown text-cream rounded-lg p-4 text-lg font-medium">
                            LETS GOOOOO!!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
