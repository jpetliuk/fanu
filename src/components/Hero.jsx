const Hero = () => {
   return (
      <header
         id="hero"
         className="w-dvw h-[90vh] sm:h-dvh flex flex-col items-center justify-between bg-[url('/assets/hero-background.webp')] bg-[10%_42%] bg-cover bg-no-repeat px-10"
      >
         <div className="mt-12">
            <h1 className="text-[#FAF9F6] font-bold text-5xl sm:text-6xl">
               MANUEL FANDIÑO
            </h1>
            <hr className="text-[#FAF9F6]" />
            <h2 className="text-[#FAF9F6] text-xl sm:text-2xl">
               Composer, Sound Designer & Audio Engineer
            </h2>
         </div>
         <p className="italic text-[#FAF9F6] mb-12 text-lg">
            “Pushing the boundaries of storytelling through immersive
            soundscapes”
         </p>
      </header>
   );
};
export default Hero;
