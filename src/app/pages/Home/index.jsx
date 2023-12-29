/* Home */
import React from "react";
import NavBar from "@/app/components/NavBar";
import SwiperSlider from "@/app/components/Swiper";
import Solutions from "@/app/components/Solutions";
import Footer from "@/app/components/Footer";
import Footer2 from "@/app/components/Footer2";
import FirstImpressions from "@/app/components/FirstImpressions";
import HowToChoose from "@/app/components/HowToChoose";
import WhatsApp from "@/app/components/WhatsApp";
import Blog from "@/app/components/Blog";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SwiperSlider />
      <FirstImpressions />
      <Solutions />
      <HowToChoose />
      <Blog />
      <WhatsApp />
      <Footer />
      <Footer2 />
    </div>
  );
}
