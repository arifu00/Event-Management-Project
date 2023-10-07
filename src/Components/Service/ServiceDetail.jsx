import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const [details, setDetails] = useState({});
  const { img, long_detail, title } = details;

  const { id } = useParams();
  // console.log(id);

  const serviceDetail = useLoaderData();
  //   console.log(serviceDetail);

  useEffect(() => {
    const findService = serviceDetail.find((service) => service.id === id);
    setDetails(findService);
  }, [id, serviceDetail]);
  console.log(details);
  return (
    <div>
      <div className="container mx-auto px-5 mt-12 mb-12">
        <div className="relative flex w-full flex-col rounded-xl bg-slate-200 bg-clip-border text-gray-700 shadow-lg">
          <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              className="h-[30vh] md:h-[50vh] lg:h-[86vh] w-full"
              src={img}
              alt={title}
            />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            <button
              className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="p-6">
            <div className="mb-3">
              <h5 className="block  text-xl md:text-2xl lg:text-4xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                {title}
              </h5>
              <h6 className="text-xl md:text-2xl lg:text-4xl font-medium text-center underline my-10">
                Our Package
              </h6>
            </div>
            {/* pack */}
            <div className="  mt-8  flex flex-wrap items-center  justify-center  ">
              <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container   ">
                <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
                  <h1 className="text-gray-500 font-semibold text-xl ">
                    Normal
                  </h1>
                  <div className="text-center py-4 px-7">
                    <h1 className="text-gray-700 text-4xl font-black">
                      $199.00
                    </h1>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="text-center mt-3">
                    <ul>
                      <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            ></path>
                          </svg>
                        </span>
                        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                          5 team members
                        </p>
                      </li>
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
                <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-purple-500 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
                  <h1 className="text-purple-200 font-semibold text-xl ">
                    Popular
                  </h1>
                  <div className="text-center py-4 px-7">
                    <h1 className="text-white text-4xl font-black">$399.00</h1>
                    <p className="text-white text-opacity-50 mt-2"></p>
                  </div>
                  <div className="h-px bg-purple-400"></div>
                  <div className="text-center mt-3">
                    <p className="text-sm text-white text-opacity-80">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </div>
                  <button
                    className="block w-full mt-4 select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    Book Now
                  </button>
                </div>
                <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
                  <h1 className="text-gray-500 font-semibold text-xl ">
                    Standard
                  </h1>
                  <div className="text-center py-4 px-7">
                    <h1 className="text-gray-700 text-4xl font-black">
                      $899.00
                    </h1>
                    <p className="text-gray-500  mt-2">Monthely</p>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="text-center mt-3">
                    <p className="text-sm text-gray-400">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
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
          <div className="p-6 pt-3">
            <div className="text-right">
              <Link to="/">
                <button className="px-4 py-3 bg-red-500 my-4 rounded-lg text-white text-xl font-medium">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
