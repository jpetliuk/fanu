import { SocialIcon } from "react-social-icons";

const Footer = () => {
   return (
      <footer
         id="footer"
         className="flex justify-between items-center bg-[#292929] h-16 px-10"
      >
         <div className="">Copyright © 2025 Fanü</div>
         <div className="flex items-center justify-center">
            <SocialIcon
               network="youtube"
               url="https://linkedin.com/in/couetilc"
               target="_blank"
               bgColor="transparent"
               fgColor="#FAF9F6"
               className="cursor-pointer"
            />
            <SocialIcon
               network="linkedin"
               url="https://linkedin.com/in/couetilc"
               target="_blank"
               bgColor="transparent"
               fgColor="#FAF9F6"
               className="cursor-pointer"
            />
            <SocialIcon
               network="instagram"
               url="https://linkedin.com/in/couetilc"
               target="_blank"
               bgColor="transparent"
               fgColor="#FAF9F6"
               className="cursor-pointer"
            />
            <SocialIcon
               network="spotify"
               url="https://linkedin.com/in/couetilc"
               target="_blank"
               bgColor="transparent"
               fgColor="#FAF9F6"
               className="cursor-pointer"
            />
         </div>
         <div className="">Powered by Fanü</div>
      </footer>
   );
};
export default Footer;
