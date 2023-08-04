import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__text-content">
        <h1>Award-winning custom designs and digital branding solutions</h1>

        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>

        <Link href="/">LEARN MORE</Link>
      </div>
    </section>
  );
};

export default Hero;
