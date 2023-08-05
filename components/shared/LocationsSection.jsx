import Image from "next/image";
import Link from "next/link";

const data = [
  {
    image: "/assets/shared/desktop/illustration-australia.svg",
    alt: "Illustration of Toronto",
    location: "Canada",
  },
  {
    image: "/assets/shared/desktop/illustration-canada.svg",
    alt: "Illustration of the Sydney Opera House",
    location: "Australia",
  },
  {
    image: "/assets/shared/desktop/illustration-united-kingdom.svg",
    alt: "Illustration of London Bridge",
    location: "United Kingdom",
  },
];

const LocationsSection = () => {
  return (
    <section className="locations-section">
      {data.map((obj) => {
        return (
          <div className="location-section__component">
            <Image src={obj.image} alt={obj.alt} width={100} height={100} />
            <span className="country__name">{obj.location}</span>
            <Link href="/locations" className="link__btn">
              See Locations
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default LocationsSection;
