import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contact-sec py-5">
      <div className="container">
        <h1 className="text-center text-light">Contact Me</h1>
        <p className="text-center text-light mb-5">
          <em>Let's connect! Feel free to reach out via any channel.</em>
        </p>

        <div className="row justify-content-center">
          {/* Contact Info Card */}
          <div className="col-12 col-md-5 mt-3">
            <div className="contact-card p-4 rounded shadow-lg">
              {/* Contact Details */}
              <div className="contact-item d-flex align-items-center gap-3 mb-3">
                <Mail className="icon" />
                <Link to="mailto:dattimadhavi8@gmail.com" className="text-white text-decoration-none">
                  dattimadhavi8@gmail.com
                </Link>
              </div>

              <div className="contact-item d-flex align-items-center gap-3 mb-3">
                <Phone className="icon" />
                <Link to="tel:7995522590" className="text-white text-decoration-none">
                  +91 7995522590
                </Link>
              </div>

              <div className="contact-item d-flex align-items-center gap-3 mb-3">
                <MapPin className="icon" />
                <p className="mb-0 text-light">Hyderabad, Telangana, India</p>
              </div>

              {/* Social Links */}
              <div className="social-links d-flex gap-3 mt-4">
                <Link to="https://www.linkedin.com/in/madhavi-datti-b18761185/" target="_blank" className="social-icon linkedin">
                  <Linkedin />
                </Link>
                <Link to="https://github.com/Madhavi-Datti" target="_blank" className="social-icon github">
                  <Github />
                </Link>
                <Link to="https://www.instagram.com/maddycodehub?igsh=MXR2bDJsajNsdTBqYw==" target="_blank" className="social-icon instagram">
                  <Instagram />
                </Link>
                <Link to="https://wa.me/7995522590" target="_blank" className="social-icon whatsapp">
                  <MessageCircle />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-12 col-md-5 mt-3">
            <form className="contact-form p-4 rounded shadow-lg">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Your Phone Number" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-color w-100 d-flex align-items-center justify-content-center gap-2">
                <Send /> Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
