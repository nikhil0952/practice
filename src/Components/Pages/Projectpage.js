import React from "react";
import ComponentCrousel from "../smallComponents/ComponentCrousel";
const Projectpage = () => {
    return (
        <div id="projectspage"  className=" h-[100vh] w-[100%] flex  flex-col justify-center items-center bg-black ">
            <div  className="mb-16 text-4xl  lilita-one-regular">
                <h1><span className=" text-[#ff6835] ">{"< "}</span>Projects<span className=" text-[#ff6835] ">{" /> "}</span></h1>
            </div>
            <div className="w-[100%]">
            <ComponentCrousel /> 
            </div>
        </div>
    );
}

export default Projectpage; 