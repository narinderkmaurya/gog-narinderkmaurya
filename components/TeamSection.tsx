import Profile from "./Profile"
import linkedin from "@/public/in.svg"
import iit from "@/public/iit.svg"
import placeholder from "@/public/profile.svg"
import Marquee from "react-fast-marquee"
import placeholder2 from "@/public/1.svg"
import placeholder3 from "@/public/2.svg"
import placeholder4 from "@/public/3.svg"
const TeamSection = () => {
  return (
    <div className="items-center flex justify-center flex-col min-h-screen px-4">
      <h1 className="text-center md:text-[50px]  text-[30px] font-bold text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#37ED81] via-[#3DA5BD] to-[#905BEC] mb-[40px]">
        Our IITian Team
      </h1>
      <p className="mb-[80px] text-center font-[500] dark:text-[white] text-[#101010] md:text-[18px] text-[15px]">
        A Team Of IITians to Boost your Tech Career to New Heights. The Curriculum Team is an experienced group of data analyst instructors
      </p>

      <Marquee className="gap-6" pauseOnHover>
        <div className="flex gap-6">
          <Profile degree="BTech- IIT Roorkee, Mtech- IIT Bombay " name="Sandeep Kumar" role="Lead Student Experience" iitImg={iit} linkedinImg={linkedin} placeholderImg={placeholder} review="I chose Geeks of Gurukul because of its collaborative and supportive culture and the team- oriented approach where instructors and students work together. Geeks of Gurukul provides a supportive and learning environment which will help you to stay motivated and achieve your learning goals." />
          <Profile degree="BTech- IIT Roorkee, Mtech- IIT Bombay " name="Sandeep Kumar" role="Lead Student Experience" iitImg={iit} linkedinImg={linkedin} placeholderImg={placeholder2} review="I chose Geeks of Gurukul because of its collaborative and supportive culture and the team- oriented approach where instructors and students work together. Geeks of Gurukul provides a supportive and learning environment which will help you to stay motivated and achieve your learning goals." />
          <Profile degree="BTech- IIT Roorkee, Mtech- IIT Bombay " name="Sandeep Kumar" role="Lead Student Experience" iitImg={iit} linkedinImg={linkedin} placeholderImg={placeholder3} review="I chose Geeks of Gurukul because of its collaborative and supportive culture and the team- oriented approach where instructors and students work together. Geeks of Gurukul provides a supportive and learning environment which will help you to stay motivated and achieve your learning goals." />
          <Profile degree="BTech- IIT Roorkee, Mtech- IIT Bombay " name="Sandeep Kumar" role="Lead Student Experience" iitImg={iit} linkedinImg={linkedin} placeholderImg={placeholder} review="I chose Geeks of Gurukul because of its collaborative and supportive culture and the team- oriented approach where instructors and students work together. Geeks of Gurukul provides a supportive and learning environment which will help you to stay motivated and achieve your learning goals." />
          <Profile degree="BTech- IIT Roorkee, Mtech- IIT Bombay " name="Sandeep Kumar" role="Lead Student Experience" iitImg={iit} linkedinImg={linkedin} placeholderImg={placeholder} review="I chose Geeks of Gurukul because of its collaborative and supportive culture and the team- oriented approach where instructors and students work together. Geeks of Gurukul provides a supportive and learning environment which will help you to stay motivated and achieve your learning goals." />
          <Profile degree="BTech- IIT Roorkee, Mtech- IIT Bombay " name="Sandeep Kumar" role="Lead Student Experience" iitImg={iit} linkedinImg={linkedin} placeholderImg={placeholder2} review="I chose Geeks of Gurukul because of its collaborative and supportive culture and the team- oriented approach where instructors and students work together. Geeks of Gurukul provides a supportive and learning environment which will help you to stay motivated and achieve your learning goals." />
          <Profile degree="BTech- IIT Roorkee, Mtech- IIT Bombay " name="Sandeep Kumar" role="Lead Student Experience" iitImg={iit} linkedinImg={linkedin} placeholderImg={placeholder3} review="I chose Geeks of Gurukul because of its collaborative and supportive culture and the team- oriented approach where instructors and students work together. Geeks of Gurukul provides a supportive and learning environment which will help you to stay motivated and achieve your learning goals." />
          <Profile degree="BTech- IIT Roorkee, Mtech- IIT Bombay " name="Sandeep Kumar" role="Lead Student Experience" iitImg={iit} linkedinImg={linkedin} placeholderImg={placeholder} review="I chose Geeks of Gurukul because of its collaborative and supportive culture and the team- oriented approach where instructors and students work together. Geeks of Gurukul provides a supportive and learning environment which will help you to stay motivated and achieve your learning goals." />
        </div>
      </Marquee>
    </div>
  )
}

export default TeamSection