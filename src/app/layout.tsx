import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../app/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  // Title yang menggabungkan Brand + Keywords Utama
  title: "KobaliGids | Authentic & Private Bali Travel Guide",
  
  // Deskripsi dengan copywriting yang menyasar sisi emosional tamu Eropa
  description: "Discover the hidden soul of Bali with KobaliGids. Personalised boutique journeys from sacred temples to secret waterfalls. Curated for travellers from Europe, Netherlands, Belgium, and beyond who seek authenticity.",
  
  // Keywords untuk membantu indexing mesin pencari
  keywords: [
    "Bali private tour guide", 
    "Authentic Bali experience", 
    "Boutique travel Bali", 
    "Bali gids Nederlands", // Menyasar market Belanda
    "Privégids Bali", 
    "Hidden gems Bali", 
    "Luxury Bali tours"
  ],

  // Open Graph untuk tampilan optimal saat link dibagikan di Social Media (FB/IG/WhatsApp)
  openGraph: {
    title: "KobaliGids - Authentic Journeys, Curated Personally",
    description: "Experience Bali as it truly is. Tailored paths for the conscious traveller.",
    url: "https://kobaligids.com",
    siteName: "KobaliGids",
    locale: "en_US",
    type: "website",
  },

  // Twitter Card untuk marketing di X/Twitter
  twitter: {
    card: "summary_large_image",
    title: "KobaliGids | Your Personal Bali Guide",
    description: "Personalized journeys curated for your soul. Discover Bali's hidden pulse.",
  },

  // Robots instruksi agar mudah ditemukan Google
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}