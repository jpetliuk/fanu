const Clients = () => {
   const images = [
      "alturas.webp",
      "sangre.webp",
      "plastico.webp",
      "berry-1.webp",
      "otra_vez.webp",
      "berry-2.webp",
      "frio.webp",
      "tan_mal.png",
      "dead_inside.webp",
      "no_perdamo_el_tiempo.webp",
   ];

   return (
      <section
         id="Clients"
         className="bg-black flex flex-col gap-10 items-center justify-center w-screen py-20"
      >
         <h2 className="italic text-[#FEE085] text-3xl sm:text-4xl font-bold">
            CLIENTS
         </h2>

         <div className="flex items-center sm:mb-4 flex-wrap justify-center sm:mt-12 mt-5">
            <img
               src="./assets/clients-assets/logos/warner-chappell-logo.png"
               alt="Warner Chappell Music Logo"
               className="h-15 w-40 sm:h-20 sm:w-50 object-contain hover:scale-105 duration-300 cursor-pointer"
            />
            <img
               src="./assets/clients-assets/logos/klap-logo.png"
               alt="Klap Logo"
               className="h-15 w-40 sm:h-20 sm:w-50 object-contain hover:scale-105 duration-300 cursor-pointer"
            />
            <img
               src="./assets/clients-assets/logos/tempos-logo.png"
               alt="Tempos Logo"
               className="h-15 w-60 sm:h-20 sm:w-65 object-contain hover:scale-105 duration-300 cursor-pointer"
            />
         </div>
         <div className="flex flex-wrap max-w-7xl items-center justify-center gap-5">
            {images.map((image) => (
               <img
                  className="h-40 w-40 sm:h-50 sm:w-50 hover:scale-105 duration-300 cursor-pointer"
                  src={`./assets/clients-assets/${image}`}
                  alt="client project"
               />
            ))}
         </div>
      </section>
   );
};
export default Clients;
