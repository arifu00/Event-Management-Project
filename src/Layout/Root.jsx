
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Share_Components/Nav';
import Footer from '../Components/Share_Components/Footer';

const Root = () => {
    return (
        <div className='font-fontPoppins'>
           <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;