import "./AboutUs.css";
import AboutImage from "../../assets/image.png"; // your uploaded image

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        <div className="about-grid">

          {/* LEFT SIDE - Text */}
          <div className="about-left">
            <h2 className="about-animate delay-1 text-5xl font-extrabold mb-6">
              Who <span className="text-white">We Are</span>
            </h2>

            <p className="about-animate delay-2">
              We are a modern web development team passionate about crafting sleek,
              high-performance websites and intuitive user experiences. We turn
              creative ideas into digital solutions that drive growth and leave a
              lasting impression.
            </p>

            <p className="about-animate delay-3">
              With 1 successful project delivered for a leading client, our
              strategy-driven approach blends technical expertise with modern
              design principles to deliver digital experiences that truly matter.
            </p>

            <div className="about-animate delay-4 mt-6 flex gap-4">
              <button className="cta-primary">Discover Our Work</button>
              <button className="cta-secondary">Get in Touch</button>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="about-right about-animate delay-5">
            <div className="about-image-container">
              <img
                src={AboutImage}
                className="img multiply"
                alt="About Us Illustration"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
