const Service = () => {
  return (
    <div>
      <div className="my-10">
        <p className="text-center text-sky-500 text-3xl font-bold">
          Out Services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/vsCzxsk/banner.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-center">
              Specialized Cleaning Solutions
            </h2>
            <p>
              At [Your Company Name], we go beyond the basics to offer
              specialized cleaning services tailored to your unique
              requirements. From carpet and upholstery cleaning to window and
              air duct services, our expert team ensures a comprehensive
              approach to enhance the overall cleanliness of your home.
              Experience a personalized touch in every nook and cranny, leaving
              your living spaces not just clean, but revitalized.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/vsCzxsk/banner.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">Move-In/Move-Out Cleaning</h2>
            <p>
              Make your move stress-free with our detailed move-in and move-out
              cleaning services. Whether {"you're"} settling into a new home or
              preparing to hand over the keys, our team ensures a thorough and
              impeccable cleaning process. We focus on leaving behind a space
              that is not only clean but welcoming, providing you with a fresh
              start in your new or vacated home.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/vsCzxsk/banner.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold text-center">
              Post-Construction Cleanup
            </h2>
            <p>
              Navigate the dust and debris of construction projects seamlessly
              with our Post-Construction Cleanup service. Our team specializes
              in removing the aftermath of construction, ensuring a sparkling
              clean and safe environment for you to enjoy your newly renovated
              or built spaces. Let us handle the cleanup, so you can relish the
              beauty of your transformed home.
            </p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
