import React from "react";
import Image from "next/image";

import { Container, Tag } from "@components/index";
import { MENU } from "@constants/index";
import useMediaQuery from "@hooks/useMediaQuery";

interface DetailProjectProps {
  title?: string;
  nameApp: string;
  description: string;
  tags: string[];
}

const DetailProject: React.FC<DetailProjectProps> = (props): JSX.Element => {
  return (
    <div>
      <p className="font-mono text-lightGreen text-sm">{props.title}</p>
      <p className="font-bold font-sans">{props.nameApp}</p>
      <div className="mt-2 p-4 rounded-lg bg-white/10">
        <p className="text-white/70">{props.description}</p>
      </div>
      <div className="flex flex-wrap gap-y-2 mt-2">
        {props.tags.map((tag, index) => {
          return <Tag name={tag} key={index} className="mr-2" />;
        })}
      </div>
    </div>
  );
};

const Work: React.FC = (): JSX.Element => {
  const isMobile = useMediaQuery(768);
  return (
    <Container id={MENU.WORK} className="py-10 sm:py-24 pt-24 md:mb-24">
      <div
        data-aos="fade-up"
        className="whitespace-nowrap col-span-12 flex font-bold font-sans text-2xl mb-4 text-gray-200 items-center"
      >
        <span className="text-lightGreen pr-2 font-mono text-lg">#3.</span>
        {isMobile ? (
          <h3>{`My Work's`} ⚡</h3>
        ) : (
          <h3>{`Some Things I've Develop`} ⚡</h3>
        )}
      </div>
      <div className="col-span-12 grid grid-cols-12 gap-y-0 md:gap-y-20">
        <div
          data-aos="fade-up"
          data-aos-offset="400"
          className="col-span-12 md:col-span-6 flex items-center justify-center py-5 pr-5"
        >
          <Image
            src="/images/gredu_belajar.png"
            alt="gredu belajar"
            width={429}
            height={244}
            quality={100}
          />
        </div>
        <div
          data-aos="fade-up"
          className="col-span-12 md:col-span-6 mb-10 sm:mb-0 flex items-center"
        >
          <DetailProject
            nameApp="Gredu Belajar"
            description="a combination of teacher and student web applications to 
            make it easier to make assignments as teachers or work on questions as students"
            tags={[
              "React",
              "Next js",
              "Typescript",
              "Styled component",
              "Antd",
            ]}
          />
        </div>
        <div
          data-aos="fade-up"
          className="col-span-12 md:col-span-6 order-last md:order-none mb-10 sm:mb-0"
        >
          <DetailProject
            nameApp="Gredu Teacher"
            // eslint-disable-next-line max-len
            description="Web application that works like a teacher's assistant, can automatically arrange schedules and summarize learning outcomes."
            tags={["React", "Styled component", "React query", "Antd"]}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="400"
          className="col-span-12 md:col-span-6 py-5 pl-5 flex justify-end"
        >
          <Image
            src="/images/teacher.png"
            alt="gredu teacher"
            width={429}
            height={244}
            quality={100}
          />
        </div>
      </div>
    </Container>
  );
};

export default Work;
