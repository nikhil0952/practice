import React from "react";
import { motion } from "framer-motion"
import Untitled from "../../Untitled.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const MobileHomePage = () => {
    const handleDownload = () => {
        // Path to the file in the public directory
        const filePath = process.env.PUBLIC_URL + '/Resume_Nikhil_Walia.pdf';
        // Create a URL for the file
        const fileURL = process.env.PUBLIC_URL + filePath;

        // Create an anchor element
        const a = document.createElement('a');
        a.href = fileURL;
        a.download = filePath.substring(filePath.lastIndexOf('/') + 1); // Extract filename from the path

        // Append the anchor element to the body
        document.body.appendChild(a);

        // Programmatically trigger a click on the anchor element
        a.click();

        // Remove the anchor element from the body
        document.body.removeChild(a);
    };
    return (
        <div id="mobilehomepage" className="flex flex-col flex-wrap h-[100vh]  justify-center items-center ">
            <motion.div className="  h-52 w-52 ">
                <motion.img
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    src={Untitled} alt="Your Image Alt Text" className="rounded-full" />
            </motion.div>

            <motion.div className=" mt-16 text-3xl flex justify-between items-center  name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Hi, I'm &nbsp;<span className=" underline ">Nikhil Walia</span>
                <motion.div className=" ml-2 text-5xl"
                    whileHover={{
                        translateX: [-5, 10, -5, 5, -5], // Alternating translateY values

                        transition: { duration: 1, ease: 'linear', loop: Infinity },
                    }}
                >👋</motion.div>
            </motion.div>

            <div className="mt-4">
                <motion.h1 className=" font-bold namejava text-center text-2xl text-[#fbc530]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Java And Fullstack Developer in India
                </motion.h1>
            </div>

            <div className=" flex flex-col mt-16 w-[90%] font-bold justify-between items-center">
                <button

                onClick={handleDownload}

                    className=" w-[100%] rounded h-14 bg-[#ff6835] flex justify-center items-center">
                    <FontAwesomeIcon className="mr-2 text-xl" icon={faDownload} /> Resume
                </button>
                
                <button


                    className=" w-[100%] mt-3 rounded h-14 bg-[#171236] flex justify-center items-center">
                    <FontAwesomeIcon className="mr-2 text-xl" icon={faGithub} /> My projects
                </button>
                 
            </div>
        </div>
    );
}

export default MobileHomePage;