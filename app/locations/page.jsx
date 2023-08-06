"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import Map from "@components/Locations/Map";

const Locations = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 500 || windowWidth >= 1440) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
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
      {/* CANADA */}
      <Map>
        <Image
          src={
            isDesktop
              ? "/assets/locations/desktop/image-map-canada.png"
              : "/assets/locations/tablet/image-map-canada.png"
          }
          alt="Canada office"
          width={375}
          height={320}
          quality={100}
        />

        <div className="location-data__contact-info">
          <span className="location-name">Canada</span>

          <div className="contact-info__flex-container">
            <p>
              <span>Designo Central Office</span>
              3886 Wellington Street <br /> Toronto, Ontario M9C 3J5
            </p>

            <p>
              <span>Contact</span>
              P : +1 253-863-8967 <br /> M : contact@designo.co
            </p>
          </div>
        </div>
      </Map>

      {/* AUSTRALIA */}
      <Map styles={{ flexDirection: "row" }}>
        <Image
          src={
            isDesktop
              ? "/assets/locations/desktop/image-map-australia.png"
              : "/assets/locations/tablet/image-map-australia.png"
          }
          alt="Australia office"
          width={375}
          height={320}
          quality={100}
        />

        <div className="location-data__contact-info">
          <span className="location-name">Australia</span>

          <div className="contact-info__flex-container">
            <p>
              <span>Designo AU Office</span>
              19 Balonne Street <br /> New South Wales 2443
            </p>

            <p>
              <span>Contact</span>
              P : (02) 6720 9092 <br /> M : contact@designo.au
            </p>
          </div>
        </div>
      </Map>

      {/* UNITED KINGDOM */}
      <Map>
        <Image
          src={
            isDesktop
              ? "/assets/locations/desktop/image-map-united-kingdom.png"
              : "/assets/locations/tablet/image-map-uk.png"
          }
          alt="UK office"
          width={375}
          height={320}
          quality={100}
        />

        <div className="location-data__contact-info">
          <span className="location-name">United Kingdom</span>

          <div className="contact-info__flex-container">
            <p>
              <span>Designo UK Office</span>
              13 Colorado Way <br /> Rhyd-y-fro SA8 9GA
            </p>

            <p>
              <span>Contact</span>
              P : 078 3115 1400 <br /> M : contact@designo.uk
            </p>
          </div>
        </div>
      </Map>
    </div>
  );
};

export default Locations;
