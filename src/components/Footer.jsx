import { SocialIcon } from "react-social-icons";

const Footer = () => {
   return (
      <footer
         id="footer"
         className="grid grid-cols-1 sm:grid-cols-3 pt-2 pb-5 sm:py-0 gap-2 w-screen bg-[#292929] min-h-14"
      >
         <div className="col-span-full order-3 sm:order-none sm:col-span-1 my-auto ">
            Copyright © 2025 Fanü
         </div>

         <div className="col-span-full order-1 sm:order-none sm:col-span-1 my-auto">
            <SocialIcon
               network="youtube"
               url="https://www.youtube.com/@fanu.oficial"
               target="_blank"
               bgColor="transparent"
               fgColor="#FAF9F6"
               className="cursor-pointer"
            />
            <SocialIcon
               network="linkedin"
               url="https://www.linkedin.com/in/manuel-fandiño-936b0230a/"
               target="_blank"
               bgColor="transparent"
               fgColor="#FAF9F6"
               className="cursor-pointer"
            />
            <SocialIcon
               network="instagram"
               url="https://www.instagram.com/fanu__u"
               target="_blank"
               bgColor="transparent"
               fgColor="#FAF9F6"
               className="cursor-pointer"
            />
            <SocialIcon
               network="spotify"
               url="https://open.spotify.com/artist/1P6m13dxleiNeRRmooeqEo?si=LvvOnF1RT0eNmxk0nEAQkA"
               target="_blank"
               bgColor="transparent"
               fgColor="#FAF9F6"
               className="cursor-pointer"
            />
         </div>

         <div className="col-span-full order-2 sm:order-none sm:col-span-1 my-auto">
            Powered by Fanü
         </div>
      </footer>
   );
};
export default Footer;
