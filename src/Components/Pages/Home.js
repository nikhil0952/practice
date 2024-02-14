import React from "react";
import Navbar from "../smallComponents/Navbar";
import Socialnavbar from "../smallComponents/Socialnavbar";
import Homepage from "./Homepage";
import Skillspage from "./Skillspage";
import Projectpage from "./Projectpage";
import { useMediaQuery } from "react-responsive";
import MobileHomePage from "../mobile/MobileHomePage";
import MobileSkillPage from "../mobile/MobileSkillPage";
import Aboutpage from "./Aboutpage";
import MobileNavBar from "../mobile/MobileNavBar";
import MobileProjectPage from "../mobile/MobileProjectPage";
import MobileAboutPage from "../mobile/MobileAboutPage";

const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 600 });
    const isLaptop = useMediaQuery({ minWidth: 600 });
    return (
        <>
            {isMobile && <MobileNavBar />}
            {isLaptop && <Socialnavbar />}
            {isLaptop && <Navbar />}

            <div className=" flex flex-col bgcolor w-[100%] h-full">
                {isMobile && <MobileHomePage />}
                {isLaptop && <Homepage />}
                {isMobile && <MobileSkillPage />}
                {isLaptop && <Skillspage />}


                {isMobile && <MobileProjectPage/>}
                {isLaptop && <Projectpage />}
                
                {isMobile && <MobileAboutPage/> }
                {isLaptop &&  <Aboutpage />}
               

            </div>
        </>
    );
}

export default Home;