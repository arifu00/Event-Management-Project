import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarEvent, BsClock } from "react-icons/bs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {

    useEffect(() => {
        AOS.init();
      }, []);
    
  return (
    <div>
      <div className="bg-[#F5F5F6] container mx-auto px-10 py-12 my-12">
        <h2 className="text-2xl font-bold text-center underline mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div data-aos="fade-up-right" className="bg-white  rounded-3xl shadow-2xl mx-auto p-10">
            <p className="mx-auto w-1/4 text-[#FF9B96] text-3xl mb-5">
              <FaLocationDot></FaLocationDot>
            </p>
            <h5 className="text-xl font-semibold mb-5 text-center text-[#272530]  ">
              Address
            </h5>
            <p className="text-[#676767] text-center text-lg font-semibold">
              E-Management <br />
              Dhaka, Bangladesh
            </p>
          </div>
          <div  data-aos="zoom-out" className="bg-white rounded-3xl shadow-2xl mx-auto p-10">
            <p className="mx-auto w-1/4 text-[#FF9B96] text-3xl mb-5">
              <AiOutlineMail></AiOutlineMail>
            </p>
            <h5 className="text-xl font-semibold mb-5 text-center text-[#272530]">
              Phone & E-mail
            </h5>
            <p className="text-[#676767] text-center text-lg font-semibold">
              Phone: <span className="italic text-[#FCB41E]">01641-660000</span>{" "}
              <br />
              mail: <br />
              <span className="text-[#FCB41E]"> e@management.com </span>
            </p>
          </div>
          <div  data-aos="zoom-out-up" className="bg-white  rounded-3xl shadow-2xl mx-auto p-10">
            <p className="mx-auto w-1/4 text-[#FF9B96] text-3xl mb-5">
              <BsClock></BsClock>
            </p>
            <h5 className="text-xl font-semibold mb-5 text-center text-[#272530]">
              Open Hours
            </h5>
            <p className="text-[#676767] text-center text-lg font-semibold">
              Monday – Friday <br /> 8.00 am – 5.00 pm <br /> Weekend Closed
            </p>
          </div>
          <div data-aos="fade-up-left" className="bg-white  rounded-3xl shadow-2xl mx-auto p-10 ">
            <p className="mx-auto w-1/4 text-[#FF9B96] text-3xl mb-5">
              <BsCalendarEvent></BsCalendarEvent>
            </p>
            <h5 className="text-xl font-semibold mb-5 text-center text-[#272530]">
              Sessions
            </h5>
            <p className="text-[#676767] text-center text-lg font-semibold">
              Mornings, 8 am – 12 noon <br />
              Afternoons, 1 pm – 5 pm <br />
              Full Day, 8 am – 5 pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
