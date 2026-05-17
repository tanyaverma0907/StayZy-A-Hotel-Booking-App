// import React from "react";
// import Title from "./Title";
// import { assets, exclusiveOffers } from "../assets/assets";

// const ExclusiveOffers = () => {
//   return (
//     <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30 bg-gray-100">
//       {/* Title and View All */}
//       <div className="flex flex-col md:flex-row items-center justify-between w-full">
//         <Title
//           align="left"
//           title="Exclusive Offers"
//           subtitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
//         />
//         <button className="group flex items-center gap-2 font-medium text-primary cursor-pointer max-md:mt-8">
//           View All Offers
//           <img
//             src={assets.arrowIcon}
//             alt="arrow-icon"
//             className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
//           />
//         </button>
//       </div>

//       {/* Offer Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-12 w-full">
//         {exclusiveOffers.map((item) => (
//           <div
//             key={item._id}
//             className="group relative h-80 p-6 flex flex-col justify-end text-white rounded-xl bg-no-repeat bg-cover bg-center shadow-lg transition-transform hover:scale-105"
//             style={{ backgroundImage: `url(${item.image})` }}
//           >
//             {/* Discount Badge */}
//             <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-semibold rounded-full shadow-md">
//               {item.priceOff}% OFF
//             </p>

//             {/* Offer Content */}
//             <div className="bg-black/40 p-4 rounded-lg w-full">
//               <p className="text-xl font-playfair font-semibold">
//                 {item.title}
//               </p>
//               <p className="text-sm mt-1">{item.description}</p>
//               <p className="text-xs text-white/70 mt-2">
//                 Expires {item.expiryDate}
//               </p>
//               <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 text-white">
//                 View Offers
//                 <img
//                   src={assets.arrowIcon}
//                   alt="arrow-icon"
//                   className="invert w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
//                 />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExclusiveOffers;




import React, { useEffect, useState, useRef } from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffers = () => {
  // Intersection Observer State
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target); // Ek baar reveal hone ke baad freeze rakhein
        }
      },
      {
        threshold: 0.15, // Jab 15% section screen par dikhe tab trigger ho
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        /* Initial State: Section elements hidden down below */
        .reveal-node {
          opacity: 0;
          transform: translateY(35px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        /* Active State: When section enters user viewport */
        .reveal-triggered .reveal-node {
          opacity: 1;
          transform: translateY(0);
        }

        /* Subtle Luxury Soft Overlay Backdrop for Cards */
        .luxury-gradient-overlay {
          background: linear-gradient(to top, rgba(15, 15, 17, 0.92) 0%, rgba(15, 15, 17, 0.6) 50%, rgba(0, 0, 0, 0.1) 100%);
        }
      `}</style>

      <div
        ref={containerRef}
        className={`flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-24 pb-32 bg-zinc-50 transition-all duration-300 ${
          isIntersecting ? "reveal-triggered" : ""
        }`}
      >
        {/* Node 1: Title and View All Row */}
        <div 
          className="reveal-node flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-6"
          style={{ transitionDelay: isIntersecting ? "100ms" : "0ms" }}
        >
          <div className="flex-1">
            <Title
              align="left"
              title="Exclusive Offers"
              subtitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
            />
          </div>
          
          <button className="group shrink-0 flex items-center gap-2.5 px-6 py-3 border border-zinc-200 bg-white text-zinc-800 text-xs font-bold tracking-wider uppercase rounded-full shadow-xs hover:bg-zinc-900 hover:text-white hover:border-zinc-900 active:scale-[0.98] transition-all duration-300 cursor-pointer max-md:mt-4">
            View All Offers
            <img
              src={assets.arrowIcon}
              alt="arrow-icon"
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>
        </div>

        {/* Node 2: Offer Cards Grid Framework */}
        <div 
          className="reveal-node grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-14 w-full"
          style={{ transitionDelay: isIntersecting ? "300ms" : "0ms" }}
        >
          {exclusiveOffers.map((item, index) => (
            <div
              key={item._id || index}
              className="group relative h-96 p-6 flex flex-col justify-end text-white rounded-3xl overflow-hidden border border-zinc-200/40 bg-no-repeat bg-cover bg-center shadow-md hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer"
              style={{ 
                backgroundImage: `url(${item.image})`,
                // Staggered stagger delay direct child elements ko animation smoothness dene ke liye
                transitionDelay: `${index * 50}ms`
              }}
            >
              {/* Premium Luxury Gradient Tint (Replaced old flat black/40 strip) */}
              <div className="absolute inset-0 luxury-gradient-overlay z-0 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Floating Discount Badge - Top Left */}
              <div className="absolute top-5 left-5 z-10 bg-amber-500 text-zinc-950 text-[11px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-md shadow-amber-500/10">
                {item.priceOff}% OFF
              </div>

              {/* Offer Content Block */}
              <div className="relative z-10 w-full transform group-hover:translate-y-[-4px] transition-transform duration-300 ease-out">
                <h3 className="text-xl font-serif font-medium text-white tracking-wide leading-tight group-hover:text-amber-400 transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-zinc-300 text-xs font-normal mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Horizontal Divider Line inside card */}
                <div className="h-[1px] w-full bg-white/10 my-4" />

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold block">Limited Validity</span>
                    <span className="text-[11px] font-medium text-amber-400/90 mt-0.5">Expires {item.expiryDate}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors duration-200">
                    Claim Offer
                    <img
                      src={assets.arrowIcon}
                      alt="arrow-icon"
                      className="invert w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExclusiveOffers;