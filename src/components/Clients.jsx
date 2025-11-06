const Clients = () => {
   const images = [
      "alturas.png",
      "sangre.png",
      "plastico.png",
      "berry-1.jpg",
      "otra_vez.jpg",
      "berry-2.jpg",
      "frio.png",
      "tan_mal.png",
      "dead_inside.jpg",
      "no_perdamo_el_tiempo.png",
   ];

   return (
      <section
         id="Clients"
         className="bg-black flex flex-col gap-10 items-center justify-center p-20"
      >
         <h2 className="italic text-[#FEE085] text-4xl font-bold">CLIENTS</h2>

         <div className="flex items-center mb-4 mt-12">
            <div className="h-20 w-50 bg-[url('/assets/clients-assets/logos/warner-chappell-logo.png')] bg-center bg-fill bg-no-repeat hover:scale-105 duration-300 cursor-pointer" />
            <div className="h-20 w-50 bg-[url('/assets/clients-assets/logos/klap-logo.png')] bg-center bg-fill bg-no-repeat hover:scale-105 duration-300 cursor-pointer" />
            <div className="h-20 w-65 bg-[url('/assets/clients-assets/logos/tempos-logo.png')] bg-center bg-fill bg-no-repeat hover:scale-105 duration-300 cursor-pointer" />
         </div>
         <div className="grid grid-cols-5 gap-5">
            {images.map((image) => (
               <img
                  className="h-50 w-50 hover:scale-105 duration-300 cursor-pointer"
                  src={`./assets/clients-assets/${image}`}
                  alt="client project"
               />
            ))}
         </div>
      </section>
   );
};
export default Clients;
