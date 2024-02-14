import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faBullseye, faServer, faNetworkWired, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact, faJava, faEnvira, faNodeJs, faInstalod } from "@fortawesome/free-brands-svg-icons";

const MobileSkillPage = () => {
    return (
        <div id="mobileskillpage" className=" h-[140vh] flex flex-col justify-around items-center bg-black w-[100%]">
            
            <div className=" text-2xl mt-10 lilita-one-regular">
                <h1><span className=" text-[#ff6835] ">{"< "}</span>My TechStacks And Skills<span className=" text-[#ff6835] ">{" /> "}</span></h1>
            </div>


            <div className="flex flex-col w-[90%] justify-between items-center" >
                <div className=" flex flex-col lilita-one-regular text-center text-xl bg-white  rounded-xl">
                    <div className="text-[#390707] p-2">
                        <span className=" text-[#ff6835]"   >{"< "}</span>WebDevelopment<span className=" text-[#ff6835]">{" />"}</span>
                    </div>
                    <div className="flex flex-wrap justify-around m-2 items-center">
                        <div className="  skillMobile  text-[#ff6835]   border-[#ff6835]  ">
                            <FontAwesomeIcon className="h-[70%] " icon={faHtml5} />
                            <p>HTML</p>
                        </div>
                        <div className=" skillMobile text-[#4384fd] border-[#4384fd]  ">
                            <FontAwesomeIcon className="h-[70%]" icon={faCss3Alt} />
                            <p>CSS</p>
                        </div>
                        <div className="skillMobile text-[#ddc53c]  border-[#ddc53c] ">
                            <FontAwesomeIcon className="h-[70%]" icon={faJs} />
                            <p>JavaScript</p>
                        </div>

                        <div className="skillMobile text-[#3c6cdd]  border-[#3c6cdd]">
                            <FontAwesomeIcon className="h-[70%]" icon={faReact} />
                            <p>React</p>
                        </div>

                        <div className="skillMobile text-[#3e9e2b]  border-[#3e9e2b] xl ">
                            <FontAwesomeIcon className="h-[70%]" icon={faInstalod} />

                            <p>Tailwind</p>
                        </div>

                        <div className=" skillMobile text-[#235c78]  border-[#235c78] ">
                            <FontAwesomeIcon className="h-[70%]" icon={faReact} />
                            <p>ExpressJs</p>
                        </div>


                        <div className=" skillMobile text-[#dd3cc8]  border-[#dd3cc8] ">
                            <FontAwesomeIcon className="h-[70%]" icon={faNodeJs} />

                            <p>Node js</p>
                        </div>

                        <div className="skillMobile text-[#363636] border-[#363636] ">
                            <FontAwesomeIcon className="h-[70%]" icon={faEnvira} />

                            <p>MongoDB</p>
                        </div>

                        <div className="skillMobile text-[#dd3c47]  border-[#dd3c47] ">
                            <FontAwesomeIcon className="h-[70%]" icon={faReact} />
                            <p>Flowbite</p>
                        </div>



                    </div>
                </div>
            </div>

            <div className="w-[90%]  flex flex-col lilita-one-regular text-center text-xl bg-white rounded-xl ">
                <div className="text-[#390707] p-2">
                    <span className=" text-[#ff6835]"   >{"< "}</span>Languages<span className=" text-[#ff6835]">{" />"}</span>
                </div>
                <div className="flex flex-wrap justify-around  items-center">
                    <div className="flex flex-wrap justify-around ml-3 mr-3 mb-3 items-center">
                        <div className="skillMobile text-[#dd3c47] border-[#dd3c47]">
                            <FontAwesomeIcon className="h-[70%]" icon={faJava} />

                            <p>Java</p>
                        </div>
                        <div className="skillMobile text-[#dd3c47]  border-[#dd3c47]  ">
                            <FontAwesomeIcon className="h-[70%]" icon={faDatabase} />

                            <p>DSA</p>
                        </div>
                        <div className="skillMobile text-[#dd3c47]  border-[#dd3c47] ">
                            <FontAwesomeIcon className="h-[70%]" icon={faBullseye} />

                            <p>OOPS</p>
                        </div>
                    </div>
                </div>



            </div>

            <div className="w-[90%]  flex flex-col lilita-one-regular text-center text-xl bg-white rounded-xl ">
                <div className="text-[#390707] p-2">
                    <span className=" text-[#ff6835]"   >{"< "}</span>Other Subjects<span className=" text-[#ff6835]">{" />"}</span>
                </div>
                <div className="flex flex-wrap justify-around  items-center">
                    <div className="skillMobile text-[#dd3c47] border-[#dd3c47]">
                        <FontAwesomeIcon className="h-[70%]" icon={faServer} />
                        <p>DBMS</p>
                    </div>
                    <div className="skillMobile text-[#dd3c47]  border-[#dd3c47]  ">
                        <FontAwesomeIcon className="h-[70%]" icon={faNetworkWired} />

                        <p className=" text-base">CN</p>
                    </div>
                    <div className="skillMobile text-[#dd3c47]  border-[#dd3c47] ">
                        <FontAwesomeIcon className="h-[70%]" icon={faDesktop} />

                        <p className=" text-base">SD</p>
                    </div>
                </div>



            </div>

        </div>
    );
}

export default MobileSkillPage