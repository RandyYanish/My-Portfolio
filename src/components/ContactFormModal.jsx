import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactFormModal = ({ isOpen, closeModal }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  // eslint-disable-next-line no-unused-vars
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, handleSubmit] = useForm('xrgwrbll');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = async () => {
    const errors = {};
    if (!formValues.name) {
      errors.name = 'Name is required';
    }
    if (!formValues.email) {
      errors.email = 'Email is required';
    }
    if (!formValues.message) {
      errors.message = 'Message is required';
    }
    if (Object.keys(errors).length === 0) {
      await handleSubmit();
      setIsSubmitted(true);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'}`}>
      <button
        className="modal-close absolute top-2 right-2"
        onClick={closeModal}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 5.07959L13 12.9996"
            stroke="black" // Change this to your desired SVG color
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 12.9199L13 4.99991"
            stroke="black" // Change this to your desired SVG color
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <form onSubmit={handleFormSubmit}>
        <div className="form-input">
          <label htmlFor="name" className="font-bold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            required
            className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          />
          <ValidationError prefix="Name" field="name" errors={formState.errors} />
        </div>
        <div className="form-input">
          <label htmlFor="email" className="font-bold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          />
          <ValidationError prefix="Email" field="email" errors={formState.errors} />
        </div>
        <div className="form-input">
          <label htmlFor="message" className="font-bold">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleInputChange}
            rows="4"
            required
            className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          />
          <ValidationError prefix="Message" field="message" errors={formState.errors} />
        </div>
        <button
          type="submit"
          className="submit-button bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600"
          disabled={formState.submitting}
        >
          Submit
        </button>
        {isSubmitted && formState.succeeded && (
          <p className="text-green-500 mt-4">Form submitted successfully!</p>
        )}
      </form>
    </div>
  );
};

export default ContactFormModal;
