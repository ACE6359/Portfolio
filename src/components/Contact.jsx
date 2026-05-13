import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const ownerName = "Shiva Chary";
const ownerEmail = "shivachary8790@gmail.com";
const ownerLinkedIn = "https://www.linkedin.com/in/u-shiva-prasan-chary-4a4625265/";

const buildMailToHref = (name, email, message) => {
  const subject = encodeURIComponent(`Portfolio contact from ${name || "someone"}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

  return `mailto:${ownerEmail}?subject=${subject}&body=${body}`;
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const emailJsConfigured = Boolean(
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID &&
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID &&
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  );

  // Initialize EmailJS on component mount
  React.useEffect(() => {
    if (emailJsConfigured) {
      emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
    }
  }, [emailJsConfigured]);

  // Debug: log env vars to console
  React.useEffect(() => {
    console.log("EmailJS Config Debug:");
    console.log("SERVICE_ID:", import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE_ID:", import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC_KEY:", import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
    console.log("emailJsConfigured:", emailJsConfigured);
  }, [emailJsConfigured]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    console.log("handleSubmit called");
    console.log("SERVICE_ID:", serviceId);
    console.log("TEMPLATE_ID:", templateId);
    console.log("PUBLIC_KEY:", publicKey);

    if (!serviceId || !templateId || !publicKey) {
      console.log("EmailJS not configured, using mailto fallback");
      // Open mailto link with a small delay and give user feedback
      setTimeout(() => {
        window.open(buildMailToHref(form.name, form.email, form.message));
      }, 100);
      
      alert("Your email client should open now with your message prefilled.\n\nIf it doesn't open, you can email directly to: " + ownerEmail);
      setLoading(false);
      return;
    }

    console.log("Attempting to send via EmailJS");
    try {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            name: form.name,
            email: form.email,
            message: form.message,
            title: "Portfolio Contact Form",
          },
          publicKey
        )
        .then(
          () => {
            console.log("Email sent successfully");
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
              name: "",
              email: "",
              message: "",
            });
            setLoading(false);
          },
          (error) => {
            console.error("EmailJS send error:", error);
            setTimeout(() => {
              window.open(buildMailToHref(form.name, form.email, form.message));
            }, 100);
            
            alert("Email service returned an error. Your email client will open now with your message prefilled.\n\nIf it doesn't open, email: " + ownerEmail);
            setLoading(false);
          }
        );
    } catch (error) {
      console.error("EmailJS error:", error);
      setTimeout(() => {
        window.open(buildMailToHref(form.name, form.email, form.message));
      }, 100);
      
      alert("Error sending message. Your email client will open now.\n\nIf it doesn't open, email: " + ownerEmail);
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-3 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-1 bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-6 grid gap-3 sm:grid-cols-2'>
          <a
            href={`mailto:${ownerEmail}`}
            className='rounded-xl border border-white/10 bg-tertiary px-4 py-3 text-white transition hover:border-white/25 hover:bg-white/10 cursor-pointer'
          >
            <p className='text-xs uppercase tracking-[0.2em] text-secondary'>Email</p>
            <p className='mt-1 break-all font-medium text-base'>{ownerEmail}</p>
            <p className='mt-2 text-xs text-secondary'>Click here or use the form below</p>
          </a>
          <a
            href={ownerLinkedIn}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-xl border border-white/10 bg-tertiary px-4 py-3 text-white transition hover:border-white/25 hover:bg-white/10'
          >
            <p className='text-xs uppercase tracking-[0.2em] text-secondary'>LinkedIn</p>
            <p className='mt-1 font-medium'>Message me on LinkedIn</p>
          </a>
        </div>

        <p className='mt-5 p-3 rounded-lg bg-tertiary/40 border border-white/10 text-sm text-secondary'>
          📧 <strong>Direct email:</strong> {ownerEmail}<br />
          You can also fill the form below and click "Open mail app" to send with your message included.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : emailJsConfigured ? "Send message" : "Open mail app"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[700px] h-[450px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
