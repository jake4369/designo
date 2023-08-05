import { webDesignData } from "@data/data";

import ProjectPage from "@components/shared/ProjectPage";

const WebDesign = () => {
  return (
    <ProjectPage
      data={webDesignData}
      pageTitle="Web Design"
      text={
        "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      }
    />
  );
};

export default WebDesign;
