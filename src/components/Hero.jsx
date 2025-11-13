const Hero = () => {
   return (
      <header
         id="hero"
         className="w-dvw min-h-[100vh] max-h-[100vh] h-[100vh] flex flex-col items-center justify-between bg-[url('/assets/hero-background.webp')] bg-[20%_42%] bg-cover bg-no-repeat px-5"
      >
         <div
            className="
            absolute inset-x-0 top-0 h-1/2 sm:h-1/5 
            bg-gradient-to-b 
            from-[#000000b5] 
            to-transparent
        "
         ></div>
         <div
            className="
            absolute inset-x-0 bottom-0 h-1/4 sm:h-1/5 
            bg-gradient-to-t 
            from-black 
            to-transparent
        "
         ></div>
         <div className="mt-12 z-10">
            <h1 className="text-[#FAF9F6] font-bold text-5xl sm:text-6xl">
               MANUEL FANDIÑO
            </h1>
            <hr className="text-[#FAF9F6]" />
            <h2 className="text-[#FAF9F6] text-xl sm:text-2xl">
               Composer, Sound Designer & Audio Engineer
            </h2>
         </div>
         <p className="italic text-[#FAF9F6] mb-8 text-lg z-10">
            “Pushing the boundaries of storytelling through immersive
            soundscapes”
         </p>

         <div className="hidden md:block fixed bottom-10 z-50 right-15">
            <a
               href="#contact"
               className="flex flex-col items-center justify-center relative group cursor-pointer"
            >
               <span
                  className="
            absolute bottom-full right-1/2 translate-x-1/2 
            mb-2 px-3 py-1 bg-gray-800 text-white text-sm font-semibold rounded-lg 
            opacity-0 invisible 
            transition-all duration-300 
            group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2
        "
               >
                  Contact
               </span>

               <img
                  src="./assets/floating.jpeg"
                  alt="Floating Manu"
                  className="h-20 w-20 rotate-y-180 rounded-full object-cover shadow-2xl shadow-black"
               />
            </a>
         </div>
      </header>
   );
};
export default Hero;
