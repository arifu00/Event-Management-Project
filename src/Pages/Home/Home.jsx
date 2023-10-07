import Contact from "../../Components/ContactUs/Contact";
import Feedback from "../../Components/Feedback/Feedback";
import Services from "../../Components/Service/Services";
import Banner from "../../Components/Share_Components/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Feedback></Feedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;