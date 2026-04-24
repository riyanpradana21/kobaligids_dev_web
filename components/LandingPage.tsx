import Link from "next/link";
// import Image from "next/image";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Compass,
  Languages,
  User,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Users, MapPin, HeartHandshake } from "lucide-react";
import React from "react";
import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import WeatherCard from "../components/weather/WeatherCard";
const currentYear = new Date().getFullYear();

const navItems = [
  { name: "Home", id: "#home" },
  { name: "About Us", id: "#about" },
  {
    name: "Trip To Bali",
    id: "#destinations",
  },
  {
    name: "Travel Service",
    id: "#travel",
  },
  { name: "Contact Us", id: "#contact" },
];

const destinations = [
  {
    title: "Nusa Penida",
    image: "/images/nusa-penida.jpeg",
    description:
      "A dramatic island escape featuring towering cliffs, crystal-clear waters, and untouched natural beauty that feels worlds away from the mainland.",
  },
  {
    title: "Ubud Rice Terraces",
    image: "/images/ubud-rice-terrace.jpg",
    description:
      "Experience Bali’s cultural heart through lush rice terraces, spiritual temples, and traditional village life surrounded by nature.",
  },
  {
    title: "Lempuyang Temple",
    image: "/images/road-trip-with-raj-sELcHR_bGVs-unsplash.jpg",
    description:
      "Known as the Gate of Heaven, this sacred temple offers breathtaking views of Mount Agung and a deeply spiritual atmosphere.",
  },
  {
    title: "Tirta Gangga",
    image: "/images/Daya-Tarik-Tirta-Gangga.jpg",
    description:
      "A former royal water palace featuring elegant fountains, stone carvings, and tranquil pools set in eastern Bali.",
  },
  {
    title: "Sekumpul Waterfall",
    image: "/images/pexels-joe-fikar-799933673-19137317.jpg",
    description:
      "One of Bali’s most impressive waterfalls, hidden within lush jungle landscapes and perfect for adventurous travelers.",
  },
  {
    title: "Jatiluwih Rice Fields",
    image: "/images/pexels-muammar-jefri-2150424129-35144306.jpg",
    description:
      "A UNESCO World Heritage site showcasing vast rice terraces managed through the traditional Balinese irrigation system.",
  },
  {
    title: "Ulun Danu Beratan",
    image: "/images/pexels-freestockpro-2166559.jpg",
    description:
      "A picturesque water temple floating on Lake Beratan, surrounded by cool mountain air and serene scenery.",
  },
  {
    title: "Besakih Temple",
    image: "/images/pexels-keins-prajapati-1643462098-27662576.jpg",
    description:
      "The largest and holiest temple complex in Bali, perched on the slopes of Mount Agung, offering spiritual significance and stunning views.",
  },
  {
    title: "Tukad Cepung Waterfall",
    image: "/images/b41d4bb01a5a1bc6511d23689c65be46.jpg",
    description:
      "A hidden gem tucked inside a cave, where sunlight filters through the opening to create a magical waterfall experience.",
  },
  {
    title: "Penglipuran Village",
    image: "/images/ruben-hutabarat-ONeVbWrlt0A-unsplash.jpg",
    description:
      "A traditional Balinese village known for its well-preserved culture, clean streets, and unique bamboo architecture, offering a glimpse into authentic island life.",
  },
];

const foodCulture = [
  {
    title: "Mas Woodcarving Village – Ubud",
    image: "/images/BALI-WOOD-CARVING-AT-MAS-VILLAGE.jpg",
    description:
      "The legendary heart of Balinese woodcarving. Witness master carvers transform raw teak and sonokeling wood into lifelike, highly detailed sculptures that breathe with artistic soul.",
  },
  {
    title: "Bali Arts Festival (Pesta Kesenian Bali)",
    image: "/images/pesta-kesenian-bali-banner.jpg",
    description:
      "The largest annual event (June-July) that showcases cultural parades, traditional dances, and craft exhibitions from all regencies in Bali, held at the Art Center Denpasar.",
  },
  {
    title: "Bali Kite Festival – Sanur",
    image: "/images/kite-fest-main.jpg",
    description:
      "A spectacular tradition of giant kites (July-August) as a tribute to the gods. Hundreds of traditional 'Bebean' kites, some reaching 10 meters, paint the Sanur skies with vibrant colors.",
  },
  {
    title: "Mekare-kare (Perang Pandan) – Tenganan",
    image: "/images/Perang_pandan.jpg",
    description:
      "A unique annual tradition in the ancient village of Tenganan. Young men engage in a duel using thorny pandan leaves as a tribute to Dewa Indra, the god of war in local beliefs.",
  },
  {
    title: "Munduk Highland Exploration",
    image: "/images/twin-lake-view-banyumala.jpg",
    description:
      "Escape to the mountains. Known for its cool climate, coffee plantations, and hidden waterfalls like Munduk and Melanting, offering a misty, magical atmosphere.",
  },
  {
    title: "Uluwatu Kecak Fire Dance",
    image: "/images/alief-priyanto-mvaryZ3NSgo-unsplash.jpg",
    description:
      "An iconic sunset performance combining dramatic chanting, fire rituals, and storytelling on a cliff overlooking the ocean.",
  },
  {
    title: "Garuda Wisnu Kencana Cultural Park",
    image: "/images/febiyan-TcRS867Pw3A-unsplash.jpg",
    description:
      "A cultural park featuring a massive statue of the Hindu god Vishnu riding the mythical bird Garuda, along with traditional dance performances and art exhibitions.",
  },
  {
    title: "Diving & Snorkeling Pemuteran",
    image: "/images/082620200747405f46139ca1b62.jpg",
    description:
      "A tranquil coastal area in northwest Bali, known for its vibrant coral reefs, sea turtles, and the innovative Biorock reef restoration project.",
  },
  {
    title: "UC Silver Gold – Batubulan",
    image: "/images/uc-silver.jpg",
    description:
      "UC Silver Gold has been operating since 1989 with the dedication of hand-crafted jewelry. We have the largest silver & gold manufacturing in Bali, with huge selections of silver jewelry in our gallery. The unique design makes each piece truly one of a kind. We combine modern with authentic Bali designs has penetrated the market of Asia, United States, Australia and Europe. ",
  },
  {
    title: "Batuan Traditional Painting Village",
    image: "/images/bali-painting-batuan3-bali-bliss-tours-1024x662.jpg",
    description:
      "A historic art village known for its detailed and expressive painting style, deeply rooted in Balinese mythology and culture.",
  },
  {
    title: "Kemenuh Butterfly Park & Wood Carving",
    image: "/images/958f91e0-9da4-479d-bce6-d5ef969913a7.jpeg",
    description:
      "A destination blending nature conservation with grand woodcarving galleries, featuring contemporary figurative sculptures highly sought after by international art collectors.",
  },
  {
    title: "Sukawati Art Market",
    image:
      "/images/sukawati-art-market-qp8o4b7n327i1dxvo6b5odhpxgss2w5jslkxfus59c.jpg",
    description:
      "A vibrant market showcasing local artwork, handicrafts, and traditional Balinese culture.",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  // 1. Berikan tipe HTMLDivElement pada useRef
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrolled, setScrolled] = useState(false);
  const destinationsRef = React.useRef<HTMLDivElement>(null);
  const [isBioOpen, setIsBioOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi Navigasi Panah
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      // Mengambil satu kartu untuk menghitung jarak geser secara dinamis
      const card = container.querySelector(".dest-card") as HTMLElement;

      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 32; // Sesuaikan dengan gap-8 (8 * 4px)
        const scrollDistance = cardWidth + gap;

        container.scrollBy({
          left: direction === "left" ? -scrollDistance : scrollDistance,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollDestinations = (direction: "left" | "right") => {
    if (destinationsRef.current) {
      const container = destinationsRef.current;
      const card = container.querySelector(".dest-card") as HTMLElement;
      if (card) {
        const scrollAmount = card.offsetWidth + 32; // Lebar kartu + gap-8 (32px)
        container.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {/* GABUNGKAN SEMUA CSS DI SINI AGAR TIDAK NESTED */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,800;1,800&display=swap");

        .font-jakarta {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        /* Animasi Fade */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Animasi Progress Bar */
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        /* Utility Scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>

      <nav
        className={`fixed top-0 w-full z-[9999] transition-all duration-500 font-jakarta ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl py-3 border-b border-gray-100/50 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* LOGO AREA */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#8B5E3C]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E3C] to-[#5D3A1A] rounded-xl md:rounded-2xl rotate-6 group-hover:rotate-[15deg] transition-transform duration-700 shadow-lg" />
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-xl md:rounded-2xl -rotate-6 group-hover:rotate-0 transition-transform duration-700 border border-white/30 shadow-inner" />
              <Compass
                className="relative text-white group-hover:rotate-45 transition-all duration-700"
                size={20}
                strokeWidth={1.5}
              />
            </div>

            <div className="flex flex-col">
              {/* TEXT LOGO: Berubah warna berdasarkan status scroll */}
              <span
                className={`text-xl md:text-2xl font-[800] tracking-tighter leading-none italic transition-colors duration-500 ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Koba<span className="text-[#8B5E3C]">ligids</span>
              </span>
              <span
                className={`text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-bold mt-1 transition-colors duration-500 ${
                  scrolled ? "text-slate-400" : "text-white/60"
                }`}
              >
                Netherlands <span className="text-[#8B5E3C]">×</span> Bali
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.id}
                  className={`relative px-5 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 group/link ${
                    scrolled
                      ? "text-slate-600 hover:text-black"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#8B5E3C] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </li>
            ))}
            <li className="ml-4">
              <Link
                href="https://wa.me/+6281338631929"
                className="px-7 py-3 bg-[#8B5E3C] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-[#8B5E3C] transition-all duration-500 shadow-lg shadow-[#8B5E3C]/20"
              >
                Let&apos;s Explore
              </Link>
            </li>
          </ul>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-all ${
              scrolled
                ? "bg-slate-100 text-slate-900"
                : "bg-white/10 text-white backdrop-blur-md"
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY: Diperbaiki agar Full Screen & Lembut */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              // Menambahkan h-screen dan inset-0 untuk memastikan menutup seluruh layar
              className="fixed inset-0 h-screen bg-white z-[99999] flex flex-col p-6 lg:hidden"
            >
              {/* HEADER DI DALAM MENU (Agar tetap bisa klik close di posisi yang sama) */}
              <div className="flex justify-between items-center py-4 mb-8">
                <span className="text-xl font-bold tracking-tighter text-slate-900 italic">
                  Koba<span className="text-[#8B5E3C]">ligids</span>
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-900"
                >
                  <X size={20} />
                </button>
              </div>

              {/* NAV LINKS - Ukuran diperkecil agar tidak menumpuk */}
              <div className="flex flex-col gap-2">
                {navItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.id}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-bold tracking-tighter text-slate-900 py-4 border-b border-slate-50 flex justify-between items-center group active:bg-slate-50 transition-all px-2 rounded-lg"
                  >
                    <span className="group-hover:text-[#8B5E3C]">
                      {item.name}
                    </span>
                    <ArrowRight size={20} className="text-slate-300" />
                  </Link>
                ))}

                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-6 w-full py-4 bg-[#8B5E3C] text-white text-center rounded-xl font-black uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-[#8B5E3C]/20"
                >
                  Book A Tour
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-[100vh] flex items-center justify-center text-white overflow-hidden bg-[#0A0A0A]"
      >
        {/* 4K SOFT PHOTO BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2500&auto=format&fit=crop"
            alt="Bali Serene Landscape"
            fill // Menggantikan w-full h-full untuk mengisi container parent
            priority // Penting untuk LCP: Memuat gambar ini lebih awal
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite]"
          />
          {/* Multi-Layer Overlay untuk readability maksimal */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#0A0A0A] z-[1]" />

          {/* Radial Glow: Menjaga teks tengah tetap kontras meski BG terang */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,transparent_70%)] z-[1]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 md:px-8 pt-20">
          <div className="flex flex-col items-center text-center">
            {/* PRE-TITLE */}
            <div className="flex items-center gap-4 mb-6 md:mb-8 animate-[fadeIn_1.5s_ease-out]">
              <span className="w-8 h-[1px] bg-[#8B5E3C]/50 hidden md:block"></span>
              <p className="uppercase tracking-[0.4em] md:tracking-[0.8em] text-[8px] md:text-[9px] text-[#8B5E3C] font-bold">
                The Art of Authentic Bali
              </p>
              <span className="w-8 h-[1px] bg-[#8B5E3C]/50 hidden md:block"></span>
            </div>

            {/* MAIN TITLE */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[1.2] md:leading-[1.1] animate-[fadeInUp_1.2s_ease-out_0.2s_both]">
                Enjoy Your Dream <br />
                {/* VAKASI IN BALI: Ditambahkan drop-shadow halus & kontras adaptif */}
                <span className="text-[#A67B5B] italic font-serif font-light text-3xl md:text-6xl block mt-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  Vacation in Bali
                </span>
              </h1>
            </div>

            {/* SUBTITLE: Lebih ramping di mobile */}
            <p className="text-white/70 md:text-white/50 text-xs md:text-base leading-relaxed max-w-[280px] md:max-w-xl font-light tracking-wide mb-10 md:mb-12 animate-[fadeInUp_1.2s_ease-out_0.5s_both]">
              Experience the island’s hidden treasures through the eyes of a
              local expert. Where tradition meets modern comfort.
            </p>

            {/* BUTTON GROUP */}
            <div className="animate-[fadeInUp_1.2s_ease-out_0.8s_both]">
              <Link
                href="#destinations"
                className="group relative inline-flex items-center gap-4 bg-[#8B5E3C] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-black overflow-hidden shadow-2xl shadow-black/50"
              >
                <span className="relative z-10">Plan My Trip</span>
                <ArrowRight
                  size={14}
                  className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
                />
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </div>
          </div>
        </div>

        {/* MINIMAL SCROLL INDICATOR: Animasi naik turun */}
        <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 animate-bounce">
          <div className="w-[1px] h-8 md:h-10 bg-gradient-to-b from-transparent via-[#8B5E3C] to-transparent" />
        </div>
      </section>

      {/* RIGHT SIDE - WEATHER CARD
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 text-black">
        <WeatherCard />
      </div> */}

      {/* SECTION BAWAH */}
      <section
        id="services"
        className="py-20 md:py-32 bg-[#FDFDFD] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* HEADER - Spacing lebih dinamis untuk mobile */}
          <div className="max-w-3xl mb-12 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 md:w-10 h-[1px] bg-[#8B5E3C]/40" />
              <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-[#8B5E3C] font-bold">
                Our Services
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.2] md:leading-[1.1] tracking-tight">
              A Meaningful Connection <br className="hidden md:block" />
              <span className="text-[#8B5E3C]">Between You and Bali</span>
            </h2>

            <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-2xl font-light tracking-wide">
              Kobaligids builds genuine relationships with travelers, offering
              guidance, trust, and personal attention to ensure your Bali
              experience feels authentic from start to finish.
            </p>
          </div>

          {/* GRID - Menyesuaikan gap agar tidak terlihat menumpuk di mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* CARD COMPONENT - Digunakan untuk semua kartu agar konsisten */}
            {[
              {
                icon: <Users size={22} />,
                title: "A Trusted Local Companion",
                desc: "More than a guide, Kobaligids becomes your local companion — helping you navigate Bali with confidence and comfort.",
              },
              {
                icon: <MapPin size={22} />,
                title: "Cultural Insight & Stories",
                desc: "We share the stories, traditions, and hidden meanings behind every destination, creating deeper connections.",
              },
              {
                icon: <HeartHandshake size={22} />,
                title: "Personalized Care",
                desc: "From arrival to farewell, we stay attentive to your needs — ensuring clear communication and genuine care.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(139,94,60,0.08)] hover:-translate-y-2 flex flex-col items-start"
              >
                {/* ICON BOX - Ukuran lebih proporsional di mobile */}
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-[#8B5E3C]/5 mb-6 md:mb-8 group-hover:bg-[#8B5E3C] transition-all duration-500 group-hover:rotate-6">
                  <div className="text-[#8B5E3C] group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900 group-hover:text-[#8B5E3C] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-[13px] md:text-[15px] leading-relaxed font-light tracking-normal">
                  {item.desc}
                </p>

                {/* Aksesori Estetik: Garis halus saat hover */}
                <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-20 md:py-32 bg-[#F8F9FA] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* LEFT — TEXT SIDE */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="mb-8 md:mb-12 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#8B5E3C] rounded-xl rotate-12 flex items-center justify-center shadow-lg shadow-[#8B5E3C]/20">
                  <span className="text-white text-xs font-bold">NS</span>
                </div>
                <div className="h-[1px] w-12 bg-gray-200"></div>
              </div>

              {/* Typography Adaptif: text-6xl di mobile, text-[90px] di desktop */}
              <h2 className="text-5xl md:text-7xl lg:text-[90px] font-bold text-[#1A1A1A] leading-[0.9] tracking-tighter mb-8 md:mb-12">
                Inside <br />
                <span className="text-[#8B5E3C]">Nyoman</span>
              </h2>

              <div className="max-w-md mb-10 md:mb-12">
                <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light">
                  The main focus is on authentic cultural experiences and hidden
                  destinations in Bali, helping travelers discover the beauty of
                  the island beyond the crowds.
                </p>
              </div>

              {/* TOMBOL BIOGRAFI */}
              <button
                onClick={() => setIsBioOpen(true)}
                className="w-fit flex items-center gap-4 group mb-12"
              >
                <div className="w-12 h-12 rounded-full border border-[#8B5E3C] flex items-center justify-center group-hover:bg-[#8B5E3C] transition-all duration-500">
                  <User
                    size={18}
                    className="text-[#8B5E3C] group-hover:text-white transition-colors"
                  />
                </div>
                <span className="text-[11px] uppercase tracking-[0.3em] font-black text-slate-900 border-b border-slate-200 group-hover:border-[#8B5E3C] transition-all">
                  Read Full Biography
                </span>
              </button>

              {/* Footer Info — Lebih Rapi di Mobile */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[10px] md:text-[12px] uppercase tracking-widest font-semibold text-gray-400 border-t border-gray-100 pt-10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8B5E3C] rounded-full"></span>
                  <span>Local Guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8B5E3C] rounded-full"></span>
                  <span>Dutch Speaking</span>
                </div>
                <a
                  href="mailto:kswastika494@gmail.com"
                  className="text-[#8B5E3C] hover:underline normal-case tracking-normal"
                >
                  kswastika494@gmail.com
                </a>
              </div>
            </div>

            {/* RIGHT — IMAGE SIDE */}
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
                <div className="relative h-[450px] md:h-[650px] w-full group">
                  <Image
                    src="/images/about-guide.jpg" // Path lokal relatif terhadap folder 'public'
                    alt="Nyoman Suwastika - Your Personal Bali Guide" // Alt text diperkuat untuk SEO
                    fill // Mengisi container aspect-ratio
                    sizes="(max-width: 768px) 100vw, 50vw" // Penting untuk performa responsif
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"

                    // Opsional namun direkomendasikan untuk potret profil:
                    // placeholder="blur"
                    // blurDataURL="data:image/jpeg;base64,..." // Gunakan base64 versi kecil/blur dari gambar aslinya
                  />

                  {/* Overlay Lebih Lembut */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70" />

                  <div className="absolute bottom-8 left-8 right-8 z-10">
                    <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-sm font-light italic">
                      &quot;I share language, culture, and hidden places far
                      from the hustle and bustle of Kuta or Nusa Dua.&quot;
                    </p>
                  </div>
                </div>

                {/* Progress Bar Estetik */}
                <div className="absolute top-6 left-6 right-6 flex gap-2 z-20">
                  <div className="h-[2px] flex-1 bg-white/40 overflow-hidden rounded-full">
                    <div className="h-full bg-white w-full animate-[progress_6s_linear_infinite]"></div>
                  </div>
                  <div className="h-[2px] flex-1 bg-white/10 rounded-full"></div>
                  <div className="h-[2px] flex-1 bg-white/10 rounded-full"></div>
                </div>
              </div>

              {/* Dekorasi Aksen */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8B5E3C]/10 rounded-full blur-[80px] -z-10"></div>
            </div>
          </div>
        </div>

        {/* BIOGRAPHY MODAL */}
        <AnimatePresence>
          {isBioOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl relative"
              >
                <button
                  onClick={() => setIsBioOpen(false)}
                  className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 hover:bg-[#8B5E3C] hover:text-white transition-colors z-50"
                >
                  <X size={20} />
                </button>

                <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#8B5E3C]/10 rounded-2xl text-[#8B5E3C]">
                      <Languages size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">
                        Nyoman Suwastika
                      </h4>
                      <p className="text-[10px] uppercase tracking-widest text-[#8B5E3C] font-bold">
                        Dutch Speaking Guide
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light">
                    <p>
                      <strong>Let me first introduce myself to you:</strong> My
                      name is Nyoman Suwastika, my nickname is Komang or Ko. I
                      was born in Bali, that&apos;s why my name is
                      &quot;Komang&quot;. For us, the name means the third birth
                      in the family or the third child.
                    </p>
                    <p>
                      I was born on December 9 in a small village in western
                      Bali. I am now married and living in{" "}
                      <strong>Denpasar City, Bali</strong> with my Wife and two
                      children.
                    </p>
                    <p>
                      I lived in the Netherlands with my family for a year and
                      learned Dutch there. After I returned to Bali from the
                      Netherlands, I became a Dutch-speaking guide. I enjoy my
                      work as a guide. Not only because I can earn rupiah with
                      it, but also because I can always use my knowledge of
                      Dutch and show my beautiful island as a tourist
                      attraction.
                    </p>
                    <p className="bg-slate-50 p-6 rounded-2xl italic border-l-4 border-[#8B5E3C]">
                      &quot;Bali is not alone: The holiday resorts of Kuta,
                      Sanur or Nusa Dua. There are many more beautiful places on
                      this island where few or no tourists come.&quot;
                    </p>
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-100 flex gap-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        Location
                      </span>
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                        <MapPin size={12} /> Denpasar, Bali
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        Nickname
                      </span>
                      <span className="text-xs font-bold text-slate-900 italic">
                        Komang / Ko
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section
        id="destinations"
        className="relative py-20 bg-[#0A0A0A] text-white overflow-hidden min-h-screen flex flex-col justify-center"
      >
        {/* BACKGROUND DECORATION - Menjaga estetika mewah */}
        <div className="absolute top-10 right-[-2%] opacity-[0.03] select-none pointer-events-none z-0">
          <h1 className="text-[15vw] font-black leading-none uppercase italic text-gray-500">
            DESTINY
          </h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full">
          {/* HEADER & NAV BUTTONS */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-[#8B5E3C]/60" />
                <p className="uppercase tracking-[0.6em] text-[9px] text-gray-500 font-black">
                  The Journey
                </p>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-white">
                Explore Top <br />
                <span className="text-[#8B5E3C] font-light italic text-3xl md:text-5xl">
                  Bali Destinations
                </span>
              </h2>
            </div>

            {/* TOMBOL NAVIGASI - Versi Dark Luxury */}
            <div className="flex gap-3 z-20">
              <button
                type="button"
                onClick={() => scrollDestinations("left")}
                className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group"
              >
                <ChevronLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
              </button>
              <button
                type="button"
                onClick={() => scrollDestinations("right")}
                className="w-14 h-14 rounded-full bg-[#8B5E3C] flex items-center justify-center text-white hover:bg-[#704A2F] transition-all duration-500 group shadow-lg shadow-[#8B5E3C]/20"
              >
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* HORIZONTAL SCROLL CONTAINER */}
          <div className="relative">
            <div
              ref={destinationsRef}
              className="flex flex-nowrap overflow-x-auto gap-8 pb-10 snap-x snap-mandatory no-scrollbar scroll-smooth"
            >
              {destinations.map((item, index) => (
                <div
                  key={index}
                  className="dest-card min-w-[85%] md:min-w-[calc(33.333%-22px)] snap-center md:snap-start group/card"
                >
                  <div className="flex flex-col space-y-6">
                    {/* IMAGE CONTAINER - Asymmetric Signature */}
                    <div className="relative overflow-hidden rounded-tr-[80px] rounded-bl-[80px] rounded-tl-2xl rounded-br-2xl aspect-[4/5] bg-zinc-900 border border-white/5 shadow-2xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-full object-cover scale-100 group-hover/card:scale-110 transition-transform duration-1000 opacity-80 group-hover/card:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

                      <div className="absolute bottom-8 left-8 pr-4">
                        <h3 className="text-2xl font-bold tracking-tight text-white uppercase leading-none">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* DESCRIPTION & CTA */}
                    <div className="px-1 flex flex-col flex-grow space-y-5">
                      <p className="text-gray-400 text-xs leading-relaxed font-light italic line-clamp-3 text-justify flex-grow">
                        &quot;{item.description}&quot;
                      </p>
                      <a
                        href={`https://wa.me/+6281338631929`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-3 w-fit"
                      >
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:bg-[#8B5E3C] group-hover/link:border-[#8B5E3C] transition-all duration-500">
                          <ArrowUpRight
                            size={16}
                            className="text-white transition-transform group-hover/link:scale-110"
                          />
                        </div>
                        <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-300 group-hover/link:text-[#8B5E3C] transition-colors">
                          Inquire Now
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              {/* Spacer Akhir */}
              <div className="flex-none w-4 md:w-8" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-food-culture"
        className="relative py-20 bg-[#FDFDFD] text-black overflow-hidden min-h-screen flex flex-col justify-center"
      >
        {/* BACKGROUND DECORATION */}
        <div className="absolute top-10 left-[-2%] opacity-[0.03] select-none pointer-events-none z-0">
          <h1 className="text-[15vw] font-black leading-none uppercase italic text-gray-400">
            CULTURE
          </h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full">
          {/* HEADER & NAV BUTTONS */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-[#8B5E3C]/40" />
                <p className="uppercase tracking-[0.6em] text-[9px] text-gray-400 font-black">
                  Culture & Arts
                </p>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-[#1A1A1A]">
                Art Creativity & <br />
                <span className="text-[#8B5E3C] font-light italic text-3xl md:text-5xl">
                  Cultural Experiences
                </span>
              </h2>
            </div>

            {/* TOMBOL NAVIGASI */}
            <div className="flex gap-3 z-20">
              <button
                type="button"
                onClick={() => scroll("left")} // Memanggil fungsi scroll
                className="w-14 h-14 rounded-full border border-black/5 bg-white shadow-sm flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 group"
              >
                <ChevronLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")} // Memanggil fungsi scroll
                className="w-14 h-14 rounded-full bg-[#8B5E3C] flex items-center justify-center text-white hover:bg-[#704A2F] transition-all duration-500 group shadow-lg shadow-[#8B5E3C]/20"
              >
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* HORIZONTAL SCROLL CONTAINER */}
          <div className="relative">
            <div
              ref={scrollRef} // Pastikan Ref ini terpasang di sini
              className="flex flex-nowrap overflow-x-auto gap-8 pb-10 snap-x snap-mandatory no-scrollbar scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {foodCulture.map((item, index) => (
                <div
                  key={index}
                  // Tambahkan class 'dest-card' agar bisa dibaca oleh fungsi JavaScript
                  className="dest-card min-w-[85%] md:min-w-[calc(33.333%-22px)] snap-start group/card"
                >
                  <div className="flex flex-col space-y-6">
                    <div className="relative overflow-hidden rounded-tr-[80px] rounded-bl-[80px] rounded-tl-2xl rounded-br-2xl aspect-[4/5] bg-gray-100 shadow-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-8 left-8 pr-4">
                        <h3 className="text-2xl font-bold tracking-tight text-white uppercase leading-none">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="px-1 space-y-5">
                      <p className="text-gray-500 text-xs leading-relaxed font-light italic line-clamp-3 text-justify">
                        &quot;{item.description}&quot;
                      </p>
                      <a
                        href="https://wa.me/+6281338631929"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-3 w-fit"
                      >
                        <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover/link:bg-[#8B5E3C] group-hover/link:border-[#8B5E3C] transition-all duration-500">
                          <span className="text-black group-hover/link:text-white">
                            <ArrowUpRight size={16} />
                          </span>
                        </div>
                        <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-800 group-hover/link:text-[#8B5E3C]">
                          Inquire Now
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-20 py-24 md:py-48 bg-white rounded-b-[60px] md:rounded-b-[120px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            {/* KIRI - VISUAL COMPOSITION */}
            <div className="relative w-full lg:w-1/2">
              {/* Main Image dengan Border Radius Asimetris */}
              <div className="relative z-10 overflow-hidden rounded-tr-[80px] md:rounded-tr-[120px] rounded-bl-[80px] md:rounded-bl-[120px] rounded-tl-3xl rounded-br-3xl aspect-[4/5] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200"
                  alt="Balinese Culture"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-[#8B5E3C]/10 mix-blend-multiply" />
              </div>

              {/* Decorative Element - Floating Pattern Card (Mobile: Adjusted Position) */}
              <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 z-20 bg-white p-4 md:p-6 shadow-xl rounded-2xl border border-gray-100">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#8B5E3C]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#8B5E3C] font-bold text-xs md:text-base">
                      10+
                    </span>
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                      Years of
                    </p>
                    <p className="text-xs md:text-sm font-bold text-gray-900">
                      Local Expertise
                    </p>
                  </div>
                </div>
              </div>

              {/* Aksesoris Garis Estetik */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#8B5E3C]/5 rounded-full blur-3xl" />
            </div>

            {/* KANAN - CONTENT STRATEGY & CONTACT */}
            <div className="w-full lg:w-1/2 space-y-10 md:space-y-12 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <span className="w-8 md:w-10 h-[1px] bg-[#8B5E3C]" />
                  <p className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] text-[#8B5E3C] font-bold">
                    Get in Touch
                  </p>
                  <span className="w-8 md:w-10 h-[1px] bg-[#8B5E3C] lg:hidden" />
                </div>

                <h2 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-[0.9] md:leading-[0.85]">
                  Experience Bali <br className="hidden md:block" />
                  <span className="text-[#8B5E3C] font-light italic">
                    as it truly is.
                  </span>
                </h2>

                <p className="text-gray-500 text-base md:text-xl font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  &quot;I don&apos;t just show you places; I share the soul of
                  my island. From the morning dew in sacred water temples to the
                  warmth of a local kitchen.&quot;
                </p>
              </div>

              {/* SERVICES BENTO-STYLE (Mobile: 2 Columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Sacred Temples", desc: "Spiritual depth" },
                  { title: "Hidden Gems", desc: "Secret spots" },
                  { title: "Local Life", desc: "Authentic vibes" },
                  { title: "Custom Paths", desc: "Tailored rhythm" },
                ].map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(i)} // Menggunakan setter
                    className={`p-4 md:p-5 border rounded-2xl transition-all cursor-pointer group ${
                      activeIndex === i
                        ? "border-[#8B5E3C] bg-[#8B5E3C]/5" // Style jika aktif (menggunakan activeIndex)
                        : "border-gray-100 hover:border-[#8B5E3C]/30"
                    }`}
                  >
                    <h4
                      className={`font-bold text-sm md:text-base transition-colors ${
                        activeIndex === i ? "text-[#8B5E3C]" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[10px] md:text-xs text-gray-400 mt-1 leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* REFINED CTA & SOCIAL ICONS */}
              <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-8 border-t border-gray-100">
                <a
                  href="https://wa.me/6281338631929"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 md:gap-6"
                >
                  <div className="relative">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 border-2 border-[#25D366] rounded-full animate-ping opacity-20" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 font-bold mb-1">
                      Book an Experience
                    </p>
                    <p className="text-base md:text-lg font-bold text-gray-900 border-b border-black/10 pb-1 group-hover:text-[#8B5E3C] group-hover:border-[#8B5E3C] transition-all">
                      Start the Conversation
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 md:gap-4">
                  {[
                    {
                      Icon: Instagram,
                      href: "https://www.instagram.com/komang.suwastika.1?igsh=MTBqM3M1ZDZndTN2dg==",
                      label: "Instagram",
                    },
                    {
                      Icon: Facebook,
                      href: "https://www.facebook.com/komang.suwastika.1?mibextid=haYZDX",
                      label: "Facebook",
                    },
                    {
                      Icon: Linkedin,
                      href: "https://www.linkedin.com/in/komang-swastika-a2556229a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                      label: "LinkedIn",
                    },
                    {
                      Icon: Mail,
                      href: "mailto:kswastika494@gmail.com",
                      label: "Email",
                    },
                  ].map((soc, idx) => {
                    const IconComponent = soc.Icon;
                    return (
                      <a
                        key={idx}
                        href={soc.href}
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#8B5E3C] hover:border-[#8B5E3C] hover:bg-[#8B5E3C]/5 transition-all"
                        aria-label={soc.label}
                      >
                        <IconComponent className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- STICKY FOOTER (LAPISAN BAWAH) --- */}
      {/* PENTING: -mt-[120px] memastikan section about menutupi sebagian footer 
          sehingga transisinya terlihat seamless (tidak terbelah).
      */}
      <footer className="relative w-full bg-[#050505] text-white overflow-hidden border-t border-white/5">
        {/* BACKGROUND DECORATION - Opacity sangat rendah untuk menjaga estetika visual */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.02] select-none pointer-events-none w-full text-center z-0">
          <h1 className="text-[25vw] font-black leading-none uppercase italic tracking-tighter">
            KOBALI
          </h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full pt-20 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* LEFT SECTION: BRANDING & CONTACT */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter italic">
                  KOBALI
                  <span className="text-[#8B5E3C] font-light">GIDS</span>
                </h2>
                {/* Kontras ditingkatkan ke white/60 agar tidak tenggelam */}
                <p className="text-white/60 max-w-sm font-light leading-relaxed text-sm tracking-wide">
                  Authentic journeys, curated personally for your soul. Discover
                  the hidden pulse of Bali through our exclusive travel
                  services.
                </p>
              </div>

              {/* CONTACT QUICK INFO - Tampilan Boutique Agency */}
              <div className="space-y-4 border-l border-[#8B5E3C]/30 pl-6">
                <div className="group cursor-pointer">
                  <p className="text-[10px] text-[#8B5E3C] font-black tracking-[0.3em] uppercase mb-1">
                    Location
                  </p>
                  <p className="text-sm text-white/80 group-hover:text-white transition-colors flex items-center gap-2">
                    Denpasar City, Bali, Indonesia
                    <MapPin size={12} className="text-[#8B5E3C]" />
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-[10px] text-[#8B5E3C] font-black tracking-[0.3em] uppercase mb-1">
                    Inquiries
                  </p>
                  <p className="text-sm text-white/80 group-hover:text-white transition-colors">
                    +62 813-3863-1929
                  </p>
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4">
                {[
                  {
                    Icon: Instagram,
                    href: "https://www.instagram.com/komang.suwastika.1",
                  },
                  {
                    Icon: Facebook,
                    href: "https://www.facebook.com/komang.suwastika.1",
                  },
                  { Icon: MessageCircle, href: "https://wa.me/6281338631929" },
                  { Icon: Mail, href: "mailto:kswastika494@gmail.com" },
                ].map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-[#8B5E3C] hover:border-[#8B5E3C] hover:text-white transition-all duration-500 group"
                  >
                    <soc.Icon
                      size={16}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT SECTION: MAPS & LINKS */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
              {/* GOOGLE MAPS - Opacity disesuaikan agar lebih jelas (tidak terlalu gelap) */}
              <div className="relative w-full h-[280px] rounded-3xl overflow-hidden border border-white/20 group shadow-2xl bg-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3944.791657065248!2d115.2061002498358!3d-8.615990909161212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1776997447718!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  className="grayscale-[0.5] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent" />

                {/* Opsi tambahan: Efek Glassmorphism di pinggir agar lebih menyatu */}
                <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl" />
              </div>

              {/* NAV LINKS */}
              <div className="flex flex-col justify-between py-2">
                <div className="grid grid-cols-2 gap-8 md:gap-4">
                  <div className="space-y-6">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#8B5E3C] font-black italic">
                      Navigate
                    </p>
                    <ul className="space-y-4 text-[11px] text-white/40 font-light tracking-[0.1em] uppercase">
                      <li className="hover:text-white flex items-center gap-2 transition-all cursor-pointer group">
                        Daily Tours
                        <ArrowUpRight
                          size={10}
                          className="opacity-0 group-hover:opacity-100 transition-all"
                        />
                      </li>
                      <li className="hover:text-white flex items-center gap-2 transition-all cursor-pointer group">
                        Culinary
                        <ArrowUpRight
                          size={10}
                          className="opacity-0 group-hover:opacity-100 transition-all"
                        />
                      </li>
                      <li className="hover:text-white flex items-center gap-2 transition-all cursor-pointer group">
                        Culture
                        <ArrowUpRight
                          size={10}
                          className="opacity-0 group-hover:opacity-100 transition-all"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#8B5E3C] font-black italic">
                      E-Mail
                    </p>
                    <div className="space-y-4 text-[11px] text-white/40 font-light tracking-[0.1em] uppercase">
                      <p className="text-white/90 border-b border-[#8B5E3C]/40 inline-block pb-1 lowercase tracking-normal">
                        kswastika494@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM COPYRIGHT */}
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-white/20 tracking-[0.5em] uppercase">
            <p className="text-white/40 group-hover:text-[#8B5E3C] transition-colors font-black">
              © {currentYear} KOBALIGIDS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-2 group cursor-default">
              <span className="text-white/40 group-hover:text-[#8B5E3C] transition-colors font-black">
                DEVELOPED BY
              </span>
              <span className="text-white/40 group-hover:text-[#8B5E3C] transition-colors font-black">
                Riyan Pradana
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
