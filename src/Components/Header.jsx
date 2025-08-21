import React, { useEffect, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';



const navLinks = ["Home", "Services", "About", "Contact Us"];

function Header() {
      const [menuOpen, setMenuOpen] = useState(false);
      const navigate=useNavigate();

      useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  const [scrollTarget, setScrollTarget] = useState(null);



//   const handleNavClick = (id) => {
//     if (location.pathname !== '/')
//      {
      
      
//     }
//   const el = document.getElementById(id);
//   if (el) {
//     el.scrollIntoView({ behavior: 'smooth' });
//     setMenuOpen(false); 
//   }
// };


 const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      setScrollTarget(id); // Save ID to scroll to after redirect
      navigate('/'); // Redirect to home
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full flex justify-between items-center px-[20px] md:px-[100px]  py-[15px] bg-secondary select-none">
      <a
     
     
     target="_blank"
    
  >

      <img
     
        className="md:w-[200px] w-[80px]"
        src="/Images/logo-2.png"
        alt="Logo"
      />
      </a>


      <div className=" hidden md:flex gap-[30px]">
        {navLinks.map((link, index) => (
          <span
            key={index}
            onClick={() => handleNavClick(link)}
            className="text-primary font-DMSans text-[20px] font-normal cursor-pointer"
          >
            {link}
          </span>
        ))}
      </div>
<div className=' md:block hidden'>


      <div className='flex flex-row items-center justify-center gap-[12px] bg-primary rounded-full text-white px-[20px] py-[12px]  ' onClick={()=>{
        handleNavClick("Schedule")
      }}>
       
          <LuPhoneCall/>
    
       
          <span>9812795100</span> 
      </div>
</div>
      {/* Mobile Hamburger */}
      <div className="block md:hidden">
        <HiMenu
          className="text-primary text-[30px] cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-60 z-40"></div>

          <div
            className={`
          fixed top-0 right-0 h-full w-[65%] bg-secondary z-50 flex flex-col gap-8 shadow-lg
          transform ${menuOpen ? "translate-x-0" : "translate-x-full"} 
          transition-transform duration-300 ease-in-out
        `}
          >
            <HiX
              className="absolute top-5 right-5 text-primary text-[35px] cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />

            <div className=" flex flex-col ml-6 mt-[80px] gap-[20px]">
              {navLinks.map((link, index) => (
                <span
                  key={index}
                  
                  onClick={() => handleNavClick(link)}
                  className="text-primary font-DMSans text-[22px] font-normal cursor-pointer"
                >
                  {link}
                </span>
              ))}
          <div className=' md:hidden block'>


      <div className='flex flex-row items-center justify-center gap-[12px] w-fit bg-primary rounded-full text-white px-[15px] py-[6px]  ' onClick={()=>{
        handleNavClick("Schedule")
      }}>
       
          <LuPhoneCall/>
    
       
          <span className=''>9812795100</span> 
      </div>
</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header
