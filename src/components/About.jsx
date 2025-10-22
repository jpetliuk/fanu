const About = () => {
   return (
      <section
         className="w-dvw h-[800px] bg-[url('/assets/about-background.jpg')] bg-[0%_35%] bg-cover bg-no-repeat"
         id="about"
      >
         <div className="w-full h-full bg-[#141414B3]">
            <h2 className="italic pt-16 text-[#FEE085] font-light text-5xl">
               ABOUT <span className="italic text-[#FAF9F6] font-bold">ME</span>
            </h2>
            <div className="flex justify-center items-center bg-blue-40 mt-10 w-3/4 mx-auto gap-20">
               <div className="w-2xl justify-end flex">
                  <div className="h-110 w-100 overflow-hidden flex items-center">
                     <img
                        className="object-cover h-150 w-120"
                        src="/assets/about-photo.png"
                        alt="manuel fandiño picture"
                     />
                  </div>
               </div>
               <p className="text-justify text-lg w-2xl">
                  <p>
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
                  <p>
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
                     </span>
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
                     that challenge me creatively. My main tools include Logic,
                     Pro Tools, Ableton, and DaVinci.
                  </p>
               </p>
            </div>
         </div>
      </section>
   );
};
export default About;
