import React from "react";
import Image from "next/image";

import { Container } from "@components/index";
import { MENU, SKILLS } from "@constants/index";
import { Navigation2 } from "react-feather";
import useBrowserAgent from "@hooks/useBrowserAgent";
import useMediaQuery from "@hooks/useMediaQuery";

const About: React.FunctionComponent = (): JSX.Element => {
  const { isSafari } = useBrowserAgent();
  const isMobile = useMediaQuery(768);
  return (
    <Container id={MENU.ABOUT} className="mb-80 md:mb-20 pt-24">
      <div
        data-aos="fade-up"
        className="col-span-12 flex font-bold font-sans text-2xl mb-4 text-gray-200 items-center"
      >
        <span className="text-lightGreen pr-2 font-mono text-lg">#1.</span>
        <h3>About Me ⚡</h3>
      </div>
      <div data-aos="fade-up" className="col-span-12 md:col-span-8 mb-20">
        <p className="font-sans text-white/70 md:pr-10">
          Hi, {`I'm `}Iko My interests are in Front End Engineering, and I love
          to create beautiful and performant products with delightful user
          experiences.
        </p>

        <p className="font-sans text-white/70 md:pr-10 mt-3">
          Here are a few technologies that I’ve been used recently:
        </p>

        <div className="font-sans text-white/70 grid grid-rows-3 grid-flow-col gap-1 mt-3">
          {SKILLS.map((skill, index) => {
            return (
              <p key={index} className="flex items-center">
                <Navigation2
                  size={14}
                  className="rotate-90 text-lightGreen mr-2"
                />
                {skill}
              </p>
            );
          })}
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="col-span-12 md:col-span-4 flex md:items-center justify-center relative"
      >
        <div className="absolute md:right-0 z-10 md:mr-10 md:hover:mr-5 md:hover:-mt-5 ease-in-out transition-all duration-300">
          <Image
            src="/images/profile.jpeg"
            alt="profile"
            width={259}
            height={270}
            quality={100}
            className="rounded-lg"
          />
        </div>
        {!(isSafari && isMobile) && (
          <div className="absolute md:right-0 z-0 mt-5 mr-10 md:-mt-10 md:mr-0 md:ml-5 md:mb-10 w-64 h-64 border-2 border-white rounded" />
        )}
      </div>
    </Container>
  );
};

export default About;
