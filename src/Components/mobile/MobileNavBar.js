import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faHouse, faCode,faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
const MobileNavBar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className=" h-[3.5rem] w-[95%] left-[2.5%] flex justify-center  rounded-xl bg-[#1e1d1d] fixed bottom-2">
            <div className="w-[90%] h-[100%] text-2xl flex justify-around items-center text-[#f8f5f5]">
                <div >
                    <FontAwesomeIcon  onClick={() => scrollToSection('mobilehomepage')} icon={faHouse} />
                </div>
                <div>
                    <FontAwesomeIcon onClick={() => scrollToSection('mobileskillpage')} icon={faCode} />
                </div>
                <div>
                    <FontAwesomeIcon onClick={() => scrollToSection('mobileprojectpage')} icon={faFreeCodeCamp} />
                </div>
                <div>
                    <FontAwesomeIcon onClick={() => scrollToSection('mobileaboutpage')} icon={faAddressCard} />
                </div>

            </div>
        </div>
    );
}

export default MobileNavBar;