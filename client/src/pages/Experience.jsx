// import React from "react";
// import { motion } from "framer-motion";
// import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

// const experiences = [
//   {
//     id: 1,
//     title: "Luxury Beach Escape",
//     location: "Maldives",
//     rating: 4.9,
//     description:
//       "Immerse yourself in timeless elegance — private villas, sea breeze, and tranquility redefined.",
//   },
//   {
//     id: 2,
//     title: "Mountain Serenity Retreat",
//     location: "Himalayas",
//     rating: 4.8,
//     description:
//       "Where silence speaks — rediscover yourself in the stillness of snow-capped peace.",
//   },
//   {
//     id: 3,
//     title: "City Nights & Skyline Views",
//     location: "Dubai",
//     rating: 4.7,
//     description:
//       "Luxury reimagined in the rhythm of the city — lights, rooftops, and endless nights.",
//   },
//   {
//     id: 4,
//     title: "Royal Heritage Stay",
//     location: "Jaipur",
//     rating: 4.6,
//     description:
//       "Live like royalty. Marble courtyards, vintage charm, and timeless Indian grandeur.",
//   },
// ];

// const Experience = () => {
//   return (
//     <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center py-24 px-6">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-semibold tracking-wide uppercase"
//         >
//           Curated Experiences
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-gray-500 mt-4 text-lg max-w-xl mx-auto"
//         >
//           Handpicked stays and journeys designed for those who seek more than just travel — they seek meaning.
//         </motion.p>
//       </div>

//       {/* Experience Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl">
//         {experiences.map((exp) => (
//           <motion.div
//             key={exp.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             whileHover={{ scale: 1.03 }}
//             className="relative bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 
//             rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
//           >
//             <div>
//               <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
//               <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
//                 <FaMapMarkerAlt />
//                 <span>{exp.location}</span>
//               </div>
//               <p className="text-gray-600 leading-relaxed mb-6">{exp.description}</p>
//             </div>

//             <div className="flex items-center justify-between mt-auto">
//               <div className="flex items-center gap-1 text-yellow-500">
//                 <FaStar />
//                 <span className="font-medium">{exp.rating}</span>
//               </div>
//               <button
//                 className="px-5 py-2 border border-black rounded-full text-black font-medium 
//                 hover:bg-black hover:text-white transition-all duration-300"
//               >
//                 Explore
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom CTA */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.7 }}
//         className="text-center mt-20"
//       >
//         <h2 className="text-3xl font-semibold mb-3">Every Stay, A Story</h2>
//         <p className="text-gray-500 mb-8">
//           Choose an experience that feels like you — elegant, bold, unforgettable.
//         </p>
//         <button
//           className="px-8 py-3 rounded-full bg-black text-white border border-black 
//           hover:bg-white hover:text-black transition-all duration-300"
//         >
//           Discover More
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default Experience;




import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const experiences = [
  {
    id: 1,
    title: "Luxury Beach Escape",
    location: "Maldives",
    rating: 4.9,
    reviews: 312,
    tag: "Most Popular",
    duration: "5–7 nights",
    price: "₹42,000",
    description:
      "Private overwater villas, crystalline lagoons, and sunsets that blur the line between sky and sea.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
  },
  {
    id: 2,
    title: "Mountain Serenity Retreat",
    location: "Himalayas",
    rating: 4.8,
    reviews: 198,
    tag: "Editor's Pick",
    duration: "3–5 nights",
    price: "₹18,000",
    description:
      "Where silence speaks — rediscover yourself in the stillness of snow-capped horizons and pine-scented air.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: 3,
    title: "City Nights & Skyline Views",
    location: "Dubai",
    rating: 4.7,
    reviews: 445,
    tag: "Trending",
    duration: "4–6 nights",
    price: "₹55,000",
    description:
      "Luxury reimagined in the rhythm of the city — rooftop pools, fine dining, and endless golden lights.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  },
  {
    id: 4,
    title: "Royal Heritage Stay",
    location: "Jaipur",
    rating: 4.6,
    reviews: 267,
    tag: "Cultural",
    duration: "2–4 nights",
    price: "₹22,000",
    description:
      "Live like royalty — marble courtyards, vintage havelis, and the timeless grandeur of the Pink City.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed6979c?w=800&q=80",
  },
  {
    id: 5,
    title: "Backwater Houseboat Journey",
    location: "Kerala",
    rating: 4.8,
    reviews: 183,
    tag: "Unique",
    duration: "2–3 nights",
    price: "₹14,000",
    description:
      "Drift through emerald waterways on a private houseboat — coconut groves, spice air, and stillness.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
  },
  {
    id: 6,
    title: "Desert Luxury Camp",
    location: "Rajasthan",
    rating: 4.9,
    reviews: 141,
    tag: "Exclusive",
    duration: "2–3 nights",
    price: "₹28,000",
    description:
      "Golden dunes, starlit skies, and a tented palace in the heart of the Thar — unforgettable by design.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
  },
];

const tagColors = {
  "Most Popular": "bg-amber-50 text-amber-700 border-amber-200",
  "Editor's Pick": "bg-purple-50 text-purple-700 border-purple-200",
  "Trending": "bg-blue-50 text-blue-700 border-blue-200",
  "Cultural": "bg-rose-50 text-rose-700 border-rose-200",
  "Unique": "bg-teal-50 text-teal-700 border-teal-200",
  "Exclusive": "bg-gray-900 text-white border-gray-900",
};

const filters = ["All", "Beach", "Mountain", "City", "Heritage", "Nature", "Desert"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const Experience = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-gray-900">

      {/* Hero Banner */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
          alt="hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold tracking-[0.22em] uppercase text-amber-400 mb-3"
          >
            Exclusive Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
          >
            Curated Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed"
          >
            Handpicked stays and journeys for those who seek meaning — not just a destination.
          </motion.p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 grid grid-cols-3 md:grid-cols-3 gap-4 text-center">
          {[
            { value: "500+", label: "Destinations" },
            { value: "98%", label: "Guest Satisfaction" },
            { value: "12K+", label: "Stays Booked" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-24 py-20">

        {/* Section Header + Filters */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-amber-600 mb-2 block">
              Browse by mood
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Find your experience
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200
                  ${activeFilter === f
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Tag */}
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border ${tagColors[exp.tag]}`}>
                  {exp.tag}
                </span>

                {/* Location */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {exp.location}
                </div>

                {/* Price */}
                <div className="absolute bottom-3 right-3 bg-white/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  from {exp.price}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-amber-600 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-700">{exp.rating}</span>
                    <span className="text-xs text-gray-400">({exp.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {exp.duration}
                </div>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-5">
                  {exp.description}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-400">Starting from <span className="text-gray-900 font-semibold">{exp.price}</span></p>
                  <button
                    onClick={() => navigate("/rooms")}
                    className="px-4 py-2 bg-gray-900 text-white text-xs font-semibold rounded-xl hover:bg-amber-600 transition-colors duration-200"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-24 relative overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80"
            alt="cta"
            className="w-full h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Every Stay, A Story</h2>
            <p className="text-white/65 text-sm mb-7 max-w-md">
              Choose an experience that feels like you — elegant, bold, unforgettable.
            </p>
            <button
              onClick={() => { navigate("/rooms"); window.scrollTo(0, 0); }}
              className="px-7 py-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl text-sm transition-colors duration-200"
            >
              Discover All Stays
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;