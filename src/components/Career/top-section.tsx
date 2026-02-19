import React from 'react';

const VenovoxHero = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-[#7a0000] via-[#990000] to-[#b30000] text-white mt-24">
                <div className="container mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 flex items-center py-12 md:py-16">
                        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">

                            {/* Left Content */}
                            <div className="md:w-[55%] text-center md:text-left space-y-6">
                                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                    Shape The Future Of Trust –{" "}
                                    <span className="text-white font-extrabold">Join Our Team!</span>
                                </h1>
                                <p className="text-gray-100 leading-relaxed text-justify">
                                    At VENOVOX, we are passionate about helping businesses make informed decisions through reliable background screening solutions. With branches in four countries and growing, we&apos;re looking for dedicated professionals to join us on this exciting journey and help expand our employee portfolio with credible, talented individuals.
                                </p>
                            </div>

                            <div className="w-full md:w-[40%] flex justify-center md:justify-end">
                                <div className="relative">
                                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white opacity-20 rounded-full blur-lg"></div>
                                    <img
                                        src="/venovoxx-removebg-preview.png"
                                        alt="Join Our Team"
                                        className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VenovoxHero;
