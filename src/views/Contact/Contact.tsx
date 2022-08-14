import React from "react";

import { Container, Button } from "@components/index";
import { MENU, SOCIAL_MEDIA } from "@constants/index";
import { GitHub, Linkedin, Mail } from "react-feather";

const Contact: React.FC = (): JSX.Element => {
  const onOpenMail = () => {
    window.open(`mailto:${SOCIAL_MEDIA.EMAIL}`);
  };

  return (
    <Container>
      <div className="col-span-12 grid grid-cols-12 h-[600px] items-center text-center">
        <div className="col-span-10 md:col-span-6 col-start-2 md:col-start-4">
          <h4 className="font-bold text-2xl font-sans mb-4 text-white/90">
            Contact me
          </h4>
          <p className="font-sans text-white/70 text-sm">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <Button className="mt-8" onClick={onOpenMail}>
            Say Hello
          </Button>
        </div>
      </div>
      <div
        id={MENU.CONTACT}
        className="col-span-12 h-[50px] flex flex-col justify-center items-center"
      >
        <div className="flex font-mono text-xs">
          <div className="flex mx-2 items-center">
            <Mail size={14} className="mx-1" />
            <a
              href={SOCIAL_MEDIA.EMAIL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
          <div className="flex mx-2 items-center">
            <GitHub size={14} className="mx-1" />
            <a
              href={SOCIAL_MEDIA.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className="flex mx-2 items-center">
            <Linkedin size={14} className="mx-1" />
            <a
              href={SOCIAL_MEDIA.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mb-10 mt-2 text-xs font-mono">
          ©{new Date().getFullYear()} - iko bagas haekal
        </div>
      </div>
    </Container>
  );
};

export default Contact;
