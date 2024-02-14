import React from "react";

const Pages = () => {
    return (
        <div className=" h-[100%] flex items-center justify-between">
            <div>
                HOME
            </div>
            <div>
                PROJECTS
            </div>
            <div>
                SKILLS
            </div>
            <div>
                EDUCATION
            </div>
            <div>
                RESUME
            </div>
            <div className=" ml-3">
                <button className=" bg-[#218b38] p-1 rounded w-[6rem] ">Hire Me!</button>
            </div>
        </div>
    );
}

export default Pages;