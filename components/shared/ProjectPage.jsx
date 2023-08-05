import ProjectPageHeader from "@components/shared/ProjectPageHeader";
import ProjectCard from "@components/shared/ProjectCard";
import ProjectPageLink from "@components/shared/ProjectPageLink";

const ProjectPage = ({ data, pageTitle, mainText }) => {
  const projectCards = data.map((obj) => (
    <ProjectCard
      key={obj.heading}
      image={obj.image}
      heading={obj.heading}
      text={obj.text}
    />
  ));

  const categories = {
    "Web Design": [
      { href: "/app-design", heading: "App Design" },
      { href: "/graphic-design", heading: "Graphic Design" },
    ],
    "App Design": [
      { href: "/web-design", heading: "Web Design" },
      { href: "/graphic-design", heading: "Graphic Design" },
    ],
    "Graphic Design": [
      { href: "/app-design", heading: "App Design" },
      { href: "/web-design", heading: "Web Design" },
    ],
  };

  const currentCategory =
    pageTitle === "Web Design"
      ? "Web Design"
      : pageTitle === "App Design"
      ? "App Design"
      : "Graphic Design";

  const currentCategoryLinks = categories[currentCategory];

  return (
    <div className="project__page">
      <ProjectPageHeader heading={pageTitle} text={mainText} />
      <section className="project-cards-section">{projectCards}</section>
      <section className="project-page__link-section">
        {currentCategoryLinks.map((link) => (
          <ProjectPageLink
            key={link.href}
            href={link.href}
            heading={link.heading}
          />
        ))}
      </section>
      ;
    </div>
  );
};

export default ProjectPage;
