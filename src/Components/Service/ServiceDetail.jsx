import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import PackageDetail from "./PackageDetail";

const ServiceDetail = () => {
  const [details, setDetails] = useState({});
  const { img, title } = details;

  const { id } = useParams();
  // console.log(id);

  const serviceDetail = useLoaderData();
  //   console.log(serviceDetail);

  useEffect(() => {
    const findService = serviceDetail.find((service) => service.id === id);
    setDetails(findService);
  }, [id, serviceDetail]);
  // console.log(details);

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
            <PackageDetail></PackageDetail>
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
