import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { useForm, ValidationError } from '@formspree/react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [state, handleSubmit] = useForm("mqkogvdl");
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-9xl font-bold">Thank You</h1>
          <h2>I'll get back to you as soon as possible.</h2>
        </div>
      </div>
    );
  }
  
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ transition1 }}
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          <div className="lg:flex-1 lg:pt-52 px-4">
            <h1 className="h1">Get In Touch</h1>
            <p className="mb-12">
              I would be delighted to hear from you and explore potential
              opportunities to work together. <br /> Please fill out the contact
              form below and I'll get back to you as soon as possible.
            </p>
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <textarea
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              <button className="btn mb-[100px] mx-auto lg:mx-0 self-start" type="submit" disabled={state.submitting}>
                Send it
              </button>
            </form>
          </div>
        </div>
      </div>
      {state.succeeded && (
        <div className="text-center mt-6 mb-12">
          <p className="text-lg font-medium text-green-500">
            Thanks for contacting us! We'll get back to you soon.
          </p>
        </div>
      )}

      {state.submitting && (
        <div className="text-center mt-6 mb-12">
          <p className="text-lg font-medium text-primary">
            Sending message...
          </p>
        </div>
      )}

      {state.errors.length > 0 && (
        <div className="text-center mt-6 mb-12">
          <p className="text-lg font-medium text-red-500">
            There was an error sending your message. Please try again later.
          </p>
        </div>
      )}
      
    </motion.section>
  );
};

export default ContactForm;
