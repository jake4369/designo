import { graphicDesignData } from "@data/data";

import ProjectPage from "@components/shared/projectPages/ProjectPage";

const GraphicDesign = () => {
  return (
    <ProjectPage
      data={graphicDesignData}
      pageTitle="Graphic Design"
      mainText={
        "We deliver eye-catching branding materials that are tailored to meet your business objectives."
      }
    />
  );
};

export default GraphicDesign;
