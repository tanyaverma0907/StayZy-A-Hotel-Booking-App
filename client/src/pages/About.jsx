import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Authenticity",
    text: "Every stay is handpicked for its genuine charm, character, and soul — no cookie-cutter properties.",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Elegance",
    text: "We celebrate minimalism, beauty, and balance — in our curation and in every pixel of our design.",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Trust",
    text: "Your comfort, privacy, and peace of mind are our highest priority — always.",
    color: "text-teal-600 bg-teal-50",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Innovation",
    text: "Technology made invisible — smooth, intelligent, and deeply human-centered at every step.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
      </svg>
    ),
    title: "Sustainability",
    text: "We partner with eco-conscious properties to preserve the world's beauty for future generations.",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Connection",
    text: "We help travelers feel at home, no matter where in the world they find themselves.",
    color: "text-rose-600 bg-rose-50",
  },
];

const stats = [
  { value: "150+", label: "Countries" },
  { value: "12K+", label: "Stays Booked" },
  { value: "98%", label: "Satisfaction" },
  { value: "500+", label: "Partners" },
];

const team = [
  { name: "Aryan Sharma", role: "Founder & CEO", initials: "AS", color: "bg-amber-100 text-amber-700" },
  { name: "Priya Menon", role: "Head of Curation", initials: "PM", color: "bg-purple-100 text-purple-700" },
  { name: "Karan Verma", role: "CTO", initials: "KV", color: "bg-teal-100 text-teal-700" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-gray-900">

      {/* Hero */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80"
          alt="about hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold tracking-[0.22em] uppercase text-amber-400 mb-3"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed"
          >
            Your gateway to curated stays, soulful moments, and seamless luxury travel.
          </motion.p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 grid grid-cols-4 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-24 py-20 space-y-24">

        {/* Story + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-amber-600 mb-3 block">
              How it began
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-5 leading-tight">Our Story</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              It began with a simple thought — what if travel felt effortless, elegant, and deeply personal?
              From boutique escapes to world-class resorts, we handpick hotels that redefine comfort and
              bring authenticity to every stay.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our mission is to bridge travelers with experiences that speak their language — be it solitude,
              celebration, or discovery. We're not just a booking platform. We're your trusted travel companion.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-px bg-amber-400" />
              <span className="text-xs text-amber-600 font-semibold tracking-wider uppercase">Est. 2021</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-72 md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80"
              alt="our story"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-72 md:h-80 order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&q=80"
              alt="philosophy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-amber-600 mb-3 block">
              What drives us
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-5 leading-tight">Our Philosophy</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              We believe true luxury lies in experience, not excess. Every detail — from booking flow to
              check-in — is designed with calm precision and quiet elegance.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our design language is simplicity. Our goal is meaning. Whether you're booking a business trip
              or a soul getaway, we bring you a moment of ease and clarity.
            </p>

            {/* Pillars */}
            <div className="mt-8 space-y-3">
              {["Human-first design", "Zero compromise on quality", "Transparent pricing always"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-amber-600 mb-3 block">
              What we stand for
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${v.color}`}>
                  {v.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-amber-600 mb-3 block">
              The people behind it
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 ${member.color}`}>
                  {member.initials}
                </div>
                <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                <p className="text-xs text-gray-400 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80"
            alt="cta"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Your Journey Awaits</h2>
            <p className="text-white/65 text-sm mb-7 max-w-md">
              Every great story begins with a destination. Let us help you find yours.
            </p>
            <button
              onClick={() => { navigate("/rooms"); window.scrollTo(0, 0); }}
              className="px-7 py-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl text-sm transition-colors duration-200"
            >
              Explore Experiences
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
