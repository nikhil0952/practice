import React from "react";

const Aboutpage = () => {
    return (
        <div id="aboutpage" className="h-[100vh] flex justify-center items-center">
            <div className=" h-[60%] flex flex-col justify-around ">
                
                <h1 className=" text-4xl lilita-one-regular text-center">
                <span className=" text-[#ff6835]"   >{"< "}</span>Know Who I'M<span className=" text-[#ff6835]">{" />"}</span>
                </h1>
                <p className=" text-3xl namejava text-[#fbc530] ">
                    Hi, I am Nikhil Walia from Himachal Pradesh, India.
                </p>
                <div className=" flex flex-col justify-between h-[40%]">
                    <h1 className=" text-3xl lilita-one-regular " >
                    <span className=" text-[#ff6835]"   >{"< "}</span>Education<span className=" text-[#ff6835]">{" />"}</span>
                    </h1>
                    <p className=" text-lg  namejava">I am currently a 3rd year student of BE COMPUTER SCIENCE in Chitkara University.</p>
                    <p className=" text-lg  namejava text-[#fbc530]"><span className=" text-[#ff6835]">{"> "}</span>Current CGPA : 9.7</p>
                    <p className=" text-lg  namejava mt-2" >I completed my 10th and 12th from King George Royal Public school, Mandi, HP, India.</p>
                    <p className=" text-lg  namejava text-[#fbc530] "><span className=" text-[#ff6835]">{"> "}</span>10th : 93.28%</p>
                    <p className=" text-lg  namejava text-[#fbc530]" ><span className=" text-[#ff6835]">{"> "}</span>12th : 94%</p>
                </div>
                <div className=" flex flex-col justify-between h-[20%]">
                    <h1 className=" text-2xl lilita-one-regular">
                    <span className=" text-[#ff6835]"   >{"< "}</span>Apart from coding, some other activities that I love to do!<span className=" text-[#ff6835]">{" />"}</span>
                        </h1>
                    <h1 className=" text-lg  namejava">.. Cricket</h1>
                    <h1 className=" text-lg  namejava" >.. Chess</h1>
                    <h1 className=" text-lg  namejava">.. Dance</h1>
                </div>


            </div>
        </div>
    );
}

export default Aboutpage;