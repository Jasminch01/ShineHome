const Banner = () => {
  return (
    <div>
      <div className="relative md:h-[80vh] h-[90vh] flex items-center justify-start">
        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-8 z-10">
          <div className="text-white md:w-[80%] mx-auto">
            <h1 className="md:text-5xl text-2xl font-bold mb-4">
              A Fresh Start <br />
              Your Home, Our Priority
            </h1>
            <p className="md:text-lg md:w-[700px]">
              Experience the epitome of cleanliness with ShineHome.
              Our professional home cleaning services redefine comfort, creating
              spaces of unmatched freshness and order. Entrust us with the
              details, and step into a world of pristine homes where every
              corner reflects our dedication to excellence.
            </p>
            <button className="p-3 bg-sky-500 rounded">Get Started</button>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 right-0 bg-cover bg-banner-bg bg-center z-0 object-cover"></div>

        {/* Overlay */}
        <div className="absolute inset-0  bg-black bg-opacity-50 z-0 "></div>
      </div>
    </div>
  );
};

export default Banner;
