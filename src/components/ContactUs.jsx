import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Phone number is not valid")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string(),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const serviceId = "service_sg1gmms";
    const templateId = "template_kp3kotg";
    const publicKey = "nOvQX78g9XAjb--M3";

    const templateParams = {
      user_name: values.name,
      user_email: values.email,
      user_phone: values.phone,
      message: values.message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (result) => {
          console.log(result);
          console.log(templateParams);
          toast.success("Message sent successfully!", {
            position: "top-center",
          });
          resetForm();
        },
        (error) => {
          console.log(error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
          });
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  // eslint-disable-next-line react/prop-types
  const CustomErrorMessage = ({ name }) => (
    <ErrorMessage name={name}>
      {(msg) => (
        <div className="text-red-400 text-sm mt-1 bg-red-100 border border-red-400 rounded-md px-2 py-1">
          {msg}
        </div>
      )}
    </ErrorMessage>
  );

  return (
    <div id="contact">
      <div className="mt-12 sm:ml-20 sm:mr-20 bg-tertiary-0 text-white rounded-lg">
        <h1 className="font-semibold text-3xl text-center py-10">Contact Us</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-5 justify-center mx-5 sm:mx-52 pb-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
                <div className="flex flex-col sm:w-1/2 gap-2">
                  <label htmlFor="name" className="font-medium">
                    Name*
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="rounded-full px-5 py-3 text-black
                   focus:outline-none focus:ring-2 focus:ring-secondary-0 focus:ring-offset-2 focus:ring-offset-white
                   transition duration-150 ease-in-out"
                  />
                  <CustomErrorMessage name="name" />
                </div>
                <div className="flex flex-col gap-2 sm:w-1/2">
                  <label htmlFor="phone" className="font-medium">
                    Phone*
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="+91 9769152377"
                    className="rounded-full px-5 py-3 text-black
                    focus:outline-none focus:ring-2 focus:ring-secondary-0 focus:ring-offset-2 focus:ring-offset-white
                    transition duration-150 ease-in-out"
                  />
                  <CustomErrorMessage name="phone" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium">
                  Email*
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="rounded-full px-5 py-3 text-black
                 focus:outline-none focus:ring-2 focus:ring-secondary-0 focus:ring-offset-2 focus:ring-offset-white
                 transition duration-150 ease-in-out"
                />
                <CustomErrorMessage name="email" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message">Your Message</label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="rounded-lg px-5 py-2 text-black
                 focus:outline-none focus:ring-2 focus:ring-secondary-0 focus:ring-offset-2 focus:ring-offset-white
                 transition duration-150 ease-in-out"
                />
              </div>
              <div className="flex gap-6 items-center justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-3xl bg-white text-primary-0 px-5 py-2 hover:bg-slate-100 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <span>
                  or call{" "}
                  <a href="tel:9769152377" className="underline">
                    +91 9769152377
                  </a>
                </span>
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </div>
      <div className="my-16"></div>
    </div>
  );
};

export default ContactUs;
