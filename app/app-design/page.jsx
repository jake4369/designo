import { appDesignData } from "@data/data";

import ProjectPage from "@components/shared/ProjectPage";

const AppDesign = () => {
  return (
    <ProjectPage
      data={appDesignData}
      pageTitle="App Design"
      text={
        "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      }
    />
  );
};

export default AppDesign;
