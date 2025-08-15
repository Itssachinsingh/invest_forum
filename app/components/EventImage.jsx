const EventImage = () => {
  return (
    <div className="">
      <div className=" mx-auto">

        <div className=" w-full  object-cover  shadow-lg  rounded-lg flex-shrink-0 mx-auto">
          <video
            className="w-full h-full object-cover"
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
