
// import React, { useState, useEffect } from "react";
// import { assets, cities } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

// const slides = [
//   {
//     image: assets.heroImage,
//     tag: "Escape the Ordinary",
//     title: "Discover Where Luxury\nMeets Adventure",
//     subtitle: "From tropical beaches to scenic mountain hideaways — your dream escape starts here.",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80",
//     tag: "Handpicked for You",
//     title: "Stays That Feel\nLike a Dream",
//     subtitle: "Curated boutique escapes and world-class resorts tailored for every kind of traveler.",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80",
//     tag: "Pure Tranquility",
//     title: "Find Peace in\nEvery Corner",
//     subtitle: "Serene retreats, private villas, and hideaways designed to help you truly unwind.",
//   },
// ];

// const trustBadges = [
//   { icon: "★", label: "4.9 Rated" },
//   { icon: "✓", label: "Verified Properties" },
//   { icon: "⚡", label: "Instant Booking" },
//   { icon: "🛡", label: "Secure Payments" },
// ];

// const Hero = () => {
//   const navigate = useNavigate();
//   const [current, setCurrent] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       goTo((current + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [current]);

//   const goTo = (idx) => {
//     if (animating) return;
//     setAnimating(true);
//     setTimeout(() => { setCurrent(idx); setAnimating(false); }, 400);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate("/rooms");
//   };

//   const slide = slides[current];

//   return (
//     <>
//       <style>{`
//         input[type="date"]::-webkit-calendar-picker-indicator { filter: brightness(0) invert(1); opacity: 0.6; }
//         input[type="number"]::-webkit-inner-spin-button,
//         input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
//         input[type="number"] { -moz-appearance: textfield; }
//         input::placeholder { color: rgba(255,255,255,0.45); }
//         input[type="date"] { color-scheme: dark; }
//         .hero-slide { transition: opacity 0.4s ease; }
//         .hero-slide.fade { opacity: 0; }
//       `}</style>

//       <div className="relative h-screen w-full overflow-hidden">

//         {/* Background Image */}
//         <div className={`absolute inset-0 hero-slide ${animating ? "fade" : ""}`}>
//           <img
//             src={slide.image}
//             alt="hero"
//             className="w-full h-full object-cover object-center scale-105"
//             style={{ transition: "transform 6s ease" }}
//           />
//         </div>

//         {/* Layered Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20 z-10" />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10" />

//         {/* Slide Dots */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goTo(i)}
//               className={`transition-all duration-300 rounded-full ${
//                 i === current
//                   ? "w-7 h-2 bg-amber-400"
//                   : "w-2 h-2 bg-white/40 hover:bg-white/60"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Slide Arrows */}
//         <button
//           onClick={() => goTo((current - 1 + slides.length) % slides.length)}
//           className="absolute left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition backdrop-blur-sm"
//         >
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <button
//           onClick={() => goTo((current + 1) % slides.length)}
//           className="absolute right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition backdrop-blur-sm"
//         >
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Main Content */}
//         <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6">

//           {/* Tag Pill */}
//           <div className={`hero-slide ${animating ? "fade" : ""}`}>
//             <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-amber-400 border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
//               {slide.tag}
//             </span>
//           </div>

//           {/* Headline */}
//           <h1 className={`hero-slide ${animating ? "fade" : ""} font-bold leading-tight mb-5 max-w-4xl`}
//             style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", whiteSpace: "pre-line" }}>
//             {slide.title}
//           </h1>

//           {/* Subtitle */}
//           <p className={`hero-slide ${animating ? "fade" : ""} text-white/65 text-sm md:text-base max-w-xl leading-relaxed mb-10`}>
//             {slide.subtitle}
//           </p>

//           {/* Search Form */}
//           <form
//             onSubmit={handleSearch}
//             className="w-full max-w-5xl"
//           >
//             <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-2 flex flex-col md:flex-row gap-1 shadow-xl">

//               {/* Destination */}
//               <div className="flex-1 flex flex-col px-4 py-2.5 rounded-xl hover:bg-white/10 transition group">
//                 <label className="text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider group-focus-within:text-amber-400 transition">
//                   Destination
//                 </label>
//                 <input
//                   list="destinations"
//                   type="text"
//                   required
//                   placeholder="Where to?"
//                   className="bg-transparent text-white text-sm outline-none w-full"
//                 />
//                 <datalist id="destinations">
//                   {cities.map((city, i) => <option value={city} key={i} />)}
//                 </datalist>
//               </div>

//               <div className="hidden md:block w-px bg-white/15 my-2" />

//               {/* Check-in */}
//               <div className="flex-1 flex flex-col px-4 py-2.5 rounded-xl hover:bg-white/10 transition group">
//                 <label className="text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider group-focus-within:text-amber-400 transition">
//                   Check-in
//                 </label>
//                 <input
//                   type="date"
//                   className="bg-transparent text-white text-sm outline-none w-full"
//                 />
//               </div>

//               <div className="hidden md:block w-px bg-white/15 my-2" />

//               {/* Check-out */}
//               <div className="flex-1 flex flex-col px-4 py-2.5 rounded-xl hover:bg-white/10 transition group">
//                 <label className="text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider group-focus-within:text-amber-400 transition">
//                   Check-out
//                 </label>
//                 <input
//                   type="date"
//                   className="bg-transparent text-white text-sm outline-none w-full"
//                 />
//               </div>

//               <div className="hidden md:block w-px bg-white/15 my-2" />

//               {/* Guests */}
//               <div className="flex-1 flex flex-col px-4 py-2.5 rounded-xl hover:bg-white/10 transition group">
//                 <label className="text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider group-focus-within:text-amber-400 transition">
//                   Guests
//                 </label>
//                 <input
//                   min={1}
//                   max={10}
//                   type="number"
//                   placeholder="2 guests"
//                   className="bg-transparent text-white text-sm outline-none w-full"
//                 />
//               </div>

//               {/* Search Button */}
//               <div className="flex items-center px-1">
//                 <button
//                   type="submit"
//                   className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 active:scale-95 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap w-full md:w-auto justify-center"
//                 >
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                       d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
//                   </svg>
//                   Search
//                 </button>
//               </div>
//             </div>
//           </form>

//           {/* Trust Badges */}
//           <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
//             {trustBadges.map((b) => (
//               <div key={b.label} className="flex items-center gap-1.5 text-white/55 text-xs">
//                 <span className="text-amber-400 text-sm">{b.icon}</span>
//                 {b.label}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 right-8 z-30 flex flex-col items-center gap-1.5 text-white/30">
//           <span className="text-xs tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>Scroll</span>
//           <div className="w-px h-8 bg-white/20 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-full bg-amber-400/60 animate-bounce" style={{ height: "40%" }} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;



import React, { useState, useEffect } from "react";
import { assets, cities } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: assets.heroImage,
    tag: "Escape the Ordinary",
    title: "Discover Where Luxury\nMeets Adventure",
    subtitle: "From tropical beaches to scenic mountain hideaways — your dream escape starts here.",
  },
  {
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80",
    tag: "Handpicked for You",
    title: "Stays That Feel\nLike a Dream",
    subtitle: "Curated boutique escapes and world-class resorts tailored for every kind of traveler.",
  },
  {
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80",
    tag: "Pure Tranquility",
    title: "Find Peace in\nEvery Corner",
    subtitle: "Serene retreats, private villas, and hideaways designed to help you truly unwind.",
  },
];

const trustBadges = [
  { icon: "★", label: "4.9 Rated Properties" },
  { icon: "✓", label: "100% Verified Stays" },
  { icon: "⚡", label: "Instant Reservation" },
  { icon: "🛡", label: "Secure Payments" },
];

const Hero = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Form States
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, [current, animating]);

  const goTo = (idx) => {
    if (animating || idx === current) return;
    setAnimating(true);
    
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400); 
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/rooms", { state: { destination, checkIn, checkOut, guests } });
  };

  const slide = slides[current];

  return (
    <>
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator { filter: brightness(0) invert(1); opacity: 0.5; cursor: pointer; }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        input[type="number"] { -moz-appearance: textfield; }
        input::placeholder { color: rgba(255,255,255,0.4); }
        input[type="date"] { color-scheme: dark; }
        
        /* Smooth Crossfade Animation for Slider */
        .hero-slide-bg { transition: opacity 0.4s ease-in-out; }
        .hero-slide-text { transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1); }
        .fade-out { opacity: 0.2; }
        .fade-text-out { opacity: 0; transform: translateY(10px); }

        /* Smooth Screen-On-Load Cascade Animation Engine */
        .reveal-node {
          opacity: 0;
          animation: revealDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes revealDown {
          from {
            opacity: 0;
            transform: translateY(-24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="relative min-h-[100svh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-between py-24 px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Background Images Layer */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className={`absolute inset-0 hero-slide-bg ${animating ? "fade-out" : "opacity-100"}`}>
            <img
              src={slide.image}
              alt="Luxury Destination"
              className="w-full h-full object-cover object-center scale-100"
            />
          </div>
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 z-10" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40 z-10" />
        </div>

        {/* Left/Right Arrows for Desktop */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6 z-30 hidden sm:flex">
          <button
            type="button"
            onClick={() => goTo((current - 1 + slides.length) % slides.length)}
            className="w-12 h-12 rounded-full border border-white/15 text-white flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all backdrop-blur-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 z-30 hidden sm:flex">
          <button
            type="button"
            onClick={() => goTo((current + 1) % slides.length)}
            className="w-12 h-12 rounded-full border border-white/15 text-white flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all backdrop-blur-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Main Content Container */}
        <div className="relative z-20 my-auto w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Node 1: Tag Pill */}
          <div 
            className={`reveal-node hero-slide-text ${animating ? "fade-text-out" : "opacity-100"}`}
            style={{ animationDelay: "150ms" }}
          >
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-amber-400 bg-amber-400/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              {slide.tag}
            </span>
          </div>

          {/* Node 2: Main Heading */}
          <h1 
            className={`reveal-node hero-slide-text ${animating ? "fade-text-out" : "opacity-100"} font-serif font-semibold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl`}
            style={{ fontSize: "clamp(2.25rem, 6vw, 4.25rem)", whiteSpace: "pre-line", animationDelay: "300ms" }}
          >
            {slide.title}
          </h1>

          {/* Node 3: Subtitle */}
          <p 
            className={`reveal-node hero-slide-text ${animating ? "fade-text-out" : "opacity-100"} text-zinc-300/80 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-12`}
            style={{ animationDelay: "450ms" }}
          >
            {slide.subtitle}
          </p>

          {/* Node 4: Luxury Search Form Card */}
          <form
            onSubmit={handleSearch}
            className="reveal-node w-full max-w-5xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-full p-3 shadow-2xl shadow-black/50"
            style={{ animationDelay: "600ms" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-2 text-left">
              
              {/* Destination */}
              <div className="md:col-span-4 flex flex-col justify-center px-5 py-3 rounded-xl md:rounded-l-full hover:bg-white/5 focus-within:bg-white/5 transition-all duration-200 group relative">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-focus-within:text-amber-400 transition-colors">
                  Destination
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-zinc-500 text-sm">📍</span>
                  <input
                    list="destinations"
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where are you going?"
                    className="bg-transparent text-white text-sm font-medium outline-none w-full placeholder-zinc-500"
                  />
                </div>
                <datalist id="destinations">
                  {cities.map((city, i) => <option value={city} key={i} />)}
                </datalist>
                <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10" />
              </div>

              {/* Check In */}
              <div className="md:col-span-2 flex flex-col justify-center px-5 py-3 rounded-xl hover:bg-white/5 focus-within:bg-white/5 transition-all duration-200 group relative">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-focus-within:text-amber-400 transition-colors">
                  Check In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-white text-sm font-medium mt-1 outline-none w-full cursor-pointer"
                />
                <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10" />
              </div>

              {/* Check Out */}
              <div className="md:col-span-2 flex flex-col justify-center px-5 py-3 rounded-xl hover:bg-white/5 focus-within:bg-white/5 transition-all duration-200 group relative">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-focus-within:text-amber-400 transition-colors">
                  Check Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent text-white text-sm font-medium mt-1 outline-none w-full cursor-pointer"
                />
                <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10" />
              </div>

              {/* Guests */}
              <div className="md:col-span-2 flex flex-col justify-center px-5 py-3 rounded-xl hover:bg-white/5 focus-within:bg-white/5 transition-all duration-200 group relative">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-focus-within:text-amber-400 transition-colors">
                  Guests
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-zinc-500 text-sm">👥</span>
                  <input
                    min={1}
                    max={12}
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="Add guests"
                    className="bg-transparent text-white text-sm font-medium outline-none w-full placeholder-zinc-500"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="sm:col-span-2 md:col-span-2 flex items-center p-1">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98] text-zinc-950 font-bold text-sm tracking-wide px-6 py-4 rounded-xl md:rounded-full transition-all duration-300 w-full justify-center shadow-lg shadow-amber-500/20"
                >
                  <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                  </svg>
                  Search
                </button>
              </div>

            </div>
          </form>

        </div>

        {/* Node 5: Footer Tracking & Badges Layout */}
        <div 
          className="reveal-node relative z-20 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6 mt-12 border-t border-white/5 pt-8"
          style={{ animationDelay: "750ms" }}
        >
          
          {/* Trust Badges */}
          <div className="md:col-span-2 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-zinc-400 text-xs tracking-wide">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5 text-amber-400 text-xs">{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center md:justify-end gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`transition-all duration-300 h-1 rounded-full ${
                  i === current ? "w-8 bg-amber-400" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </>
  );
};

export default Hero;