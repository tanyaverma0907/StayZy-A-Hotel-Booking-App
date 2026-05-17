// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FeaturedDestination = () => {
//   const navigate = useNavigate();

//   const [rooms, setRooms] = useState([]);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [activeTab, setActiveTab] = useState("All");
//   const [wishlist, setWishlist] = useState([]);

//   const tabs = ["All", "Beach", "Mountain", "City", "Heritage"];

//   console.log("Fetched rooms:", rooms);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const res = await axios.get("/api/hotels");
//         if (Array.isArray(res.data)) setRooms(res.data);
//         else if (Array.isArray(res.data.data)) setRooms(res.data.data);
//         else if (Array.isArray(res.data.hotels)) setRooms(res.data.hotels);
//         else setRooms([]);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load hotels.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchHotels();
//   }, []);

//   const toggleWishlist = (e, id) => {
//     e.stopPropagation();
//     setWishlist((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   };

//   return (
//     <section className="w-full py-24 bg-[#f8f7f4]">
//       <div className="max-w-7xl mx-auto px-6 md:px-10">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
//           <div>
//             <span className="text-xs font-semibold tracking-[0.18em] uppercase text-amber-600 mb-2 block">
//               Hand-Picked
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//               Featured Destinations
//             </h2>
//             <p className="text-gray-500 text-sm mt-2 max-w-md leading-relaxed">
//               Curated stays designed for comfort, luxury, and moments worth remembering.
//             </p>
//           </div>
//           <button
//             onClick={() => { navigate("/rooms"); window.scrollTo(0, 0); }}
//             className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
//           >
//             View all stays
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </button>
//         </div>

//         {/* Category Tabs */}
//         <div className="flex gap-2 flex-wrap mb-10">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200
//                 ${activeTab === tab
//                   ? "bg-gray-900 text-white border-gray-900"
//                   : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
//                 }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Skeleton */}
//         {loading && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {[...Array(4)].map((_, i) => (
//               <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
//                 <div className="h-52 bg-gray-200" />
//                 <div className="p-4 space-y-2.5">
//                   <div className="h-3 bg-gray-200 rounded w-1/3" />
//                   <div className="h-4 bg-gray-200 rounded w-3/4" />
//                   <div className="h-3 bg-gray-200 rounded w-1/2" />
//                   <div className="flex justify-between items-center pt-2">
//                     <div className="h-4 w-16 bg-gray-200 rounded" />
//                     <div className="h-7 w-20 bg-gray-200 rounded-lg" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Error */}
//         {error && (
//           <div className="flex items-center gap-3 py-5 px-5 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
//             <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
//                 d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
//             </svg>
//             {error}
//           </div>
//         )}

//         {/* Grid */}
//         {!loading && !error && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {rooms.slice(0, 8).map((room, index) => {
//               const imageUrl =
//                 room?.images?.[0] || room?.image ||
//                 "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80";
//               const id = room._id || index;
//               const isWishlisted = wishlist.includes(id);

//               return (
//                 <div
//                   key={id}
//                   onClick={() => setSelectedRoom(room)}
//                   className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
//                 >
//                   {/* Image */}
//                   <div className="relative h-52 overflow-hidden">
//                     <img
//                       src={imageUrl}
//                       alt={room?.hotel?.name || room?.name || "Hotel"}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />

//                     {/* Wishlist */}
//                     <button
//                       onClick={(e) => toggleWishlist(e, id)}
//                       className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm
//                         ${isWishlisted
//                           ? "bg-rose-500 text-white"
//                           : "bg-white/80 text-gray-400 hover:text-rose-500"
//                         }`}
//                     >
//                       <svg className="w-4 h-4" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                           d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
//                       </svg>
//                     </button>

//                     {/* Price */}
//                     {/* <div className="absolute top-3 right-3 bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full">
//                       ₹{(room?.pricePerNight || room?.price || 0).toLocaleString()}
//                       <span className="text-gray-400 font-normal"> /night</span>
//                     </div> */}

//                     <div className="absolute top-3 right-3 bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full">
//                       ₹{(room?.price_per_night || 0).toLocaleString()}
//                       <span className="text-gray-400 font-normal"> /night</span>
//                     </div>

//                     {/* City */}
//                     <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent px-3 pt-8 pb-3">
//                       <p className="text-white text-xs font-medium">
//                         {room?.hotel?.city || room?.city || ""}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Body */}
//                   <div className="p-4 flex flex-col flex-1">
//                     <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 mb-0.5 group-hover:text-amber-600 transition-colors">
//                       {room?.hotel?.name || room?.name || "Hotel"}
//                     </h3>
//                     <p className="text-xs text-gray-400 line-clamp-1 mb-3 flex items-center gap-1">
//                       <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
//                           d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                       </svg>
//                       {room?.hotel?.address || room?.address || "Address not available"}
//                     </p>

//                     <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
//                       <div className="flex items-center gap-1">
//                         <div className="flex gap-0.5">
//                           {[...Array(5)].map((_, i) => (
//                             <svg key={i} className={`w-3 h-3 ${i < 4 ? "text-amber-400" : "text-gray-200"}`}
//                               fill="currentColor" viewBox="0 0 20 20">
//                               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                             </svg>
//                           ))}
//                         </div>
//                         <span className="text-xs text-gray-400">4.0</span>
//                       </div>
//                       <span className="text-xs text-amber-600 font-medium">Quick view →</span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         {/* Newsletter Strip */}
//         <div className="mt-20 bg-gray-900 rounded-3xl px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div>
//             <p className="text-xs font-semibold tracking-[0.18em] uppercase text-amber-400 mb-2">Stay in the loop</p>
//             <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Get exclusive deals first</h3>
//             <p className="text-gray-400 text-sm">Early access to new properties, flash sales, and curated travel guides.</p>
//           </div>
//           <div className="flex w-full md:w-auto gap-2">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 md:w-64 bg-white/10 border border-white/15 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-xl outline-none focus:border-amber-400 transition"
//             />
//             <button className="bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedRoom && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4"
//           onClick={() => setSelectedRoom(null)}
//         >
//           <div
//             className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="relative h-60 overflow-hidden">
//               <img
//                 src={selectedRoom?.images?.[0] || selectedRoom?.image || "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80"}
//                 alt={selectedRoom?.hotel?.name || selectedRoom?.name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
//               <button
//                 onClick={() => setSelectedRoom(null)}
//                 className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:bg-white transition"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//               <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
//                 <div>
//                   <p className="text-white font-semibold text-base leading-tight">
//                     {selectedRoom?.hotel?.name || selectedRoom?.name}
//                   </p>
//                   <p className="text-white/65 text-xs mt-0.5 flex items-center gap-1">
//                     <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
//                     </svg>
//                     {selectedRoom?.hotel?.city || selectedRoom?.city || ""}
//                   </p>
//                 </div>
//                 <div className="bg-white/90 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full">
//                   ₹{(selectedRoom?.pricePerNight || selectedRoom?.price || 0).toLocaleString()}/night
//                 </div>
//               </div>
//             </div>

//             <div className="p-5">
//               {/* Quick Info Row */}
//               <div className="grid grid-cols-3 gap-3 mb-5">
//                 {[
//                   { label: "Per Night", value: `₹${(selectedRoom?.pricePerNight || selectedRoom?.price || 0).toLocaleString()}` },
//                   { label: "Rating", value: "4.8 ★" },
//                   { label: "Reviews", value: "200+" },
//                 ].map((item) => (
//                   <div key={item.label} className="bg-gray-50 rounded-xl p-3 text-center">
//                     <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
//                     <p className="text-sm font-semibold text-gray-900">{item.value}</p>
//                   </div>
//                 ))}
//               </div>

//               <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
//                 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
//                     d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                 </svg>
//                 {selectedRoom?.hotel?.address || selectedRoom?.address || ""}
//               </p>

//               <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2">
//                 {selectedRoom?.description || "A premium stay crafted for comfort, elegance, and memorable experiences."}
//               </p>

//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setSelectedRoom(null)}
//                   className="flex-1 py-2.5 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:border-gray-400 transition"
//                 >
//                   Close
//                 </button>
//                 <button
//                   onClick={() => { navigate(`/rooms/${selectedRoom._id}`); window.scrollTo(0, 0); }}
//                   className="flex-1 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-amber-600 transition-colors duration-200"
//                 >
//                   Book now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default FeaturedDestination;




import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  
  // Intersection Observer State
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  const tabs = ["All", "Beach", "Mountain", "City", "Heritage"];

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get("/api/hotels");
        if (Array.isArray(res.data)) setRooms(res.data);
        else if (Array.isArray(res.data.data)) setRooms(res.data.data);
        else if (Array.isArray(res.data.hotels)) setRooms(res.data.hotels);
        else setRooms([]);
      } catch (err) {
        console.error(err);
        setError("Failed to load exclusive properties.");
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);

  // Intersection Observer Integration
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  const toggleWishlist = (e, id) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filteredRooms = rooms.filter((room) => {
    if (activeTab === "All") return true;
    const roomCat = (room?.category || room?.type || room?.hotel?.category || "").toLowerCase();
    return roomCat === activeTab.toLowerCase();
  });

  return (
    <>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        
        .modal-fade-in { animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .modal-slide-up { animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }

        /* Initial Setup State */
        .reveal-node {
          opacity: 0;
          transform: translateY(35px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        /* Active Reveal Trigger Class */
        .reveal-active .reveal-node {
          opacity: 1;
          transform: translateY(0);
        }

        .grid-card-refresh {
          animation: cardRefresh 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes cardRefresh {
          from { opacity: 0; transform: scale(0.98) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <section 
        ref={sectionRef}
        className={`w-full py-20 bg-zinc-50/60 transition-all duration-300 ${isIntersecting ? "reveal-active" : ""}`}
      >
        {/* SPACING FIXED HERE: Changed padding layout to px-6 md:px-16 lg:px-24 for absolute symmetric grid alignment */}
        <div className="max-w-8xl mx-auto px-6 md:px-16 lg:px-24">

          {/* Node 1: Header */}
          <div 
            className="reveal-node flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
            style={{ transitionDelay: isIntersecting ? "100ms" : "0ms" }}
          >
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-600 block">
                Hand-Picked Escapes
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-zinc-900 tracking-tight leading-tight">
                Featured Destinations
              </h2>
              <div className="h-0.5 w-12 bg-amber-500/60 rounded-full mt-3" />
              <p className="text-zinc-500 text-sm max-w-md leading-relaxed pt-2">
                Curated boutique stays designed for pure luxury, comfort, and moments worth remembering.
              </p>
            </div>
            
            <button
              onClick={() => { navigate("/rooms"); window.scrollTo(0, 0); }}
              className="group self-start md:self-auto flex items-center gap-2.5 px-6 py-3 border border-zinc-200 bg-white text-zinc-800 text-xs font-bold tracking-wider uppercase rounded-full shadow-sm hover:bg-zinc-900 hover:text-white hover:border-zinc-900 active:scale-[0.98] transition-all duration-300"
            >
              View all properties
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Node 2: Tabs */}
          <div 
            className="reveal-node flex gap-3 overflow-x-auto pb-4 mb-12 custom-scrollbar snap-x snap-mandatory"
            style={{ transitionDelay: isIntersecting ? "250ms" : "0ms" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`snap-center shrink-0 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border
                  ${activeTab === tab
                    ? "bg-zinc-900 text-white border-zinc-900 shadow-md shadow-black/10"
                    : "bg-white text-zinc-500 border-zinc-200/80 hover:text-zinc-800 hover:border-zinc-400"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Loader Skeleton */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-zinc-100/80 space-y-4 p-3 animate-pulse">
                  <div className="h-56 bg-zinc-200 rounded-xl" />
                  <div className="space-y-3 px-2 pb-2">
                    <div className="h-3 bg-zinc-200 rounded w-1/3" />
                    <div className="h-4 bg-zinc-200 rounded w-3/4" />
                    <div className="h-3 bg-zinc-200 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="flex items-center gap-3 py-4 px-6 bg-rose-50 border border-rose-100 rounded-2xl text-rose-700 text-sm max-w-md mx-auto my-12 shadow-sm">
              <span className="font-medium">{error}</span>
            </div>
          )}

          {/* Node 3: Cards Grid */}
          {!loading && !error && (
            <div 
              className="reveal-node" 
              style={{ transitionDelay: isIntersecting ? "400ms" : "0ms" }}
            >
              {filteredRooms.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-zinc-100 p-8 shadow-sm">
                  <span className="text-3xl">🛎️</span>
                  <p className="text-zinc-400 text-sm mt-3 font-medium">No premium properties found in this category right now.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredRooms.slice(0, 8).map((room, index) => {
                    const imageUrl = room?.images?.[0] || room?.image || "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80";
                    const id = room._id || index;
                    const isWishlisted = wishlist.includes(id);

                    return (
                      <div
                        key={id}
                        onClick={() => setSelectedRoom(room)}
                        className="group grid-card-refresh bg-white rounded-3xl overflow-hidden border border-zinc-200/60 hover:shadow-2xl hover:shadow-zinc-200/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col relative"
                        style={{ animationDelay: `${index * 40}ms` }}
                      >
                        {/* Image */}
                        <div className="relative h-56 m-3 rounded-2xl overflow-hidden shadow-inner bg-zinc-100">
                          <img
                            src={imageUrl}
                            alt={room?.hotel?.name || room?.name}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-x-3 top-3 flex items-center justify-between z-10">
                            <button
                              type="button"
                              onClick={(e) => toggleWishlist(e, id)}
                              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border shadow-sm
                                ${isWishlisted ? "bg-rose-500 border-rose-500 text-white scale-110" : "bg-black/20 border-white/10 text-white hover:bg-white hover:text-rose-500"}`}
                            >
                              <svg className="w-3.5 h-3.5" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                              </svg>
                            </button>
                            <div className="bg-zinc-950/75 border border-white/10 text-white text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm">
                              ₹{(room?.price_per_night || room?.pricePerNight || room?.price || 0).toLocaleString()}
                              <span className="text-zinc-400 font-light text-[10px]"> /nt</span>
                            </div>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 pt-10 pb-3">
                            <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase">
                              {room?.hotel?.city || room?.city || "Destination"}
                            </p>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="px-5 pb-5 pt-2 flex flex-col flex-1 justify-between">
                          <div className="space-y-1.5">
                            <h3 className="text-sm font-semibold text-zinc-900 line-clamp-1 group-hover:text-amber-600 transition-colors duration-200">
                              {room?.hotel?.name || room?.name}
                            </h3>
                            <p className="text-xs text-zinc-400 line-clamp-1 flex items-center gap-1">
                              {room?.hotel?.address || room?.address || "Premium Location Details"}
                            </p>
                          </div>
                          <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3">
                            <div className="flex items-center gap-1.5">
                              <span className="text-amber-500 text-xs">★</span>
                              <span className="text-xs font-bold text-zinc-800">{room?.rating || "4.8"}</span>
                            </div>
                            <span className="text-[11px] text-amber-600 font-bold uppercase tracking-wider">
                              Quick View →
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Node 4: Newsletter Banner */}
          <div 
            className="reveal-node mt-28 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden"
            style={{ transitionDelay: isIntersecting ? "550ms" : "0ms" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-400 block">Informed Luxury</span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">Get exclusive deals first</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Unlock early availability alerts, flash price sales drops, and seasonal travel curated blueprints.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 shrink-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:w-72 bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-xs font-medium px-5 py-4 rounded-xl outline-none focus:border-amber-400 focus:bg-white/10 transition-all duration-300"
              />
              <button className="bg-amber-500 hover:bg-amber-400 active:scale-95 text-zinc-950 text-xs font-bold tracking-wider uppercase px-6 py-4 rounded-xl transition-all duration-300 whitespace-nowrap shadow-lg">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Details Center Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 backdrop-blur-sm px-4 modal-fade-in" onClick={() => setSelectedRoom(null)}>
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-zinc-100 modal-slide-up" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64 bg-zinc-100">
              <img src={selectedRoom?.images?.[0] || selectedRoom?.image} alt={selectedRoom?.hotel?.name} className="w-full h-full object-cover" />
              <button type="button" onClick={() => setSelectedRoom(null)} className="absolute top-4 right-4 w-9 h-9 bg-white/90 text-zinc-700 rounded-full flex items-center justify-center shadow-md">✕</button>
            </div>
            <div className="p-6 space-y-6">
              <h3 className="text-lg font-bold">{selectedRoom?.hotel?.name || selectedRoom?.name}</h3>
              <button type="button" onClick={() => setSelectedRoom(null)} className="w-full py-3 bg-zinc-900 text-white rounded-xl">Close Window</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedDestination;