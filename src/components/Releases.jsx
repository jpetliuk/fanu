const Releases = () => {
   const sample_songs = [
      {
         name: "Sangre - Klave",
         spotify_link:
            "https://open.spotify.com/embed/track/7kCPx2PxgEhgGqnkooHjWJ?utm_source=generator",
         photo: "sangre.png",
      },
      {
         name: "Creo en Mi - Alturas, Alan Sutton",
         spotify_link:
            "https://open.spotify.com/embed/track/3I4dtugbDqZdKJwFZlUY2u?utm_source=generator",
         photo: "plastico.png",
      },

      {
         name: "Tan Mal - Fanü",
         spotify_link:
            "https://open.spotify.com/embed/track/5Ya8wNoNe7nWPWmoDYCnHM?utm_source=generator",
         photo: "tan_mal.png",
      },

      {
         name: "Otra Vez - Klave",
         spotify_link:
            "https://open.spotify.com/embed/track/66tUIwWi0hCmJaU8BP3C6Y?utm_source=generator",
         photo: "otra_vez.jpg",
      },
   ];

   return (
      <div
         id="releases"
         className="bg-[url('/assets/releases-background.png')] w-screen bg-contain bg-repeat"
      >
         <div className="bg-black/70 w-full h-full flex flex-col items-center">
            <h2 className="italic text-[#FAF9F6] font-bold py-16 text-4xl">
               RECENT{" "}
               <span className="italic text-[#FEE085] font-light">
                  RELEASES
               </span>
            </h2>
            <div
               id="spotify"
               className="flex items-center justify-between mb-5 gap-10"
            >
               <div>
                  <h2 className="text-base font-thin text-[#FEE085] mb-[-8px]">
                     COMPOSITION
                  </h2>
                  <iframe
                     className="w-full h-[380px] rounded-2xl border-0 scale-90"
                     src="https://open.spotify.com/embed/playlist/54p2rfy9UlW1AFcYzkcI4O?utm_source=generator&theme=0"
                     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                     allowFullScreen
                     loading="lazy"
                     title="Spotify Player"
                  />
               </div>
               <div>
                  <h2 className="text-base font-thin text-[#FAF9F6] mb-[-8px]">
                     MIXING
                  </h2>
                  <iframe
                     className="w-full h-[380px] rounded-2xl border-0 scale-90"
                     src="https://open.spotify.com/embed/playlist/7ANRlQIjT3JiMflk08syoy?utm_source=generator&theme=0"
                     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                     allowFullScreen
                     loading="lazy"
                     title="Spotify Player"
                  />
               </div>
            </div>
            <div id="videos" className="flex flex-col items-center">
               <iframe
                  width="908"
                  height="511"
                  src="https://www.youtube.com/embed/OinGz723g5Y?si=XrSnprKXnDwPg3zN"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
               ></iframe>
               <div className="flex justify-between gap-5 my-5">
                  <iframe
                     width="504"
                     height="284"
                     src="https://www.youtube.com/embed/OinGz723g5Y?si=XrSnprKXnDwPg3zN"
                     title="YouTube video player"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     referrerpolicy="strict-origin-when-cross-origin"
                     allowfullscreen
                  ></iframe>
                  <iframe
                     width="504"
                     height="284"
                     src="https://www.youtube.com/embed/OinGz723g5Y?si=XrSnprKXnDwPg3zN"
                     title="YouTube video player"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     referrerpolicy="strict-origin-when-cross-origin"
                     allowfullscreen
                  ></iframe>
               </div>
            </div>
            <div
               id="sample_songs"
               className="flex max-w-6xl mb-15 mt-5 flex-wrap items-center justify-center gap-y-2.5 -gap-x-10"
            >
               {sample_songs.map((song) => (
                  <div className="flex flex-col items-center -mx-3 justify-center">
                     <img
                        className="h-60 w-60  duration-300 cursor-pointer"
                        src={`./assets/clients-assets/${song.photo}`}
                        alt={song.name}
                     />
                     <iframe
                        src={song.spotify_link}
                        title="Spotify Player"
                        height="80"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full rounded-2xl scale-85"
                     />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
export default Releases;
