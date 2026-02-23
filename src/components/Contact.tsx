import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

// ✅ Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const service_id = import.meta.env.VITE_SERVICE_ID;
const public_id = import.meta.env.VITE_PUBLIC_ID;
const template_id = import.meta.env.VITE_TEMPLATE_ID;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      emailjs.send(service_id, template_id, data, public_id);
      reset();
      toast.success("Message sent successfully.");
    } catch (error: Error | any) {
      toast.error(error.message);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-linear-to-b from-dark-light via-[#0a0f1a] to-[#05080f]"
    >
      <div className="max-w-4xl w-full text-center space-y-10">
        <div className="space-y-4">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-blue-400 to-cyan-400">
            Get In Touch
          </h2>

          {/* Subtext */}
          <p className="text-gray-400 max-w-xl mx-auto">
            Whether you want to talk about web development, collaborate on a
            project, or just say hi — my inbox is always open.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/zetmosoma10"
            target="_blank"
            className="text-gray-400 hover:text-white hover:scale-110 transition"
          >
            <FiGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/zetmosoma/"
            target="_blank"
            className="text-gray-400 hover:text-[#0A66C2] hover:scale-110 transition"
          >
            <FiLinkedin size={28} />
          </a>
          <a
            href="https://x.com/zetmosoma10"
            target="_blank"
            className="text-gray-400 hover:text-[#1DA1F2] hover:scale-110 transition"
          >
            <BsTwitterX size={28} />
          </a>
        </div>

        {/* ✅ Contact Form with React Hook Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 grid gap-5 max-w-xl mx-auto w-full text-left"
        >
          <div>
            <input
              {...register("name")}
              placeholder="Your Name"
              className="input"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email")}
              placeholder="Your Email"
              className="input"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("message")}
              placeholder="Your Message"
              rows={5}
              className="input"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 cursor-pointer font-semibold text-white rounded-lg bg-linear-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 transition ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
