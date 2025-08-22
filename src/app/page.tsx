import Headre from "@/component/Headre";
import PromptComponent from "@/component/promitAi";
// import Videotext, { VideoText } from "@/component/TextVideo";
// import PromitList from "@/component/PromitList";
export default function Home() {
  return (
    <div className=" relative flex items-center justify-center flex-col h-screen w-full bg-gradient-to-r from-purple-500 to-pink-500 "  >
      <header className="absolute top-0 left-0 w-full">
        <Headre/>
      </header>
 
      <div className="absolute  bottom-0 mx-auto   flex justify-center w-full  flex-col items-center">
        {/* <PromitList/> */}
       
         
          <PromptComponent/>
      </div>
       
      </div>
     

  );
}
