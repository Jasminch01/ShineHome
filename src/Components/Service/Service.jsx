const Service = () => {
  return (
    <div className="mb-20" id="service">
      <div className="my-10">
        <p className="text-center text-sky-500 text-3xl font-bold">
          Our Services
        </p>
        <div className="w-1/2 mx-auto">
          <p className="text-center">
            We offer a comprehensive suite of home cleaning services designed to
            meet the unique needs of every homeowner. Our dedicated team of
            professionals is committed to transforming your living spaces into
            pristine environments, leaving no corner untouched.
          </p>
        </div>
      </div>
      <div className="md:flex justify-center md:space-y-0 space-y-3 gap-5 ">
        <div className="card bg-base-100 border py-5 md:w-[350px]">
          <figure>
            <img className="w-16" src="https://i.ibb.co/dksWRB1/kitchen.png" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-center">Kitchen Cleaning</h2>
            <p className="text-center ">
              At ShineHome, we go beyond the basics to offer specialized
              cleaning services tailored to your unique requirements.
            </p>
            <div className="text-center">
              <button className="p-3 bg-sky-500 text-white rounded-full">
                read more
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 border py-5 md:w-[350px]">
          <figure>
            <img
              className="w-16"
              src="https://i.ibb.co/sqqZc5N/toilets.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-center">Bathroom Cleaning</h2>
            <p className="text-center ">
              Make your move stress-free with our detailed move-in and move-out
              cleaning services. Whether {"you're"} settling into a new home or
              preparing to hand over the keys.
            </p>
            <div className="text-center">
              <button className="p-3 bg-sky-500 text-white rounded-full">
                read more
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 border py-5 md:w-[350px]">
          <figure>
            <img
              className="w-16"
              src="https://i.ibb.co/vXyQ2XN/house-cleaning.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-center">Home Cleaning</h2>
            <p className="text-center ">
              Navigate the dust and debris of construction projects seamlessly
              with our Post-Construction Cleanup service. Our team specializes
              in removing the aftermath of construction.
            </p>
            <div className="text-center">
              <button className="p-3 bg-sky-500 text-white rounded-full">
                read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
