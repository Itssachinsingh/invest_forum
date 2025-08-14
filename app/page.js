import Main from "./components/Main";
import BottomBanner from "./components/BottomBanner";
import CountdownTimer from "./components/CountdownTimer";
import EventImage from "./components/EventImage";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollingBanner from "./components/ScrollingBanner";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollingBanner />
      <EventImage />
      <BottomBanner />
      <Main />
    </main>
  );
}
