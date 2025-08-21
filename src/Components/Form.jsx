import React, { useState } from 'react';
import { Lock } from 'lucide-react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // Clear error when typing
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
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
      // EmailJS configuration
      const serviceId = 'service_7v3no2a';
      const templateId = 'template_i35vtr7';
      const publicKey = '8QEKuwOQZFc7VkWay';

      const templateParams = {
        to_email: 'priyankagoyat6724@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        first_name: formData.firstName,
        last_name: formData.lastName
      };

      // Simulate EmailJS call (since we can't actually send emails in this environment)
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      alert("Message sent successfully to priyankagoyat6724@gmail.com!");
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "bg-transparent w-full outline-none text-white placeholder-gray-400";
  const errorTextClass = "text-red-400 text-xs mt-1";

  return (
    <div id='Contact Us' className='flex flex-col justify-center items-center py-12 md:py-24 px-4 md:px-24 bg-[url("/Images/Contact-Form.png")] select-none min-h-screen'>
      <h3 className="text-3xl md:text-5xl text-center text-white font-bold mb-4">
        Let's Get You Started
      </h3>
      <p className="text-base md:text-xl text-center text-gray-300 mb-12 max-w-2xl">
        Reach out, and let's create a universe of possibilities together!
      </p>

      <form className="bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col gap-8 w-full max-w-4xl p-6 md:p-8 rounded-xl shadow-2xl">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2 w-full">
            <label className="text-gray-300 text-sm font-medium">First Name</label>
            <div className="px-4 py-3 mt-2 border border-gray-600 rounded-lg bg-gray-800/50 focus-within:border-blue-400 transition-colors">
              <input
                className={inputClass}
                type="text"
                name="firstName"
                placeholder="Enter first name here"
                onChange={handleChange}
                value={formData.firstName}
              />
            </div>
            {errors.firstName && <div className={errorTextClass}>{errors.firstName}</div>}
          </div>

          <div className="md:w-1/2 w-full">
            <label className="text-gray-300 text-sm font-medium">Last Name</label>
            <div className="px-4 py-3 mt-2 border border-gray-600 rounded-lg bg-gray-800/50 focus-within:border-blue-400 transition-colors">
              <input
                className={inputClass}
                type="text"
                name="lastName"
                placeholder="Enter last name here"
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>
            {errors.lastName && <div className={errorTextClass}>{errors.lastName}</div>}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2 w-full">
            <label className="text-gray-300 text-sm font-medium">Email Address</label>
            <div className="px-4 py-3 mt-2 border border-gray-600 rounded-lg bg-gray-800/50 focus-within:border-blue-400 transition-colors">
              <input
                className={inputClass}
                type="email"
                name="email"
                placeholder="Enter email address"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            {errors.email && <div className={errorTextClass}>{errors.email}</div>}
          </div>

          <div className="md:w-1/2 w-full">
            <label className="text-gray-300 text-sm font-medium">Phone Number</label>
            <div className="px-4 py-3 mt-2 border border-gray-600 rounded-lg bg-gray-800/50 focus-within:border-blue-400 transition-colors">
              <input
                className={inputClass}
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            {errors.phone && <div className={errorTextClass}>{errors.phone}</div>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-gray-300 text-sm font-medium">Message</label>
          <div className="px-4 py-3 mt-2 border border-gray-600 rounded-lg bg-gray-800/50 focus-within:border-blue-400 transition-colors">
            <textarea
              className={inputClass + " resize-none"}
              name="message"
              placeholder="Enter message here"
              rows="4"
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          {errors.message && <div className={errorTextClass}>{errors.message}</div>}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <Lock className="text-green-400 text-xl" />
            <span className="text-gray-300 text-sm">
              Your information will be kept confidential
            </span>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-full text-white font-semibold text-lg transition-all duration-300 ${
              isSubmitting 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;