import React from "react";
import env from "@/lib/env";

const Footer = () => {
    return (
        <>
            <div id="footer" className="z-10 lg:px-8 w-full">
                <div className="flex items-center justify-center h-16 space-x-16">
                    <a href="/" className="text-white">About</a>
                    <a href="" className="text-white">Contact</a>
                    <p>{env.PEXELS_API_KEY}</p>
                </div>
            </div>
        </>
    );
};

export default Footer; 