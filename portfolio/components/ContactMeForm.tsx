import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactMeForm = () => {
  const [formStatus, setFormStatus] = useState<string>("");
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        "service_mkevlwz", // Replace with your service ID
        "template_gqka4o9", // Replace with your template ID
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        '7RIsSCoq_Mo5gmZ-m',
      );
      setFormStatus("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message", error);
      setFormStatus("Error sending message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Title and Description */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-center md:text-left mb-4">Contact Me</h2>
          <p className="text-lg text-gray-300 text-center md:text-left">
            If you have any queries or would like to discuss a project, feel free to reach out to me. I am happy to help with your business needs and answer any questions you have.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 sm:w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-lg mb-2">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg mb-2">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required", pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Invalid email" } })}
                className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg mb-2">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                rows={6}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Form status message */}
          {formStatus && (
            <div className={`mt-6 text-center ${formStatus.includes("Error") ? "text-red-500" : "text-green-500"}`}>
              {formStatus}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactMeForm;