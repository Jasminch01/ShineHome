
import About from "../../Components/About/About";
import Form from "../../Components/Form/Form";

import Service from "../../Components/Service/Service";


const Home = () => {
  return (
    <div>
      <Service></Service>
      <div>
        <p className="text-center text-3xl font-bold text-sky-500">Afer Services Photos</p>
        <div className="md:w-1/2 mx-auto">
          <p className="text-center">
            At ShineHome we take pride in transforming houses into meticulously
            clean and inviting homes. Let our expert team handle the cleaning,
            so you can focus on what matters most. Elevate your living spaces
            with our comprehensive and specialized services.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:w-[80%] mx-auto my-10">
          <div className="">
            <img
              className="rounded bg-cover object-cover  w-full  md:h-96"
              src="https://i.ibb.co/G2j3N32/371538856-258782526779209-6395254326969581677-n.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded bg-cover object-cover  w-full  md:h-96"
              src="https://i.ibb.co/sg3pjzr/370229529-1047395529627426-3146268392045766140-n.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded bg-cover object-cover w-full  md:h-96"
              src="https://i.ibb.co/DYS5qqc/373459317-680199404215787-1398689710154093893-n.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded bg-cover object-cover  w-full  md:h-96"
              src="https://i.ibb.co/hLCb8mm/385520476-666273525313135-6907312204029216496-n.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded bg-cover object-cover  w-full  md:h-96"
              src="https://i.ibb.co/wBmHPjj/385530684-916245159552538-6028996942116147883-n.jpg"
              alt=""
            />
          </div>
          <div className=" ">
            <img
              className="rounded bg-cover object-cover  w-full  md:h-96"
              src="https://i.ibb.co/DVTx5TD/385533452-223844757251186-113632624979961177-n.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded bg-cover object-cover  w-full  md:h-96"
              src="https://i.ibb.co/q7MCgR8/394707459-717568363574111-8417360135735479615-n.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded bg-cover object-cover w-full  md:h-96"
              src="https://i.ibb.co/cbvhWS0/396760447-2293119544231333-4776704445812488759-n.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded bg-cover object-cover w-full  md:h-96"
              src="https://i.ibb.co/3Nx9NqV/398333835-3156385784668998-1415138700233936304-n.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded bg-cover object-cover  w-full  md:h-96"
              src="https://i.ibb.co/cFGR0DM/398342061-270756539298381-2602559160872464969-n.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded bg-cover object-cover  w-full  md:h-96"
              src="https://i.ibb.co/VSJHWKP/398491164-304463795811214-5757020603072236832-n.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded bg-cover object-cover  w-full  md:h-96"
              src="https://i.ibb.co/tXNNmcy/396709205-751509833455149-581609659435599025-n.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded bg-cover object-cover  w-full  md:h-96"
              src="https://i.ibb.co/pQPjR2j/385546821-878924506847461-4553328295802131016-n.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <About></About>
      <Form></Form>
    </div>
  );
};

export default Home;
