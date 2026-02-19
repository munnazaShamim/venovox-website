import React from 'react';

const FunTeamSection = () => {
    return (
        <section className="relative bg-[#b30000] text-white overflow-hidden min-h-[450px]">
            {/* Top Red Box */}
            <div className="absolute top-0 right-0 w-24 h-20 md:w-32 md:h-28 bg-red-700 z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

                    <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                        <h2 className="text-4xl md:text-6xl font-bold text-white py-2">
                            Be Part of a <br />
                            <span className="md:ml-12">Credible</span>
                            <br className="hidden md:block" /> and Fun Team!
                        </h2>
                        <p className="text-gray-100 text-justify [text-justify:inter-word] hyphens-none max-w-xl mx-auto lg:mx-0">
                            We’re all about creating a supportive and engaging workplace
                            where your ideas are heard and your efforts are recognized.
                        </p>

                        <div className="mt-4">
                            <div className="bg-white text-[#b30000] inline-block px-4 py-2 md:px-6 md:py-4 text-base md:text-lg font-bold">
                                ESG & Corporate Responsibility
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative w-full flex justify-center lg:justify-end py-6 md:py-8">
                        <img
                            src="/funteam1.png"
                            alt="Team Member"
                            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full mx-auto lg:ml-auto mt-8 md:mt-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunTeamSection;
