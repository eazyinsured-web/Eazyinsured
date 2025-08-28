import React, { useState } from "react";
import { Lock } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import { emailjsConfig } from '../config/emailjs';
import { Loader2 } from 'lucide-react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

function InsuranceForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error while typing
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.service.trim())
      newErrors.service = "Please select inquiry type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare template parameters for your beautiful email template
      const templateParams = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: "", // Not collected in this form
        address: formData.address,
        service: formData.service,
        remarks: formData.message,
        time: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'medium',
          timeStyle: 'short'
        })
      };

      // Send email using EmailJS with your template
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
          email: "",
          phone: "",
          address: "",
          service: "",
          message: "",
        });

        // Reset success state after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error('Sorry, something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "bg-transparent w-full outline-none text-black placeholder-gray-500";
  const errorTextClass = "text-red-500 text-xs mt-1";

  return (
    <div
      id="Contact Us"
      className="flex flex-col justify-center items-center py-12 md:py-14 px-4 md:px-24 
      bg-gradient-to-br from-[#0a4b81] via-[#13609f] to-[#22af56] min-h-screen"
    >
      <h3 className="text-3xl md:text-5xl text-center text-white font-bold mb-4">
        Get Your Insurance Quote
      </h3>
      <p className="text-base md:text-xl text-center text-gray-200 mb-12">
        Fill out the form below and we'll get back to you with the best plans
        tailored to your needs.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white backdrop-blur-sm border border-white/10 flex flex-col gap-4 w-full max-w-4xl p-4 md:p-8 rounded-xl shadow-2xl"
      >
        {/* Row 1: Name + Email */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2 w-full">
            <label className="text-gray-700 text-sm font-medium">Name</label>
            <div className="px-4 py-3 mt-2 border border-gray-600 bg-gray-300/50 rounded-lg focus-within:border-blue-400 transition-colors">
              <input
                className={inputClass}
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            {errors.name && <div className={errorTextClass}>{errors.name}</div>}
          </div>

          <div className="md:w-1/2 w-full">
            <label className="text-gray-700 text-sm font-medium">
              Email Address
            </label>
            <div className="px-4 py-3 mt-2 border border-gray-600 bg-gray-300/50 rounded-lg focus-within:border-blue-400 transition-colors">
              <input
                className={inputClass}
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            {errors.email && (
              <div className={errorTextClass}>{errors.email}</div>
            )}
          </div>
        </div>

        {/* Row 2: Phone + Address */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2 w-full">
            <label className="text-gray-700 text-sm font-medium">
              Phone Number
            </label>
            <div className="px-4 py-3 mt-2 border border-gray-600 bg-gray-300/50 rounded-lg focus-within:border-blue-400 transition-colors">
              <input
                className={inputClass}
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            {errors.phone && (
              <div className={errorTextClass}>{errors.phone}</div>
            )}
          </div>

          <div className="md:w-1/2 w-full">
            <label className="text-gray-700 text-sm font-medium">Address</label>
            <div className="px-4 py-3 mt-2 border border-gray-600 bg-gray-300/50 rounded-lg focus-within:border-blue-400 transition-colors">
              <input
                className={inputClass}
                type="text"
                name="address"
                placeholder="Enter your address"
                onChange={handleChange}
                value={formData.address}
              />
            </div>
            {errors.address && (
              <div className={errorTextClass}>{errors.address}</div>
            )}
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label className="text-gray-700 text-sm font-medium">
            Inquiry Type
          </label>
          <div className="px-4 py-3 mt-2 border border-gray-600 bg-gray-300/50 rounded-lg focus-within:border-blue-400 transition-colors">
            <select
              name="service"
              onChange={handleChange}
              value={formData.service}
              className="w-full bg-transparent outline-none text-black"
            >
              <option value="">Select Inquiry Type</option>
              <option value="life">Life Insurance</option>
              <option value="health">Health Insurance</option>
              <option value="vehicle">Vehicle Insurance</option>
            </select>
          </div>
          {errors.service && (
            <div className={errorTextClass}>{errors.service}</div>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="text-gray-700  text-sm font-medium">Message</label>
          <div className="px-4 py-3 mt-2 border border-gray-600 select-none bg-gray-300/50 rounded-lg focus-within:border-blue-400 transition-colors">
            <textarea
              className={inputClass + " resize-none"}
              name="message"
              placeholder="Enter message here"
              rows="4"
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          {errors.message && (
            <div className={errorTextClass}>{errors.message}</div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <Lock className="text-green-500 text-xl" />
            <span className="text-gray-400 text-sm">
              Your information will be kept confidential
            </span>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-full text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
              isSubmitted
                ? "bg-green-500"
                : isSubmitting
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-br from-blue-500 to-[#22af56] hover:from-[#0b6a2e] hover:to-[#22af56] hover:scale-105 shadow-lg hover:shadow-xl"
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : isSubmitted ? (
              <>
                <IoMdCheckmarkCircleOutline className="w-6 h-6" />
                Sent Successfully!
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default InsuranceForm;
