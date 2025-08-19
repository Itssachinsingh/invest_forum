import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function PitchSection() {

      useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: false,
        });
      }, []);

  return (
    <section
      className="relative flex items-center justify-center min-h-[60vh] bg-cover bg-center text-center rounded-2xl my-8 mx-4 sm:mx-10 md:mx-10 "
      style={{ backgroundImage: "url('YOUR_BACKGROUND_IMAGE_URL')" }}
      data-aos="fade-up"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 rounded-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          I’m Interested to Pitch
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Showcase your vision, connect with investors, and pitch ideas to shape the Blockchain industry&apos;s future.
        </p>
        <button className="px-6 py-3 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-full transition">
          PITCH NOW
        </button>
      </div>
    </section>
  );
}
