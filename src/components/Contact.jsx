const Contact = () => {
   return (
      <section
         id="contact"
         className="bg-black flex flex-col gap-10 items-center justify-center py-20 px-10 w-screen"
      >
         <h2 className="italic text-[#FEE085] font-light text-3xl sm:text-4xl">
            CONTACT{" "}
            <span className="italic text-[#FAF9F6] font-bold">INFO</span>
         </h2>
         <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center">
            <img
               className="h-50 w-50 rounded-full bg-center bg-cover bg-no-repeat"
               alt="manuel fandino profile picture"
               src="/assets/contact-photo.png"
            />
            <div className="text-center md:text-left">
               <p className="w-100 sm:px-0 px-10 mb-10 text-base text-[#FAF9F6]">
                  For any enquires or to schedule a quick meeting please e-mail
                  me or send me a whatsapp at:
               </p>
               <p className="text-[#FEE085] mb-2.5 italic cursor-pointer underline underline-offset-2 text-base">
                  manuelfandinio@gmail.com
               </p>
               <p className="text-[#FEE085] italic cursor-pointer underline underline-offset-2 text-base">
                  (+54) 11 30187582
               </p>
            </div>
         </div>
      </section>
   );
};
export default Contact;
