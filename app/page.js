import Main from "./components/Main";
import BottomBanner from "./components/BottomBanner";
import EventImage from "./components/EventImage";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollingBanner from "./components/ScrollingBanner";
import TopHeader from "./components/TopHeader";

export default function Home() {
  return (
    <main className="w-full max-w-[1600px] mx-auto">
      <TopHeader/>
      <Navbar />
      <Hero />
      <ScrollingBanner />
      <EventImage />
      <BottomBanner />
      <Main />
    </main>
  );
}
