import React from "react";

import { Container, Card } from "@components/index";
import { MENU } from "@constants/index";

const AdditionalProject: React.FC = (): JSX.Element => {
  return (
    <Container id={MENU.ADDITIONAL_PROJECT}>
      <div className="col-span-12 flex font-sans font-bold text-xl mb-4 md:mb-10 text-gray-200 items-center justify-center">
        <h3>My Personal Projects</h3>
      </div>
      <div className="col-span-12 grid grid-cols-12 gap-4">
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          className="col-span-12 md:col-span-4"
        >
          <Card
            title="Covid data"
            description="covid data created by vue to find out the number of people infected with covid in a country"
            tags={["Vue 2", "css"]}
            github="https://github.com/tomibudis/galaxy-labs"
            link="https://haekalcovid.netlify.app/"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          className="col-span-12 md:col-span-4"
        >
          <Card
            title="Url shortener"
            description="Url shortener created with laravel to simplify your url"
            tags={["PHP", "Laravel"]}
            github="https://github.com/iko16-haekal/web-lowongan-django"
          />
        </div>
      </div>
    </Container>
  );
};

export default AdditionalProject;
