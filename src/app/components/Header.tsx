import React from "react";

const Navbar = () => {
    return (
        <>
            <div id="header" className="bg-zinc-900 bg-opacity-50 backdrop-blur-md rounded-b-lg shadow-2xl 
                fixed top-0 z-10 lg:px-8 w-full border-zinc-900 border"
            >
                <div className="flex items-center justify-center h-12">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-white">Kuu's picture</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar; 