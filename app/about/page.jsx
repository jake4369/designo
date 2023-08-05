"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

const About = () => {
  const [heroImgSrc, setheroImgSrc] = useState("");
  const [talentImgSrc, setTalentImgSrc] = useState("");
  const [realDealImgSrc, setRealDealImgSrc] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 550) {
        setheroImgSrc("/assets/about/mobile/image-about-hero.jpg");
        setTalentImgSrc("/assets/about/mobile/image-world-class-talent.jpg");
        setRealDealImgSrc("/assets/about/mobile/image-real-deal.jpg");
      } else if (windowWidth >= 550 && windowWidth < 1440) {
        setheroImgSrc("/assets/about/tablet/image-about-hero.jpg");
        setTalentImgSrc("/assets/about/tablet/image-world-class-talent.jpg");
        setRealDealImgSrc("/assets/about/tablet/image-real-deal.jpg");
      } else {
        setheroImgSrc("/assets/about/desktop/image-about-hero.jpg");
        setTalentImgSrc("/assets/about/desktop/image-world-class-talent.jpg");
        setRealDealImgSrc("/assets/about/desktop/image-real-deal.jpg");
      }
    };

    // Initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <section className="about-us__hero-section">
        <Image
          src={heroImgSrc}
          alt=""
          width={500}
          height={500}
          quality={100}
          priority
        />

        <div className="about-us__hero-section__text-content">
          <h1>About Us</h1>

          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </section>

      <section className="about-us-section">
        <Image
          src={talentImgSrc}
          alt=""
          width={500}
          height={500}
          quality={100}
          priority
        />

        <div className="about-us-section__text-content">
          <h2>World-class talent</h2>

          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>

          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </section>

      <section className="about-us-section">
        <Image
          src={realDealImgSrc}
          alt=""
          width={500}
          height={500}
          quality={100}
          priority
        />

        <div className="about-us-section__text-content">
          <h2>The real deal</h2>

          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>

          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
