import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"

const Navbar = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };
    return (

        <div className=" w-[100%] fixed  h-[3.5rem] flex justify-center ">
            <div className="h-[100%] text-[#818080bf] w-[50%] lilita-one-regular text-2xl flex items-center justify-between ">
                <div >
                    <h1    onClick={() => scrollToSection('homepage')} className="navbar" >Home</h1>
                </div>
                <div>
                    <h1 onClick={() => scrollToSection('skillspage')} className="  navbar ">Skills</h1>
                </div>
                <div>
                    <h1 onClick={() => scrollToSection('projectspage')} className="  navbar ">Projects</h1>
                </div>

                <div>
                    <h1 onClick={() => scrollToSection('aboutpage')} className="  navbar ">About me</h1>
                </div>
                <motion.div className=" text-[#381919] text-xl ml-3"
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.7}
                    whileHover={{ scale: 1.1 }}
                >
                    <button className=" hover:bg-[#3aff64] bg-[#218b38] p-1 rounded w-[6rem] ">Hire Me!</button>
                </motion.div>
            </div>
        </div>
    );
}

export default Navbar;