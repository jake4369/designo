import Link from "next/link";

const ProjectPageLink = ({ href, heading }) => {
  return (
    <Link
      href={href}
      className={`project-page-link project-page-link__${heading}`}
    >
      <h3>{heading}</h3>
      <span>VIEW PROJECTS</span>
    </Link>
  );
};

export default ProjectPageLink;
