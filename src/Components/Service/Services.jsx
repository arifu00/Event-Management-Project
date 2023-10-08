import {  useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const servicesData = useLoaderData();
  // console.log(servicesData);
  return (
    <div>
      <div className="container md:mx-auto mt-12 px-5">
        <h2 className="text-2xl md:text-4xl font-medium md:font-bold text-center underline text-[#1e2b3a] ">
          Our Services
        </h2>
        <h5 className="text-center mb-12 text-2xl font-semibold mt-2">
          It’s simple. <br /> You have an event to plan and <br />
          <span className="text-[#FCB41E]">we have the solutions</span>
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
