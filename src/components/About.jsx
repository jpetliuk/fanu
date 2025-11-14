const About = () => {
   return (
      <section
         className="w-screen bg-[url('/assets/about-background.jpg')] bg-[0%_35%] bg-cover bg-no-repeat w-screen"
         id="about"
      >
         <div className="w-full min-h-[700px] pb-15 px-10 bg-[#141414B3]">
            <h2 className="italic pt-16 text-[#FEE085] font-light text-3xl sm:text-4xl">
               ABOUT <span className="italic text-[#FAF9F6] font-bold">ME</span>
            </h2>
            <div className="flex flex-wrap justify-center items-center mt-10 mx-auto gap-20">
               <div className="w-100 justify-end flex">
                  <div className="h-70 sm:h-110 w-100 overflow-hidden flex items-center">
                     <img
                        className="object-cover h-70 sm:h-150 w-120 px-10 sm:px-0"
                        src="./assets/about-photo.webp"
                        alt="manuel fandiño picture"
                     />
                  </div>
               </div>
               <div className="text-justify -mt-10 text-base w-lg sm:min-w-lg">
                  <p className="mb-5">
                     Hi, I'm{" "}
                     <span className="text-[#FEE085] font-medium">FANÜ</span>,
                     an artist from Buenos Aires specializing in{" "}
                     <span className="text-[#FEE085] font-medium">
                        Sound Design
                     </span>
                     ,{" "}
                     <span className="text-[#FEE085] font-medium">
                        Audio Engineering
                     </span>
                     , and{" "}
                     <span className="text-[#FEE085] font-medium">
                        Music Production
                     </span>
                     . I graduated from EMC, a university affiliated with
                     Berklee.
                  </p>
                  <p className="mb-5">
                     I work with{" "}
                     <span className="text-[#FEE085] font-medium">Mixing</span>,{" "}
                     <span className="text-[#FEE085] font-medium">
                        Mastering
                     </span>
                     ,{" "}
                     <span className="text-[#FEE085] font-medium">
                        Composition
                     </span>
                     , and{" "}
                     <span className="text-[#FEE085] font-medium">
                        Music Production
                     </span>{" "}
                     for games and visual content. Before you hire me, I'm happy
                     to provide{" "}
                     <span className="text-[#FEE085] font-medium">
                        Free Feedback
                     </span>{" "}
                     on your track or project. I'm also available for calls or
                     chats if you'd like to dive deeper into your project
                     details.
                  </p>
                  <p>
                     I work across many genres and especially enjoy projects
                     that challenge me creatively. My main tools include{" "}
                     <span className="text-[#FEE085] font-medium">Logic</span>,{" "}
                     <span className="text-[#FEE085] font-medium">
                        Pro Tools
                     </span>
                     ,{" "}
                     <span className="text-[#FEE085] font-medium">Ableton</span>{" "}
                     and{" "}
                     <span className="text-[#FEE085] font-medium">DaVinci</span>
                     . Currently expanding on{" "}
                     <span className="text-[#FEE085] font-medium">Wwise</span>,{" "}
                     <span className="text-[#FEE085] font-medium">Fmod</span>,{" "}
                     <span className="text-[#FEE085] font-medium">
                        Unreal engine
                     </span>{" "}
                     & <span className="text-[#FEE085] font-medium">Unity</span>
                     .
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};
export default About;
