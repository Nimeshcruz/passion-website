import localFont from "next/font/local";

import "./globals.css";

//import ScrollTop from "@src/components/elements/ScrollTop";
import Header from "@src/components/header/Header";
import Footer from "@src/components/footer/Footer";
import HomeQuickLinks from "@src/components/sections/home/quickLinks";
import HomeAds from "@src/components/sections/home/ads";
import PageLoader from "@src/components/elements/PageLoader";

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
        <PageLoader />
        <Header />
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
