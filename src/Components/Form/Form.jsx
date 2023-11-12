
import { useEffect, useState } from "react";

const Form = () => {
  const [services, setServices] = useState([]);
  const [roomes, setRoomes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/bedrooms`)
      .then((res) => res.json())
      .then((data) => {
        setRoomes(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const serviceRequried = form.serviceRequried.value;
    const phoneNumber = form.phoneNumber.value;
    const bedroom = form.bedroom.value;
    const bathroom = form.bathroom.value;
    const postCode = form.postCode.value;
    const submitInfo = {
      name,
      email,
      phoneNumber,
      serviceRequried,
      bedroom,
      bathroom,
      postCode,
    };
    console.log(submitInfo);
    form.reset();
  };
  return (
    <div className="my-20">
      <form action="" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text flex justify-center items-center gap-1 font-semibold text-sky-500">
                  Name <span className="text-red-500 text-[18px]">*</span>
                </span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input rounded-lg input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-sky-500 flex justify-center items-center gap-1">
                  Email Address{" "}
                  <span className="text-red-500 text-[18px]">*</span>
                </span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className=" input rounded-lg input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-sky-500 flex justify-center items-center gap-1">
                  Phone Number{" "}
                  <span className="text-red-500 text-[18px] ">*</span>
                </span>
              </label>
              <input
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                className=" input rounded-lg input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="">
            <div>
              <label className="label">
                <span className="label-text font-semibold text-sky-500 flex justify-center items-center gap-1">
                  Service Requried
                </span>
              </label>
              <select
                name="serviceRequried"
                id=""
                className=" w-full input input-bordered rounded-lg overflow-y-scroll"
              >
                {services.map((service) => (
                  <option key={service._id}>{service.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold text-sky-500 flex justify-center items-center gap-1">
                  Bedroom
                </span>
              </label>
              <select
                name="bedroom"
                id=""
                className=" w-full input input-bordered  rounded-lg"
              >
                {" "}
                {roomes.map((room) => (
                  <option key={room._id}>{room.value}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold text-sky-500 ">
                  Bathroom
                </span>
              </label>
              <select
                name="bathroom"
                id=""
                placeholder="select"
                className=" w-full input input-bordered rounded-lg"
              >
                {roomes.map((room) => (
                  <option key={room._id}>{room.value}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-sky-500 flex justify-center items-center gap-1">
              Post code
            </span>
          </label>
          <input
            name="postCode"
            type="text"
            placeholder="Post Code"
            className=" input rounded-lg input-bordered w-full"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="p-3 mt-5 uppercase bg-blue-400 text-white rounded"
          >
            Get an exact quote
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
