import React from "react";
import MobileCard from "../smallComponents/MobileCard";

const MobileProjectPage = () => {
    return (
        <div id="mobileprojectpage" className="  w-[100%] bg-[#0b0b0b] ">

            <div className=" mt-5 mb-5 text-4xl text-center  lilita-one-regular">
                <h1><span className=" text-[#ff6835] ">{"< "}</span>Projects<span className=" text-[#ff6835] ">{" /> "}</span></h1>
            </div>
            <div className=" flex flex-col justify-around items-center h-[200vh]">
                <MobileCard/>
                <MobileCard />
                <MobileCard />
            </div>
        </div>
    );
}

export default MobileProjectPage;