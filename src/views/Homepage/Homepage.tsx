import React from "react";

import { Button, Container } from "@components/index";
import { MENU } from "@constants/index";
import { Download } from "react-feather";

const Homepage: React.FC = (): JSX.Element => {
  return (
    <Container id={MENU.HOMEPAGE}>
      <div className="col-span-12 min-h-screen flex flex-col justify-center items-start">
        <p className="text-lightGreen pb-3 font-mono">Hi 👋 , my name is</p>
        <h1 className="font-bold font-sans text-2xl lg:text-5xl xl:text-7xl tracking-wide text-gray-300">
          Iko Bagas Haekal
          <br />
          {`I'm a Frontend Engineer`}
        </h1>
        <div className="sm:w-8/12 md:w-8/12">
          <p className="mt-4 text-gray-400">
            Detail-oriented Front End Developer with more than 1 years
            experience working with HTML, CSS, Javascript, React, Nextjs, and
            TypeScript. Highly adept at both independent and collaborative
            projects
          </p>
        </div>
        <a href="/cv_frontend_iko.pdf" target="_blank">
          <Button className="mt-5 px-6 font-mono flex items-center animate-bounce w-200 h-50 ">
            My Resume
            <div className="ml-2">
              <Download size={20} />
            </div>
          </Button>
        </a>
      </div>
    </Container>
  );
};

export default Homepage;
