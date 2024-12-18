import React,{useState, useEffect} from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function Layout() {
  const location = useLocation();
  const hide = location.pathname === '/login' || location.pathname === '/signup'

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (

    <>
    {isLoading? (<Loader/>) : (<div>
      <div className="bg">
        {!hide && <Navbar />}
        <Outlet />
      </div>
      {!hide && <Footer />}
      </div>)} 
      
       
    </>
  );
}

export default Layout;
