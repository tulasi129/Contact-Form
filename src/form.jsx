import { useState } from "react";
import { toast } from "react-toastify";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  //Form Validations
  const validate = () => {
    let formErrors = {};
    let isValid = true;

     // Email validaton
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Invalid email address";
      isValid = false;
    }

    // Phone Number validaton
    const phonePattern = /^[0-9]{3}\s?[0-9]{3}-?[0-9]{4}$/;
    if (!formData.phoneNumber) {
      formErrors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (!phonePattern.test(formData.phoneNumber)) {
      formErrors.phoneNumber = "Invalid phone number format";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      toast.success("Form submitted successfully");

      // Form resetting
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        phoneNumber: "",
        message: "",
      });
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md max-w-md w-full"
      >
        <p className="text-md font-semibold text-center text-blue-600 mb-2">
          Contact Us
        </p>
        <h1 className="text-3xl font-semibold text-center mb-2">
          Get in touch
        </h1>
        <p className="text-center text-gray-600 mb-5">
          We'd love to hear from you. Please fill out this form.
        </p>
        <div className="flex gap-2 mb-3">
          <div className="w-full">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              required
              className={`mt-1 p-2 border ${
                errors.firstName ? "border-red-600" : "border-gray-300"
              } rounded w-full focus:border-blue-600`}
              value={formData.firstName}
              onChange={handleOnChange}
            />
            {errors.firstName && (
              <p className="text-red-600 text-xs">{errors.firstName}</p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              required
              className={`mt-1 p-2 border ${
                errors.lastName ? "border-red-600" : "border-gray-300"
              } rounded w-full focus:border-blue-600`}
              value={formData.lastName}
              onChange={handleOnChange}
            />
            {errors.lastName && (
              <p className="text-red-600 text-xs">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            required
            className={`mt-1 p-2 border ${
              errors.email ? "border-red-600" : "border-gray-300"
            } rounded w-full focus:border-blue-600`}
            value={formData.email}
            onChange={handleOnChange}
          />
          {errors.email && (
            <p className="text-red-600 text-xs">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
            className={`mt-1 p-2 border ${
              errors.subject ? "border-red-600" : "border-gray-300"
            } rounded w-full focus:border-blue-600`}
            value={formData.subject}
            onChange={handleOnChange}
          />
          {errors.subject && (
            <p className="text-red-600 text-xs">{errors.subject}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="555 000-0000"
            required
            className={`mt-1 p-2 border ${
              errors.phoneNumber ? "border-red-600" : "border-gray-300"
            } rounded w-full focus:border-blue-600`}
            value={formData.phoneNumber}
            onChange={handleOnChange}
          />
          {errors.phoneNumber && (
            <p className="text-red-600 text-xs">{errors.phoneNumber}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Please type your message"
            className={`mt-1 p-2 border ${
              errors.message ? "border-red-600" : "border-gray-300"
            } rounded w-full h-32 focus:border-blue-600`}
            required
            value={formData.message}
            onChange={handleOnChange}
          />
          {errors.message && (
            <p className="text-red-600 text-xs">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
