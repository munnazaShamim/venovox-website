import React from 'react';

const VenovoxCredibilitySection = () => {
    return (
        <div className="bg-gradient-to-b from-[#7a0000] via-[#990000] to-[#b30000] text-white py-16 md:py-20">
            <div className="container mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-8">
                
                {/* Decorative Red Accent Block */}
                <div className="hidden md:block absolute bottom-0 left-0 w-32 h-16 bg-white/20 rounded-tr-2xl"></div>

                <div className="relative z-10 flex items-center">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
                        
                        {/* Left Image */}
                        <div className="w-full md:w-[40%] flex justify-center md:justify-start">
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/30 rounded-full blur-md"></div>
                                <img
                                    src="/images/career1-photoroom.webp"
                                    alt="Handshake with Tech Overlay"
                                    className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="md:w-[55%] text-center md:text-left space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Why Join Us? Because{" "}
                                <span className="text-white font-extrabold">Credibility Is Key!</span>
                            </h2>
                            <p className="text-gray-100 leading-relaxed text-justify">
                                At VENOVOX, we believe trust is earned and we help you build it from the ground up. 
                                By joining us, you&apos;re choosing a partner committed to transparency, accuracy, and integrity. 
                                Whether it&apos;s background screening, due diligence, or compliance checks, our work speaks for itself. 
                                We don’t just deliver reports — we deliver peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VenovoxCredibilitySection;
