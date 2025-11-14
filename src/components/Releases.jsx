const Releases = () => {
   const sample_songs = [
      {
         name: "Sangre - Klave",
         spotify_link:
            "https://open.spotify.com/embed/track/7kCPx2PxgEhgGqnkooHjWJ?utm_source=generator",
         photo: "sangre.webp",
      },
      {
         name: "Creo en Mi - Alturas, Alan Sutton",
         spotify_link:
            "https://open.spotify.com/embed/track/3I4dtugbDqZdKJwFZlUY2u?utm_source=generator",
         photo: "plastico.webp",
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
         photo: "otra_vez.webp",
      },
   ];

   return (
      <section
         id="releases"
         className="bg-[url('/assets/releases-background.webp')] w-screen bg-contain bg-repeat"
      >
         <div className="bg-black/70 w-full h-full flex flex-col items-center">
            <h2 className="italic text-[#FAF9F6] font-bold py-16 text-3xl sm:text-4xl">
               MY{" "}
               <span className="italic text-[#FEE085] font-light">
                  PORTFOLIO
               </span>
            </h2>
            <div
               id="spotify"
               className="flex items-center justify-between mb-5 flex-col sm:flex-row gap-0 md:gap-10"
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

            <div id="videos" className="flex flex-col w-[95vw] items-center">
               <video
                  width="908"
                  height="511"
                  controls
                  loading="lazy"
                  poster="./assets/videos/Nike_Running-poster.png"
                  className="rounded-lg shadow-lg mb-0 sm:mb-5 object-cover"
               >
                  <source
                     src="./assets/videos/Nike-Running_Isn't_Just_Running_by_Manuel_Fandino.webm"
                     type="video/mp4"
                  />
                  Your browser does not support the video tag.
               </video>

               <div className="flex items-center px-0 md:px-10 gap-2 mt-2 md:mt-0 md:gap-5 justify-between">
                  <video
                     controls
                     loading="lazy"
                     poster="./assets/videos/Berry_SD-poster.png"
                     className="rounded-lg shadow-lg aspect-video w-1/2 h-auto object-cover"
                  >
                     <source
                        src="./assets/videos/Berry_SD_teaser.webm"
                        type="video/mp4"
                     />
                     Your browser does not support the video tag.
                  </video>
                  <video
                     controls
                     loading="lazy"
                     poster="./assets/videos/Horror_trailer-poster.png"
                     className="rounded-lg shadow-lg aspect-video w-1/2 h-auto object-cover"
                  >
                     <source
                        src="./assets/videos/Horror_trailer_clip_1.webm"
                        type="video/mp4"
                     />
                     Your browser does not support the video tag.
                  </video>
               </div>
            </div>

            <div
               id="sample_songs"
               className="flex mb-15 mt-5 flex-wrap items-center justify-center gap-5 sm:gap-0"
            >
               {sample_songs.map((song) => (
                  <div className="flex flex-col items-center justify-center scale-100 sm:scale-90 gap-3">
                     <img
                        className="h-70 w-70  duration-300 cursor-pointer"
                        src={`./assets/clients-assets/${song.photo}`}
                        alt={song.name}
                     />
                     <iframe
                        src={song.spotify_link}
                        title="Spotify Player"
                        height="80"
                        width="300"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="rounded-2xl"
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};
export default Releases;
