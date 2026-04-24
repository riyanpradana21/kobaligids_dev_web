"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

const socialLinks = [
  { Icon: FaInstagram, url: "https://instagram.com/wngnetofficial" },
  { Icon: FaFacebookF, url: "https://facebook.com/wngnetofficial" },
  { Icon: FaTiktok, url: "https://www.tiktok.com/@wng.net" },
];

export default function Footer() {
  return (
    
    // <footer className="relative isolate z-10 text-white overflow-hidden" >
    <footer className="relative isolate z-10 text-white overflow-hidden" >
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black bg-fixed opacity-90" />

      <div className="relative z-10 px-6 md:px-20 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Kolom 1 - Brand & Deskripsi */}
        <div>
          <Image src="/images/wng-white.png" alt="WNG Logo" width={180} height={80} className="mb-6" />
          <p className="text-sm leading-relaxed text-gray-300">WNG merupakan salah satu brand penjualan utama dari PT. Wisuandha Network Globalindo, perusahaan penyedia Jasa Layanan Internet (Internet Service Provider).</p>
          <div className="flex space-x-4 mt-6">
      {socialLinks.map(({ Icon, url }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#F36A10] transition-colors"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
        </div>

        {/* Kolom 2 - Navigasi */}
        <div className="flex flex-col items-center md:items-center text-center md:text-left">
          <h4 className="text-lg font-semibold mb-6 text-white">All Page</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              { label: "About Us", href: "/tentang-kami" },
              { label: "Our Service", href: "/produk" },
              { label: "Contact", href: "/hubungi-kami" },
              { label: "Careers", href: "#" },
            ].map(({ label, href }, i) => (
              <li key={i}>
                <Link href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3 - Kontak */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-start space-x-3">
              <IoLocationSharp size={20} className="mt-1 text-white" />
              <p>Jl. Mawar No.40, Delod Peken, Kec. Tabanan, Kabupaten Tabanan, Bali 82113</p>
            </div>
            <div className="flex items-center space-x-3">
              <IoCall size={20} className="text-white" />
              <p>(0361) 7995406</p>
            </div>
            <div className="flex items-center space-x-3">
              <MdEmail size={20} className="text-white" />
              <p>info@wng.net.id</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-gray-700 text-xs text-gray-400 py-6 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        <p>© 2025 WNG - Excellent Network Solution for Bali and Indonesia</p>
        <p>Powered by WNG</p>
      </div>
    </footer>
  );
}
