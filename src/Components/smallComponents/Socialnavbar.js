import React from "react";
import {motion} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
const Socialnavbar = () => {
    return (
        <motion.div className="fixed z-50 social bg-[#fffdfd0f] rounded-xl bottom-0 left-[43%] flex  text-[#fbfafa] h-[5%] mb-2  justify-center items-center "
        initial={{x:"-110vh"}}
        animate={{x:0}}
        
        >
            <div className="flex   w-[10rem] ml-5 mr-5  items-center  h-[20%] justify-around ">
                <div className="socialmedia" >
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className="socialmedia"  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
                <div className="socialmedia" >
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="socialmedia" >
                    <FontAwesomeIcon icon={faXTwitter} />
                </div>
            </div>
        </motion.div>
    );
}

export default Socialnavbar;