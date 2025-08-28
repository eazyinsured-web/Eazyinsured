import React, { useEffect, useRef, useState } from 'react'
import Header from '../../Components/Header'
import { MdLocalPhone, MdPercent } from "react-icons/md";
import { CiAlarmOn, CiCalendar } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { emailjsConfig } from '../../config/emailjs';

import { HiX } from "react-icons/hi";

import {  Loader2 } from 'lucide-react';
import { FcBusinessman, FcDisclaimer, FcOnlineSupport, FcSmartphoneTablet, FcUnlock } from "react-icons/fc";


import { FcGlobe } from "react-icons/fc";
import { Link } from 'react-router-dom';
import Fotter from '../../Components/Fotter';
import TestimonialSlider from '../../Components/TestimonialSlider';
import Form from '../../Components/Form';
import { IoMdCheckmarkCircleOutline, IoMdPin } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};





const companies = [
  "/Images//niva-bhupa.png",
  "/Images//star.png",
  "/Images//care.png",
  "/Images//mainpal.png",
  "/Images//national.avif",
  "/Images//new-india.png",
  "/Images//united.jpeg",
  "/Images//sompo.webp",
  "/Images//iffco.png",
  "/Images//digit.webp",
  "/Images//lombard.webp",
  "/Images//tata.png",
  "/Images//tata-aia.jpg",
  "/Images//prudu.jpeg",
  "/Images//max-life.png",
  "/Images//aditya.png",
];



const services = [
  {
    title: "Health Insurance",
    shortDesc: "Personalized health insurance for individuals, families & senior citizens — with OPD, maternity, and cashless claims.",
    longDesc:
      "We go beyond basic medical coverage to offer you a complete health and wellness ecosystem. Whether you’re a young professional, a growing family, or a senior citizen, our plans are designed to offer peace of mind through every phase of life. Experience seamless healthcare with cashless hospitalization, OPD coverage, wellness rewards, and personalized care — all under one plan.",
    image: "/Images/health.jpg",
    points: [
      "Covers individuals, families, and senior citizens",
      "Includes OPD, maternity, and daycare treatments",
      "Cashless hospitalization at 10,000+ network hospitals",
      "Add-ons for mental health, alternative medicine (Ayush), and wellness rewards",
      "Annual health checkups and chronic illness support"
    ]
  },
  {
    title: "Life Insurance",
    shortDesc: "Secure your family’s financial future with flexible life cover & investment-linked plans.",
    longDesc:
      "Our Life & Term Insurance policies offer comprehensive coverage and future planning. Choose between term policies for high protection or ULIPs for life cover with investment growth. Riders for critical illness, accidental death, and flexible payout options ensure your family is secured, even when you’re not around.",
    image: "/Images/Life.jpg",
    points: [
      "Flexible term & ULIP options",
      "Affordable premiums, high cover",
      "Accidental death and illness riders",
      "Tax benefits under 80C and 10(10D)",
      "Lump sum or staggered income payouts"
    ]
  },
  {
    title: "Vehicle Insurance",
    shortDesc: "Instant motor insurance with zero paperwork. Covers private & commercial vehicles.",
    longDesc:
      "From bikes to SUVs and commercial vehicles, our motor insurance offers quick coverage with zero paperwork. Enjoy peace of mind with cashless garage repairs, roadside assistance, and add-ons like Zero Depreciation and Engine Protection — all with instant online issuance.",
    image: "/Images/vechicle.webp",
    points: [
      "Covers all vehicles — private & commercial",
      "Instant digital policy, no paperwork",
      "Zero Depreciation & Engine Protect add-ons",
      "24x7 Roadside Assistance",
      "Cashless claims at 7,000+ garages"
    ]
  }
];

const steps = [
  {
    number: 1,
    image:<FcDisclaimer/>,
    title: "97.6% Claim Settlement",
    desc: "Fast, fair, and transparent"
  },
  {
    number: 2,
     image:<FcGlobe/>,
    title: "Pan-India Reach",
    desc: "Serving clients in 200+ cities"
  },
  {
    number: 3,
     image:<FcUnlock/>,
    title: "Data-Backed Customization",
    desc: "Policies crafted using AI-powered risk profiling"
  },
  {
    number: 3,
     image:<FcOnlineSupport/>,
    title: "24/7 Claim Support",
    desc: "Because emergencies don't wait"
  },
  {
    number: 3,
     image:<FcBusinessman/>,
    title: "Certified Experts",
    desc: "IRDAI licensed advisors, not bots"
  },
  {
    number: 3,
     image:<FcSmartphoneTablet/>,
    title: "100% Digital Onboarding",
    desc: "No agent chasing, no paperwork"
  },
];





function Home() {




 useEffect(() => {
    // Extract target id from state if passed via navigation
    const hash = window.history.state?.usr?.scrollTarget;
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  city: "",
  address: "",
  service: "",
  remarks: "",
});

const [isLoading, setIsLoading] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        address: formData.address,
        service: formData.service,
        remarks: formData.remarks,
        time: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'medium',
          timeStyle: 'short'
        })
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        toast.success('Thank you! Your inquiry has been submitted successfully. We will contact you soon.');
        
        // Reset form after successful submission
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          address: "",
          service: "",
          remarks: "",
        });

        // Reset success state after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Sorry, something went wrong. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <Header />
      {/* Launch Your Hong Kong Business */}

      <div id="Home"
  className="relative select-none bg-[url('/Images/home-image.png')]  bg-cover bg-center"
       >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-0  " />

        <div className="relative z-10  px-[20px] md:px-[100px]">
          <div className="md:flex justify-between gap-[30px] md:py-[80px] py-[50px]">
            <div className="md:w-[40%] text-white font-DMSans md:text-[40px] text-[22px] md:text-left text-center font-medium leading-[1.3] md:mt-[-5px] mt-[-15px]">
            <span className='text-[#39dc75] font-bold'>Affordable, reliable,</span>  and <span className='text-[#39dc75] font-bold'>personalized insurance plans </span>— protecting what matters most.
               <h4 className="text-white md:py-8 py-6 font-DMSans md:text-[18px] text-[12px] md:mt-0  md:text-left text-center font-Light leading-[1.3]">
              We go beyond policies. <br/> We offer peace of mind, tailored protection, and a promise — that when life changes, you're covered.
              </h4>
              <a
              href='https://wa.me/919812795100'
            
                className="bg-primary cu my-10 text-white hover:bg-[#39dc75] text-center  w-fit rounded-full font-DMSans text-[16px] font-normal px-[20px] md:mt-6 py-[12px] cursor-pointer"
              >
           Contact Us
              </a>
             
            </div>
            {/* form */}
        <div className="md:w-[40%] w-full md:mt-0 mt-8 flex justify-center items-center">
  <motion.div
     initial={{ rotateX: -90, opacity: 0, y: -10 }}
    animate={{ rotateX: 0, opacity: 3, y: 0 }}
    transition={{ duration: 1.1, ease: "easeOut" }}
   className="bg-white shadow-xl rounded-2xl md:p-7 p-4 w-full max-w-md border border-gray-200">
    <h3 className="text-[22px] font-semibold text-center mb-4 text-primary">
     Get free suggestion
    </h3>

    <form onSubmit={handleSubmit} className="flex flex-col gap-2">

      {/* Grid Layout for Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-[14px] focus:outline-primary"
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Enter your Phone No."
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-[14px] focus:outline-primary"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter your Email ID"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-[14px] focus:outline-primary"
          required
        />

        {/* City */}
        <input
          type="text"
          name="city"
          placeholder="Enter your City"
          value={formData.city}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-[14px] focus:outline-primary"
          required
        />
      </div>

      {/* Address (full width) */}
      <textarea
        name="address"
        placeholder="Enter your Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-[14px] focus:outline-primary resize-none"
        rows="2"
        required
      ></textarea>

      {/* About Inquiry */}
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-[14px] focus:outline-primary"
        required
      >
        <option value="">Select Inquiry Type</option>
        <option value="life">Life Insurance</option>
        <option value="health">Health Insurance</option>
        <option value="vehicle">Vehicle Insurance</option>
      
      </select>

      {/* Remarks */}
      <textarea
        name="remarks"
        placeholder="Enter your Remarks"
        value={formData.remarks}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-[14px] focus:outline-primary resize-none"
        rows="3"
      ></textarea>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className={`${
          isSubmitted 
            ? 'bg-green-500' 
            : isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-primary hover:bg-[#39dc75]'
        } text-white rounded-full px-6 py-2 text-[16px] font-medium transition flex items-center justify-center gap-2`}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : isSubmitted ? (
          <>
            <IoMdCheckmarkCircleOutline className="w-5 h-5" />
            Sent Successfully!
          </>
        ) : (
          'Get Quote'
        )}
      </button>
    </form>
  </motion.div>
</div>


          </div>
        </div>

      
      </div>


      {/* brands trust us */}
 

<div className="my-16 px-6 md:px-20">
  <h2 className="text-center text-2xl md:text-4xl font-semibold text-tertiary mb-6">
    Trusted by Leading Insurance Companies
  </h2>
  <p className="text-center text-gray-600 md:text-lg mb-10">
    We proudly partner with India’s top insurance providers to bring you the best plans.
  </p>

  {/* Desktop: Single marquee */}
  <div className="relative overflow-hidden hidden md:flex">
    <div className="flex animate-marquee space-x-12">
      {companies.map((logo, index) => (
  <img
    key={index}
    src={logo}
    alt="Insurance Company Logo"
    className="h-20 md:h-32 object-contain"
  />
))}
    </div>
  </div>

  {/* Mobile: 3 horizontal moving rows */}
  <div className="space-y-6 md:hidden">
    {[0, 1, 2].map((row) => (
      <div key={row} className="relative flex overflow-hidden">
        <div
          className={`flex space-x-8  ${
            row % 2 === 1 ? "" : ""
          }`}
          style={{
              animation: row % 2 === 1 ? "marquee-reverse 8s linear infinite" : "marquee 8s linear infinite",
          }}
        >
          {companies.slice(row * 5, row * 5 + 5).map((logo, index) => (
            <img
              key={`mobile-${row}-${index}`}
              src={logo}
              alt="Insurance Company Logo"
              className="h-20 object-contain"
            />
          ))}
        </div>
      </div>
    ))}
  </div>
</div>



  
  


      {/* What's Included in Our Secretarial Services? */}

    <div
  id="Services"
  className="services flex flex-col justify-center items-center md:py-[100px] py-[50px] md:px-[120px] px-[20px] select-none"
>
  {/* Heading Section */}
  <div className="flex flex-col justify-center items-center gap-[12px]">
    <h2 className="md:text-[48px] text-[26px] font-DMSans font-medium text-tertiary text-center">
      What We Provide
    </h2>
    <p className="md:w-[70%] text-center md:text-[18px] text-[14px] font-DMSans font-light text-[#666666]">
     Customer also advise us for getting free health insurance in all PRIVATE and GOVT SCHEMES
    </p>
  </div>

  {/* Services Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:pt-[80px] pt-[50px] w-full max-w-7xl">
    {services.map((service, index) => (
      <Link
        to={`/service`}
        state={{ item: service }}
        key={index}
        className="flex flex-col gap-3 bg-white rounded-[20px] shadow-md overflow-hidden hover:shadow-lg transition"
      >
        <div className="w-full overflow-hidden rounded-[20px]">
          <img
            className="w-full h-[180px] md:h-[240px] object-cover transition-transform duration-500 hover:scale-110"
            src={service.image}
            alt={service.title}
          />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-[18px] md:text-[22px] font-medium text-tertiary font-DMSans">
            {service.title}
          </h3>
          <span className="text-[13px] md:text-[16px] text-[#666666] font-DMSans">
            {service.shortDesc}
          </span>
        </div>
      </Link>
    ))}
  </div>
</div>


      {/* call now buttons */}
   <div className="flex flex-col justify-center gap-[20px] items-center md:mx-[120px]  md:pb-[100px] pb-[50px] px-4">
  {/* Call Now Box */}
  <motion.div  className="bg-primary shadow-lg flex flex-col md:flex-row justify-between w-full md:mx-[120px] md:px-[90px] px-6 rounded-[20px] py-[30px] items-center gap-6">
    <div className="flex flex-col md:w-[60%] w-full gap-[15px] text-center md:text-left">
      <h2 className="text-[24px] md:text-[40px] font-bold text-white">Click To Call Now</h2>
      <p className="text-[16px] md:text-[20px] text-white">
        Click now to call our executive, and we'll promptly get connected to you instantly. Your time and convenience is our priority!
      </p>
    </div>
    <a
          href="tel:+919812795100"
        
className="flex justify-center items-center border border-white rounded-[20px] w-full md:w-auto">
      <button
        className="w-full md:w-auto px-6 py-3 text-white text-[18px] md:text-[20px] rounded-[20px] transition-all duration-300 hover:bg-green-500 hover:text-white"
        type="button"
      >
        Call Now
      </button>
    </a>
  </motion.div>

  {/* WhatsApp Box */}
  <div className="bg-[#39dc75] shadow-lg flex flex-col md:flex-row justify-between w-full md:mx-[120px] md:px-[90px] px-6 rounded-[20px] py-[30px] items-center gap-6">
    <div className="flex flex-col md:w-[60%] w-full gap-[15px] text-center md:text-left">
      <h2 className="text-[24px] md:text-[40px] font-bold text-white">Click To Chat On WhatsApp</h2>
      <p className="text-[16px] md:text-[20px] text-white">
        Click now to chat now on WhatsApp, and we'll promptly reach out to you. Your convenience is our priority!
      </p>
    </div>
    <a
      href="https://wa.me/919812795100" className="flex justify-center items-center border border-white rounded-[20px] w-full md:w-auto">
      <button
        className="w-full md:w-auto px-6 py-3 text-white text-[18px] md:text-[20px] rounded-[20px] transition-all duration-300 hover:bg-primary hover:text-white"
        type="button"
      >
        Chat Now
      </button>
    </a>
  </div>
</div>
{/* about us */}
<div id='About' className=" About flex flex-col md:flex-row items-center gap-12 md:gap-24 my-[50px] md:mx-[120px] mx-[20px] ">

  {/* Left Content */}
  <div className="flex-1 h-full flex flex-col justify-center">
    {/* Tag */}
    <div className="bg-gradient-to-r from-[#0a4b81] via-[#13609f] to-[#22af56] px-6 py-3 w-fit rounded-full text-white shadow-lg">
      <span>About Us</span>
    </div>

    {/* Heading */}
    <h2 className="text-[22px] md:text-[32px] font-bold text-tertiary font-DMSans py-6 leading-relaxed">
      We are running organisation with Group of Trusted and leading certified IRDA advisor
    </h2>

    {/* Points */}
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className='w-[22px] h-[22px]'>
        <IoMdCheckmarkCircleOutline className="text-[22px] text-[#22af56]" />

        </div>
        <span className="text-[19px]"> Clear Communication</span>
      </div>
      <div className="flex items-center gap-4">
         <div className='w-[22px] h-[22px]'>
        <IoMdCheckmarkCircleOutline className="text-[22px] text-[#22af56]" />

        </div>
        <span className="text-[19px]"> Transparency in Services</span>
      </div>
      <div className="flex items-center gap-4">
        <div className='w-[22px] h-[22px]'>
        <IoMdCheckmarkCircleOutline className="text-[22px] text-[#22af56]" />

        </div>
        <span className="text-[19px]"> Building Trust through Relationships</span>
      </div>
    </div>
  </div>

  {/* Right Image */}
  <div className="flex-1 h-full">
    <div className="overflow-hidden rounded-2xl shadow-xl group">
      <img
        src="/Images/about.jpg"
        alt="About Us"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  </div>
</div>


     {/* why people trust us */}
      <div
       
        className="bg-[#F6F6F6]  flex flex-col gap-[70px] md:py-[100px] py-[50px] md:px-[100px] px-[20px] select-none"
      >
        <div className="flex flex-col justify-center items-center gap-[12px]">
          <h2 className="md:text-[48px] text-[26px] font-DMSans font-medium text-center text-tertiary">
            Why People Trust Us
          </h2>
          <p className=" md:w-[77%] text-center md:text-[18px] text-[14px] font-DMSans font-Light  text-[#666666]">
            Comprehensive legal service, expertly delivered. We provide thorough
            support and guidance for all your legal matters, handled with utmost
            care.
          </p>
        </div>

        <div className="flex flex-wrap justify-between md:gap-y-[30px] gap-y-[20px]">
          {steps.map((step, index) => (
            <div key={index} className="flex   md:gap-[28px] gap-[8px] md:w-[400px]">
              <div className=" md:w-[30px]">
                <div className="  rounded-full text-[45px]  md:w-[48px]  md:h-[48px] w-[35px] h-[35px]  object-cover flex justify-center items-center">
                  {step.image}
                </div>
              </div>
              <div>
                <h3 className="md:text-[24px] text-[18px] font-medium text-tertiary font-DMSans">
                  {step.title}
                </h3>
                <p className="text-[#666666] md:text-[16px] text-[12px] font-DMSans">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

<Form />

{/* testimonial */}
        <div  className='my-16 md:mx-[100px] mx-[10px] '>
  <h2 className="md:text-[48px]  text-[26px] md:mb-10 mb-0 font-DMSans font-medium text-center text-tertiary">
          What Our Customer Say
          </h2>
<TestimonialSlider />   
        </div>



        {/* map */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-[40px] md:mx-[120px] mx-[20px]">
  
  {/* Left Content */}
  <div className="flex-1 h-full flex flex-col justify-center">
    {/* Tag */}
    {/* <div className="bg-gradient-to-r from-[#0a4b81] via-[#13609f] to-[#22af56] px-6 py-3 w-fit rounded-full text-white shadow-lg">
      <span>Contact Us</span>
    </div> */}

    {/* Heading */}
    <h2 className="text-[23px] md:text-[32px] font-bold text-tertiary font-DMSans py-6 leading-relaxed">
      Get in touch with Eazyinsured – We’re here to help you anytime!
    </h2>

    {/* Contact Details */}
    <div  className="flex flex-col gap-6">
      
      {/* Phone */}
      <div className="flex  items-center gap-4">
          <div className='  md:w-[45px] w-[30px]'>
        <MdLocalPhone className="text-[26px]  w-fit text-[#22af56]" />

        </div>
      <span className="md:text-[18px] text-[14px]">
          +91 9812795100 </span>
      </div>

      {/* Email */}
      <div className="flex items-center gap-4">
          <div className=' md:w-[45px] w-[30px]'>
        <AiOutlineMail className="text-[26px]  text-[#22af56]" />

        </div>
        <span className="md:text-[18px] text-[14px]">
          support@eazyinsured.com</span>
      </div>

      {/* Address */}
      <div className="flex items-center gap-4">
        <div className=' md:w-[45px] w-[30px]'>
        <IoMdPin className="text-[26px]  text-[#22af56]" />

        </div>
        <span className="md:text-[18px] text-[14px]">
          272 best deal insurance, near ankit filling station. Nahar bye pass . Shanti nagar panipat 132103
        </span>
      </div>
    </div>
  </div>

  {/* Right Side - Google Map */}
  <div className="flex-1 my-[40px]">
  <div className="on rounded-2xl shadow-xl h-[350px]">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.514326235414!2d76.96184337539254!3d29.39777817472647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e6f6c44f6b0d5%3A0x3e1a3e049f7a0c93!2s272%20Best%20Deal%20Insurance%2C%20Near%20Ankit%20Filling%20Station%2C%20Nahar%20Bypass%2C%20Shanti%20Nagar%2C%20Panipat%2C%20Haryana%20132103!5e0!3m2!1sen!2sin!4v1724745600000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      className="border-0 w-full h-full"
    ></iframe>
  </div>
</div>

</div>


    
 <Fotter/>

</div>
  )
}


export default Home