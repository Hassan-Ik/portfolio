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
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-lg mb-2">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required", pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Invalid email" } })}
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg mb-2">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={6}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    </section>
  );
}

export default ContactMeForm;