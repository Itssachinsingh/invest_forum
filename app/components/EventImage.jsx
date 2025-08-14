const EventImage = () => {
  return (
    <div className="">
      <div className=" mx-auto">

        <div className=" w-full lg:h-[840px] h-[500px] object-cover  shadow-lg  rounded-lg flex-shrink-0 mx-auto">
          <video
          className="w-full h-auto object-cover"
          src="images/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        /></div>
      </div>
    </div>
  );
};

export default EventImage;
