const ProjectPageHeader = ({ heading, text }) => {
  return (
    <header className="project-page__header">
      <h1>{heading}</h1>

      <p>{text}</p>
    </header>
  );
};

export default ProjectPageHeader;
