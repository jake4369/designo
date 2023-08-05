import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ image, heading, text }) => {
  return (
    <Link href="/" className="project-card">
      <Image
        src={image}
        alt={`${heading} image`}
        width={400}
        height={400}
        priority
      />

      <div className="project-card__text-container">
        <span className="project-card__title">{heading}</span>

        <p className="project-card__text">{text}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
