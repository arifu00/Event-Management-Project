import { useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { AiFillCheckCircle } from "react-icons/ai";


const PackageDetail = () => {
  const [packageList, setPackageList] = useState([]);
  useEffect(() => {
    fetch("/packageDetails.json")
      .then((res) => res.json())
      .then((data) => setPackageList(data));
  }, []);
  console.log(packageList);

  return (
    <div>
      {/* pack */}
      <div className="  mt-8  flex flex-wrap items-center  justify-center  ">
        <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container w-9/12   ">
          {/* first pack  */}
          <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full  sm:w-full bg-white z-30">
            <h1 className="text-gray-500 font-semibold text-xl ">Normal</h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-gray-700 text-4xl font-black">$199.00</h1>
            </div>
            <div className="h-px bg-gray-200"></div>
            <div className="text-center mt-3">
              <ul className="text-xl font-semibold">
                {packageList.map((pList) => (
                  <h5 className="flex gap-5 items-start" key={pList.id}>
                    <FcCheckmark></FcCheckmark> {pList.category}
                  </h5>
                ))}
              </ul>
            </div>
            <button
              className="block mt-4  w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Book Now
            </button>
          </div>
          {/* second pack  */}
          <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full  sm:w-full bg-purple-500 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
            <h1 className="text-purple-200 font-semibold text-xl ">Popular</h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-white text-4xl font-black">$399.00</h1>
              <p className="text-white text-opacity-50 mt-2"></p>
            </div>
            <div className="h-px bg-purple-400"></div>
            <div className="text-center mt-3">
              <ul className="text-lg font-semibold text-[#fff]">
                {packageList.map((pList) => (
                  <h5 className="flex gap-5 items-start" key={pList.id}>
                    <AiFillCheckCircle></AiFillCheckCircle> {pList.category}
                  </h5>
                ))}
              </ul>
            </div>
            <button
              className="block w-full mt-4 select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Book Now
            </button>
          </div>
          {/* 3rd pack  */}
          <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full  sm:w-full bg-white z-30">
            <h1 className="text-gray-500 font-semibold text-xl ">Standard</h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-gray-700 text-4xl font-black">$899.00</h1>
            </div>
            <div className="h-px bg-gray-200"></div>
            <div className="text-center mt-3">
              <ul className="text-lg font-semibold ">
                {packageList.map((pList) => (
                  <h5 className="flex gap-5 items-start" key={pList.id}>
                    <AiFillCheckCircle></AiFillCheckCircle> {pList.category}
                  </h5>
                ))}
              </ul>
            </div>
            <button
              className="block mt-4 w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
