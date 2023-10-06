import { NavLink } from "react-router-dom";
import banner1 from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero md:h-[80vh]"
        style={{
          backgroundImage: `url(${banner1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md py-10">
            <h1 className="md:mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">
              We Create <br />
              You Celebrate
            </h1>
            <p className="mb-5 text-sm md:text-lg">
            We specialize in planning a wide range of events, including weddings, corporate gatherings, birthday parties, anniversaries, and more.
            </p>
            <button className="px-4 py-3 rounded-lg text-lg font-semibold hover:text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "><NavLink to='/register'>
                Register Now
                </NavLink></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
