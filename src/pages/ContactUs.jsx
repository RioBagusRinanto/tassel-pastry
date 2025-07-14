import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function ContactUs() {
  return (
    <>
      <HeaderComponent />
      <section className="w-full py-16 px-4 bg-white flex items-center justify-center min-h-[60vh]">
        <div className="max-w-3xl w-full bg-orange-50 rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">
            Contact Us
          </h1>
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-700 mb-2 font-medium">
              We'd love to hear from you! Reach out to us using the details
              below.
            </p>
            <div className="flex flex-col items-center gap-2 mb-4">
              <span className="text-base text-gray-700">
                <strong>Phone:</strong> +1 (212) 555-1234
              </span>
              <span className="text-base text-gray-700">
                <strong>Email:</strong> hello@tasselpastry.com
              </span>
              <span className="text-base text-gray-700">
                <strong>Address:</strong> 123 Broadway, New York, NY 10001, USA
              </span>
            </div>
          </div>
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Tassel Pastry Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.870434839019!2d-74.0102536845937!3d40.71277577933159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c7e5e7b%3A0x8c6e2b7e7e7e7e7e!2s123%20Broadway%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1689000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}

export default ContactUs;
