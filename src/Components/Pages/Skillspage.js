import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faBullseye, faServer, faNetworkWired, faDesktop} from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact ,faJava, faEnvira, faNodeJs,faInstalod} from "@fortawesome/free-brands-svg-icons";
const Skillspage = () => {
    return (
        <div id="skillspage" className=" h-[110vh] flex flex-col justify-center items-center  bg-black w-[100%]">
            <div className="mb-16 text-4xl  lilita-one-regular">
                <h1><span className=" text-[#ff6835] ">{"< "}</span>My TechStacks And Skills<span className=" text-[#ff6835] ">{" /> "}</span></h1>
            </div>


            <div className="flex  w-[100%] justify-around" >
                <div className=" flex flex-col lilita-one-regular text-center text-2xl bg-white w-[30%] rounded-xl h-[65vh]">
                    <div className="text-[#390707] h-[10%] p-2">
                        <span className=" text-[#ff6835]"   >{"< "}</span>WebDevelopment<span className=" text-[#ff6835]">{" />"}</span>
                    </div>
                    <div className="flex h-[90%] flex-wrap justify-around  items-center">
                        <div className="skill text-[#ff6835]  border-[#ff6835]">
                            <FontAwesomeIcon className="h-[70%]" icon={faHtml5} />
                            <p>HTML</p>
                        </div>
                        <div className=" skill text-[#4384fd] border-[#4384fd]  ">
                            <FontAwesomeIcon className="h-[70%]" icon={faCss3Alt} />
                            <p>CSS</p>
                        </div>
                        <div className="skill text-[#ddc53c]  border-[#ddc53c] ">
                            <FontAwesomeIcon className="h-[70%]" icon={faJs} />
                            <p>JavaScript</p>
                        </div>

                        <div className="skill text-[#3c6cdd]  border-[#3c6cdd]">
                            <FontAwesomeIcon className="h-[70%]" icon={faReact} />
                            <p>React</p>
                        </div>

                        <div className="skill text-[#3e9e2b]  border-[#3e9e2b] xl ">
                            <FontAwesomeIcon className="h-[70%]" icon={faInstalod} />
                            
                            <p>Tailwind</p>
                        </div>

                        <div className=" skill text-[#235c78]  border-[#235c78] ">
                            <FontAwesomeIcon className="h-[70%]" icon={faReact} />
                            <p>Express js</p>
                        </div>


                        <div className=" skill text-[#dd3cc8]  border-[#dd3cc8] ">
                            <FontAwesomeIcon className="h-[70%]" icon={faNodeJs} />
                           
                            <p>Node js</p>
                        </div>

                        <div className="skill text-[#363636] border-[#363636] ">
                            <FontAwesomeIcon className="h-[70%]" icon={faEnvira} />
                            
                            <p>MongoDB</p>
                        </div>

                        <div className="skill text-[#dd3c47]  border-[#dd3c47] ">
                            <FontAwesomeIcon className="h-[70%]" icon={faReact} />
                            <p>Flowbite</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-between w-[30%]" >
                    <div className="w-[100%] h-[200px] justify-between flex flex-col lilita-one-regular text-center text-2xl bg-white rounded-xl ">
                        <div className="text-[#390707] p-2">
                            <span className=" text-[#ff6835]"   >{"< "}</span>Languages<span className=" text-[#ff6835]">{" />"}</span>
                        </div>
                        <div className="flex flex-wrap justify-around ml-3 mr-3 mb-3 items-center">
                            <div className="skill text-[#dd3c47] border-[#dd3c47]">
                                <FontAwesomeIcon className="h-[70%]" icon={faJava}  />
                            
                                <p>Java</p>
                            </div>
                            <div className="skill text-[#dd3c47]  border-[#dd3c47]  ">
                                <FontAwesomeIcon className="h-[70%]" icon={faDatabase} />
                                
                                <p>DSA</p>
                            </div>
                            <div className="skill text-[#dd3c47]  border-[#dd3c47] ">
                                <FontAwesomeIcon className="h-[70%]" icon={faBullseye} />
                                
                                <p>OOPS</p>
                            </div>
                        </div>

                    </div>


                    <div className="w-[100%] h-[30vh] flex flex-col justify-around lilita-one-regular text-center text-2xl bg-white rounded-xl ">
                        <div className="text-[#390707] p-2">
                            <span className=" text-[#ff6835]"   >{"< "}</span>Other Subjects<span className=" text-[#ff6835]">{" />"}</span>
                        </div>
                        <div className="flex flex-wrap justify-around ml-3 mr-3 mb-3 items-center">
                            <div className="skill text-[#dd3c47] border-[#dd3c47]">
                                <FontAwesomeIcon className="h-[70%]" icon={faServer} />
                               
                                <p>DBMS</p>
                            </div>
                            <div className="skill text-[#dd3c47]  border-[#dd3c47]  ">
                                <FontAwesomeIcon className="h-[70%]" icon={faNetworkWired} />
                                
                                <p className=" text-base">Computer Networks</p>
                            </div>
                            <div className="skill text-[#dd3c47]  border-[#dd3c47] ">
                                <FontAwesomeIcon className="h-[70%]" icon={faDesktop} />
                               
                                <p className=" text-base">System Design</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skillspage;