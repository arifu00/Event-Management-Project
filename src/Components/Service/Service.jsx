import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, category, img,short_detail } = service;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Link to={`/services/${id}`}>
        <div data-aos="fade-up">
          <div className="relative flex  flex-col rounded-xl h-[500px] bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
              <img
                src={img}
                alt={category}
                className="w-full  rounded-lg h-80"
              />
            </div>
            <div className="p-6">
              <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {category}
              </h4>
              <p className="text-base font-normal">
                {short_detail.slice(0,220)}
              </p>
              <div className="text-right">
                <Link to={`/services/${id}`}>
                  <button className="outline outline-pink-500  px-2 py-2 rounded-lg text-sm hover:text-[#fff] font-normal hover:bg-blue-400">
                    More Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Service;
