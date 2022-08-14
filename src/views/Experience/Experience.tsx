import React, { useCallback, useState } from "react";

import { Container, Tabs, OccupationTitle, List } from "@components/index";
import { MENU, EXPERIENCE, COMPANY } from "@constants/index";

const Experience: React.FC = (): JSX.Element => {
  const [curretTab, setCurrentTab] = useState<string>(COMPANY.GREDU);

  const handleTab = useCallback((menu: string) => {
    setCurrentTab(menu);
  }, []);

  return (
    <Container id={MENU.EXPERIENCE} className="pt-24 md:mb-24">
      <div
        data-aos="fade-up"
        className="col-span-12 flex font-sans font-semibold text-2xl mb-4 text-gray-200 items-center justify-center"
      >
        <span className="text-lightGreen pr-2 font-mono text-lg">#2.</span>
        <h3>{`Where I've worked ⚡`}</h3>
      </div>
      <div data-aos="fade-up" className="col-span-12 mt-4">
        <div className="mx-auto">
          <div className="w-12/12 grid grid-cols-12 font-mono">
            <Tabs
              menu={EXPERIENCE}
              currentActive={curretTab}
              onChange={handleTab}
            />
            <div className="col-span-12 sm:col-span-9 md:col-span-9 lg:col-span-8 xl:col-span-9 mt-5 sm:mt-0 font-sans text-gray-300">
              {curretTab === COMPANY.GREDU && (
                <div>
                  <OccupationTitle
                    title="JR Front-end Engineer"
                    company="@gredu.asia"
                    start="July 2021"
                    end="Present"
                  />
                  <div className="mt-4">
                    <List>
                      Developing web application using modern tech stack such as
                      React, Nextjs, typescript, make sure the code quality and
                      Building reusable code for future use
                    </List>
                    <List>
                      Work on a variety applet at gredu such as Teacher,
                      Student, Gredu Belajar, create new feature, maintaining
                      system and bug fix.
                    </List>
                    <List>
                      Colaborate with Backend Engineer, UI/UX and other Frontend
                      Engineer to develop new feature or refinement product.
                    </List>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
