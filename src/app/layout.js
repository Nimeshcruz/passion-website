import localFont from "next/font/local";
import "./globals.css";

//import ScrollTop from "@src/components/elements/ScrollTop";
import Header from "@src/components/header/Header";
import Footer from "@src/components/footer/Footer";
import HomeQuickLinks from "@src/components/sections/home/quickLinks";
import HomeAds from "@src/components/sections/home/ads";

const trap = localFont({
  src: [
    {
      path: "../../public/fonts/Trap-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Trap-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Trap-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Trap-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Trap-SemiBold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Trap-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-trap",
});

export const metadata = {
  title: "Passion Ibza",
  description: "A passion website for Ibza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${trap.variable} antialiased`}>
        {/*<ScrollTop />*/}
        <header
          id="q-header"
          className="fixed left-0 right-0 top-0 lg:left-3 lg:right-3 lg:top-2 z-40 lg:rounded-2xl transition duration-300 ease-in px-5 lg:px-2 lg:pr-8 py-4 lg:py-2 bg-dark lg:bg-[rgba(0,0,0,0.01)] lg:bg-clip-padding lg:backdrop-filter lg:backdrop-blur-md lg:bg-opacity-5"
        >
          <Header />
        </header>
        {children}

        <HomeQuickLinks />
        <HomeAds />
        <footer id="q-footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
