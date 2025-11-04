const Hero = () => {
   return (
      <header
         id="hero"
         className="w-dvw h-dvh flex flex-col items-center justify-between bg-[url('/assets/hero-background.jpg')] bg-[0%_42%] bg-cover bg-no-repeat"
      >
         <div className="mt-12">
            <h1 className="text-6xl font-bold text-[#FAF9F6]">
               MANUEL FANDIÑO
            </h1>
            <hr className="text-[#FAF9F6]" />
            <h2 className="text-2xl text-[#FAF9F6]">
               Composer, Sound Designer & Audio Engineer
            </h2>
         </div>
         <p className="text-lg mb-12 italic text-[#FAF9F6]">
            “Pushing the boundaries of storytelling through immersive
            soundscapes”
         </p>
      </header>
   );
};
export default Hero;
