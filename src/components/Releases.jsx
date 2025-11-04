const Releases = () => {
   return (
      <div
         id="releases"
         className="bg-[url('/assets/releases-background.png')] w-screen h-[200vh] bg-contain bg-repeat"
      >
         <div className="bg-black/70 w-full h-full flex flex-col items-center">
            <h2 className="italic text-[#FAF9F6] font-bold py-16 text-5xl">
               RECENT{" "}
               <span className="italic text-[#FEE085] font-light">
                  RELEASES
               </span>
            </h2>
            <div id="videos">
               <iframe
                  width="1028"
                  height="540"
                  src="https://www.youtube.com/embed/OinGz723g5Y?si=XrSnprKXnDwPg3zN"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
               ></iframe>
               <div className="flex justify-between my-5">
                  <iframe
                     width="504"
                     height="260"
                     src="https://www.youtube.com/embed/OinGz723g5Y?si=XrSnprKXnDwPg3zN"
                     title="YouTube video player"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     referrerpolicy="strict-origin-when-cross-origin"
                     allowfullscreen
                  ></iframe>
                  <iframe
                     width="504"
                     height="260"
                     src="https://www.youtube.com/embed/OinGz723g5Y?si=XrSnprKXnDwPg3zN"
                     title="YouTube video player"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     referrerpolicy="strict-origin-when-cross-origin"
                     allowfullscreen
                  ></iframe>
               </div>
            </div>
            <div id="spotify">
               <iframe
                  className="w-full h-[380px] rounded-2xl border-0"
                  src="https://open.spotify.com/embed/album/03gpQDNdDpO7sBaw6HmDuh?utm_source=generator"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
               />

               <iframe
                  className="w-full h-[380px] rounded-2xl border-0"
                  src="https://open.spotify.com/embed/album/03gpQDNdDpO7sBaw6HmDuh?utm_source=generator"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
               />
            </div>
         </div>
      </div>
   );
};
export default Releases;
