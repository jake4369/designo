import Image from "next/image";
import { Children } from "react";

const Map = ({ children, styles }) => {
  return (
    <section className="location-info-section" style={styles ? styles : null}>
      {children}
    </section>
  );
};

export default Map;
