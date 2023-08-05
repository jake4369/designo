import { appDesignData } from "@data/data";

import ProjectPage from "@components/shared/projectPages/ProjectPage";

const AppDesign = () => {
  return (
    <ProjectPage
      data={appDesignData}
      pageTitle="App Design"
      mainText={
        "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      }
    />
  );
};

export default AppDesign;
